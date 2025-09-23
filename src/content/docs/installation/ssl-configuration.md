---
title: SSL Configuration
description: SSL certificate setup and management
---

TractStack automatically handles SSL certificate management using Let's Encrypt, with support for both automated and manual verification methods.

## Automated SSL (Cloudflare DNS)

The simplest approach uses Cloudflare's DNS API for automatic certificate issuance and renewal.

### Setup Cloudflare API

1. **Get API Token** from Cloudflare dashboard:
   - Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Create token with `Zone:DNS:Edit` permissions
   - Scope to your specific domain zone

2. **Create credentials file:**

```bash
sudo mkdir -p /root/.secrets/certbot
sudo nano /root/.secrets/certbot/cloudflare.ini
```

3. **Add your API token:**

```ini
dns_cloudflare_api_token = YOUR_API_TOKEN_HERE
```

4. **Secure the file:**

```bash
sudo chmod 600 /root/.secrets/certbot/cloudflare.ini
```

### Installation with Cloudflare

With credentials in place, run the installer:

```bash
curl -fsSL https://get.tractstack.com | bash -s -- --prod --domain=yourdomain.com
```

The installer will:

- Detect Cloudflare credentials
- Automatically request wildcard certificates
- Configure automatic renewal
- Set up nginx with SSL

## Manual DNS Verification

For other DNS providers, use manual verification during installation.

### Installation Process

Run the installer without Cloudflare credentials:

```bash
curl -fsSL https://get.tractstack.com | bash -s -- --prod --domain=yourdomain.com
```

### DNS Verification Steps

The installer will pause and display TXT records to add:

```
Please add the following TXT record to your DNS:
_acme-challenge.yourdomain.com TXT "abc123def456..."
_acme-challenge.yourdomain.com TXT "xyz789uvw012..."

For wildcard certificate, also add:
_acme-challenge.yourdomain.com TXT "wildcard-token..."
```

### Adding DNS Records

**For Cloudflare (manual):**

1. Go to DNS settings in Cloudflare dashboard
2. Add TXT records as shown
3. Wait 1-2 minutes for propagation

**For other providers:**

1. Access your DNS management panel
2. Add the TXT records exactly as displayed
3. Wait for DNS propagation (can take 5-15 minutes)

### Verify DNS Propagation

Check that records are visible:

```bash
dig _acme-challenge.yourdomain.com TXT
nslookup -type=TXT _acme-challenge.yourdomain.com
```

### Complete Verification

Once DNS records are added:

1. Return to the installer terminal
2. Press Enter to continue
3. Let's Encrypt will verify the records
4. Certificates will be issued and installed

## Certificate Types

### Single Domain Certificate

Covers only the specified domain:

- `yourdomain.com`

### Wildcard Certificate

Covers the domain and all subdomains:

- `yourdomain.com`
- `*.yourdomain.com`
- `www.yourdomain.com`
- `blog.yourdomain.com`
- `api.yourdomain.com`

Multi-tenant installations automatically request wildcard certificates.

## Certificate Management

### Certificate Locations

Certificates are stored at:

```
/home/t8k/etc/letsencrypt/live/yourdomain.com/
├── cert.pem          # Certificate
├── chain.pem         # Certificate chain
├── fullchain.pem     # Certificate + chain
└── privkey.pem       # Private key
```

### Automatic Renewal

Certificates auto-renew via systemd timer:

```bash
# Check renewal status
sudo -u t8k /home/t8k/certbot_venv/bin/certbot certificates

# View renewal timer
sudo systemctl status certbot-renew.timer

# Test renewal (dry run)
sudo -u t8k /home/t8k/certbot_venv/bin/certbot renew --dry-run
```

### Manual Renewal

Force certificate renewal if needed:

```bash
sudo -u t8k /home/t8k/certbot_venv/bin/certbot renew --force-renewal
sudo systemctl reload nginx
```

## nginx SSL Configuration

TractStack automatically configures nginx with modern SSL settings:

