---
title: Domain & DNS
description: Domain setup and DNS configuration for TractStack
---

Proper domain and DNS configuration is essential for production TractStack deployments. This guide covers domain setup, DNS records, and troubleshooting.

## Domain Requirements

### Single-Tenant Setup

- **Primary domain**: `yourdomain.com`
- **Optional www**: `www.yourdomain.com`

### Multi-Tenant Setup

- **Primary domain**: `yourdomain.com`
- **Wildcard support**: `*.yourdomain.com`
- **Tenant subdomains**: `tenant1.yourdomain.com`, `tenant2.yourdomain.com`

### Custom Domains (Multi-Tenant)

- **Tenant-specific**: `tenant.example.com`
- **Branded domains**: `customer-site.com`

## DNS Configuration

### Basic DNS Records

**A Record (IPv4):**

```
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 300
```

**AAAA Record (IPv6, if available):**

```
Type: AAAA
Name: @
Value: YOUR_IPV6_ADDRESS
TTL: 300
```

**CNAME Record (www subdomain):**

```
Type: CNAME
Name: www
Value: yourdomain.com
TTL: 300
```

### Multi-Tenant DNS

**Wildcard A Record:**

```
Type: A
Name: *
Value: YOUR_SERVER_IP
TTL: 300
```

This enables all subdomains (`anything.yourdomain.com`) to resolve to your server.

### SSL Certificate DNS (Let's Encrypt)

For SSL verification, you'll need TXT records:

**Manual verification:**

```
Type: TXT
Name: _acme-challenge
Value: [provided by certbot]
TTL: 120
```

**Cloudflare API (automatic):**
No manual DNS records needed - handled automatically.

## DNS Provider Configuration

### Cloudflare

**Advantages:**

- Free SSL certificates
- CDN and DDoS protection
- API for automatic SSL verification
- Advanced DNS features

**Setup:**

1. **Add domain** to Cloudflare
2. **Update nameservers** at your registrar
3. **Set DNS records** as above
4. **Enable SSL** (Full or Full Strict)
5. **Create API token** for TractStack

**Recommended settings:**

```
SSL/TLS: Full (Strict)
Always Use HTTPS: On
Minimum TLS Version: 1.2
HSTS: Enabled
```

### Route 53 (AWS)

**Setup:**

1. **Create hosted zone** for your domain
2. **Update nameservers** at registrar
3. **Add DNS records** as above

**Example records:**

```json
{
  "Type": "A",
  "Name": "yourdomain.com",
  "AliasTarget": {
    "DNSName": "YOUR_SERVER_IP",
    "EvaluateTargetHealth": false
  }
}
```

### Google Cloud DNS

**Setup:**

1. **Create DNS zone**
2. **Add record sets**
3. **Update nameservers**

**CLI example:**

```bash
gcloud dns record-sets transaction start --zone=yourdomain-zone
gcloud dns record-sets transaction add YOUR_SERVER_IP --name=yourdomain.com. --ttl=300 --type=A --zone=yourdomain-zone
gcloud dns record-sets transaction execute --zone=yourdomain-zone
```

## Domain Registration

### Choosing a Registrar

**Recommended registrars:**

- **Namecheap**: Good balance of features and price
- **Google Domains**: Simple, reliable
- **Cloudflare**: Wholesale pricing, integrated DNS
- **Name.com**: Full-featured with good support

**Avoid:**

- Registrars with poor DNS management
- Those with restrictive transfer policies
- Providers with poor uptime records

### Domain Transfer

**Before transferring:**

1. **Unlock domain** at current registrar
2. **Get auth code** (EPP code)
3. **Ensure domain not expired**
4. **Update contact information**

**During transfer:**

1. **Initiate transfer** at new registrar
2. **Confirm via email**
3. **Wait for completion** (5-7 days)
4. **Update DNS** if changing providers

## SSL Certificate Setup

### Automatic (Recommended)

**Cloudflare DNS API:**

```bash
# During installation
sudo mkdir -p /root/.secrets/certbot
echo "dns_cloudflare_api_token = YOUR_TOKEN" | sudo tee /root/.secrets/certbot/cloudflare.ini
sudo chmod 600 /root/.secrets/certbot/cloudflare.ini
```