### Security Headers

```nginx
# Strong SSL configuration
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off;

# Security headers
add_header Strict-Transport-Security "max-age=63072000" always;
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
```

### HTTP to HTTPS Redirect

```nginx
server {
    listen 80;
    server_name yourdomain.com *.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

### Certificate References

```nginx
ssl_certificate /home/t8k/etc/letsencrypt/live/yourdomain.com/fullchain.pem;
ssl_certificate_key /home/t8k/etc/letsencrypt/live/yourdomain.com/privkey.pem;
```

## Troubleshooting SSL

### Certificate Request Failed

**DNS not propagated:**

```bash
# Check DNS records
dig _acme-challenge.yourdomain.com TXT

# Wait longer for propagation
# Try again in 5-10 minutes
```

**Rate limits exceeded:**

```bash
# Let's Encrypt has rate limits
# Wait an hour and try again
# Use staging environment for testing:
sudo -u t8k /home/t8k/certbot_venv/bin/certbot certonly --staging
```

### nginx SSL Errors

**Certificate file not found:**

```bash
# Check certificate files exist
sudo ls -la /home/t8k/etc/letsencrypt/live/yourdomain.com/

# Check nginx configuration
sudo nginx -t
```

**Mixed content warnings:**

```bash
# Ensure all resources use HTTPS
# Check browser console for HTTP resources
# Update any hardcoded HTTP URLs
```

### Certificate Renewal Issues

**Renewal fails:**

```bash
# Check renewal logs
sudo -u t8k /home/t8k/certbot_venv/bin/certbot renew --dry-run

# Manual renewal with verbose output
sudo -u t8k /home/t8k/certbot_venv/bin/certbot renew -v
```

**nginx reload fails:**

```bash
# Test nginx configuration
sudo nginx -t

# Check for syntax errors
sudo systemctl status nginx
```

## Custom SSL Certificates

For enterprise or custom certificates:

### Install Custom Certificate

1. **Place certificate files:**

```bash
sudo mkdir -p /home/t8k/etc/ssl/
sudo cp yourdomain.crt /home/t8k/etc/ssl/
sudo cp yourdomain.key /home/t8k/etc/ssl/
sudo chown -R t8k:t8k /home/t8k/etc/ssl/
```

2. **Update nginx configuration:**

```bash
sudo nano /etc/nginx/sites-enabled/t8k-main.conf
```

3. **Modify SSL paths:**

```nginx
ssl_certificate /home/t8k/etc/ssl/yourdomain.crt;
ssl_certificate_key /home/t8k/etc/ssl/yourdomain.key;
```

4. **Test and reload:**

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Security Best Practices

### SSL Test

Verify SSL configuration:

- [SSL Labs Test](https://www.ssllabs.com/ssltest/)
- Should achieve A+ rating

### Certificate Monitoring

Monitor certificate expiration:

```bash
# Check expiration dates
echo | openssl s_client -connect yourdomain.com:443 2>/dev/null | openssl x509 -noout -dates

# Set up monitoring alerts
# Many services available: UptimeRobot, Pingdom, etc.
```

### Backup Certificates

```bash
# Backup certificate directory
sudo -u t8k tar -czf /home/t8k/backups/ssl-$(date +%Y%m%d).tar.gz \
  /home/t8k/etc/letsencrypt/
```

## Multi-Domain Setup

For multiple domains on one server:

### Additional Certificates

```bash
# Request additional certificate
sudo -u t8k bash -c "source /home/t8k/certbot_venv/bin/activate && \
  certbot certonly --manual --preferred-challenges dns \
  --config-dir /home/t8k/etc/letsencrypt \
  -d anotherdomain.com -d *.anotherdomain.com"
```

### nginx Configuration

Create separate server blocks for each domain with their respective certificates.

---

_SSL configuration ensures secure connections to your TractStack site. For ongoing SSL management, see the [Operations guide](/operations/monitoring-logs/)._