Installation will automatically:

- Request wildcard certificate
- Configure nginx
- Set up automatic renewal

### Manual DNS Verification

**Process:**

1. **Run installer**
2. **Add TXT records** when prompted
3. **Verify propagation**
4. **Continue installation**

**Check DNS propagation:**

```bash
dig _acme-challenge.yourdomain.com TXT
nslookup -type=TXT _acme-challenge.yourdomain.com
```

## nginx Configuration

TractStack automatically configures nginx with:

### Single Domain Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /home/t8k/etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /home/t8k/etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:20000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Multi-Tenant Configuration

```nginx
server {
    listen 443 ssl http2;
    server_name yourdomain.com *.yourdomain.com;

    ssl_certificate /home/t8k/etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /home/t8k/etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:20000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Testing and Verification

### DNS Propagation

**Check A records:**

```bash
dig yourdomain.com A
dig @8.8.8.8 yourdomain.com A
dig @1.1.1.1 yourdomain.com A
```

**Check wildcard:**

```bash
dig random.yourdomain.com A
```

**Global propagation check:**

- [whatsmydns.net](https://www.whatsmydns.net/)
- [dnschecker.org](https://dnschecker.org/)

### SSL Certificate

**Test SSL:**

```bash
curl -I https://yourdomain.com
openssl s_client -connect yourdomain.com:443 -servername yourdomain.com
```

**SSL validation:**

- [SSL Labs Test](https://www.ssllabs.com/ssltest/)
- Should achieve A+ rating

### Multi-Tenant Testing

**Test subdomains:**

```bash
curl -I https://test.yourdomain.com
curl -I https://another.yourdomain.com
```

**Tenant registration:**
Visit `https://yourdomain.com/sandbox/register`

## Troubleshooting

### DNS Issues

**Domain not resolving:**

```bash
# Check nameservers
dig NS yourdomain.com

# Check propagation
dig yourdomain.com A +trace
```

**Wildcard not working:**

```bash
# Verify wildcard record exists
dig *.yourdomain.com A

# Test specific subdomain
dig test.yourdomain.com A
```

### SSL Certificate Issues

**Certificate not found:**

```bash
# Check certificate files
sudo ls -la /home/t8k/etc/letsencrypt/live/yourdomain.com/

# Re-request certificate
sudo -u t8k /home/t8k/certbot_venv/bin/certbot certonly --manual -d yourdomain.com -d *.yourdomain.com
```

**Mixed content warnings:**

```bash
# Check for HTTP resources
grep -r "http://" /home/t8k/src/my-tractstack/src/
```

### nginx Issues

**Configuration test:**

```bash
sudo nginx -t
```

**Check logs:**

```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

**Restart nginx:**

```bash
sudo systemctl restart nginx
```

## Performance Optimization

### DNS Performance

**Lower TTL for changes:**

```
TTL: 300 (5 minutes) during changes
TTL: 3600 (1 hour) for stable setup
```

**Use DNS providers close to users:**

- Cloudflare: Global anycast network
- Route 53: AWS global infrastructure
- Google DNS: Google's global network

### CDN Integration

**Cloudflare CDN:**

1. **Enable proxy** (orange cloud) on DNS records
2. **Configure caching rules**
3. **Set up page rules** for static assets

**Custom CDN:**

```nginx
# nginx configuration for CDN
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header X-CDN-Cache "MISS";
}
```

## Security Considerations

### DNS Security

**DNSSEC (if supported):**
Enable DNSSEC at your DNS provider for additional security.

**DNS over HTTPS:**
Consider using DoH for enhanced privacy.

### Domain Protection

**Domain locking:**
Enable registrar lock to prevent unauthorized transfers.

**Privacy protection:**
Use domain privacy to protect WHOIS information.

**Monitoring:**
Set up monitoring for DNS changes and certificate expiration.

---

_Proper domain and DNS configuration ensures reliable access to your TractStack site. Take time to verify all records are correct before going live._
