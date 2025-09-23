---
title: Production Deployment
description: Production-ready installation with SSL, nginx, and systemd
---

Production deployment creates a secure, scalable TractStack installation with SSL certificates, reverse proxy, and automatic service management.

## Production Installation Types

### Single-Tenant Production

One website per server installation.

```bash
curl -fsSL https://get.tractstack.com | bash -s -- --prod --domain=yourdomain.com
```

### Multi-Tenant Production

Multiple websites from one installation with subdomain support.

```bash
curl -fsSL https://get.tractstack.com | bash -s -- --multi --domain=yourdomain.com
```

### Dedicated Instance

Completely isolated installation for maximum customization.

```bash
curl -fsSL https://get.tractstack.com | bash -s -- --dedicated SITE_ID --domain=yourdomain.com
```

## Prerequisites for Production

### System Requirements

- **Linux server** (Ubuntu 20.04+ recommended)
- **Root or sudo access**
- **Domain name** pointed to your server
- **Ports 80 and 443** open for web traffic

### DNS Configuration

Before installation, configure DNS:

```
# A record
yourdomain.com → YOUR_SERVER_IP

# For multi-tenant (wildcard)
*.yourdomain.com → YOUR_SERVER_IP
```

## SSL Certificate Setup

### Option 1: Cloudflare DNS (Automated)

Create API credentials file:

```bash
sudo mkdir -p /root/.secrets/certbot
sudo nano /root/.secrets/certbot/cloudflare.ini
```

Add your Cloudflare API token:

```ini
dns_cloudflare_api_token = YOUR_API_TOKEN_HERE
```

Set secure permissions:

```bash
sudo chmod 600 /root/.secrets/certbot/cloudflare.ini
```

The installer will automatically obtain SSL certificates.

### Option 2: Manual DNS Verification

Without Cloudflare credentials, the installer will:

1. **Display TXT records** to add to your DNS
2. **Wait for verification** - add the records and press Enter
3. **Issue certificates** once DNS propagates

## Production Installation Process

The installer will:

1. **Create system user** `t8k` for security isolation
2. **Install dependencies** (nginx, PM2, certbot)
3. **Clone and build** TractStack source code
4. **Configure services**:
   - systemd service for Go backend
   - PM2 process for Astro frontend
   - nginx reverse proxy
5. **Obtain SSL certificates** via Let's Encrypt
6. **Start services** and verify operation

## Production Directory Structure

```
/home/t8k/
├── src/                      # Source code
│   ├── tractstack-go/       # Go backend
│   └── my-tractstack/       # Astro frontend
├── bin/                      # Production binaries
│   └── tractstack-go        # Compiled Go binary
├── t8k-go-server/           # Data directory
│   ├── config/default/      # Site configuration
│   ├── db/default/          # Database files
│   └── log/                 # Application logs
├── etc/                      # Configuration
│   ├── letsencrypt/         # SSL certificates
│   ├── pm2/                 # PM2 configs
│   └── t8k-ports.conf       # Port allocations
└── scripts/                  # Maintenance scripts
    └── t8k-concierge.sh     # Build automation
```

## Service Management

### systemd Services

**Main installation:**

```bash
# Status
sudo systemctl status tractstack-go

# Start/Stop/Restart
sudo systemctl start tractstack-go
sudo systemctl stop tractstack-go
sudo systemctl restart tractstack-go

# Enable/Disable auto-start
sudo systemctl enable tractstack-go
sudo systemctl disable tractstack-go

# View logs
sudo journalctl -u tractstack-go -f
```

**Dedicated instances:**

```bash
# Replace SITE_ID with your site identifier
sudo systemctl status tractstack-go@SITE_ID
sudo systemctl restart tractstack-go@SITE_ID
sudo journalctl -u tractstack-go@SITE_ID -f
```

### PM2 Process Management

```bash
# Switch to t8k user
sudo -u t8k bash

# View processes
pm2 status

# Restart processes
pm2 restart astro-main           # Main installation
pm2 restart astro-SITE_ID       # Dedicated instance

# View logs
pm2 logs astro-main
pm2 logs astro-SITE_ID

# Monitor in real-time
pm2 monit
```

### nginx Configuration

```bash
# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx

# View error logs
sudo tail -f /var/log/nginx/error.log

# View access logs
sudo tail -f /var/log/nginx/access.log
```

## Port Allocation

TractStack automatically manages ports via `/home/t8k/etc/t8k-ports.conf`:

### Main Installation

- **Go backend**: Port 10000
- **Astro frontend**: Port 20000

### Dedicated Instances

- **Go backend**: Ports 10001, 10002, 10003...
- **Astro frontend**: Ports 20001, 20002, 20003...

nginx handles public traffic on ports 80/443 and proxies to these internal ports.

## Multi-Tenant Features

### Tenant Registration

Visit `https://yourdomain.com/sandbox/register` to create new tenants.

### Subdomain Routing

Each tenant gets a subdomain:

- `tenant1.yourdomain.com`
- `tenant2.yourdomain.com`
- `admin.yourdomain.com`

### Tenant Isolation

- **Separate databases** per tenant
- **Isolated media storage**
- **Independent configurations**
- **Usage monitoring** and limits

## Build Automation

The build concierge processes automated deployments:

### Triggering Builds

Create CSV files in `/home/t8k/state/`:

```csv
type=main,tenant=default,command=build
```

For dedicated instances:

```csv
type=dedicated,site=SITE_ID,command=build
```

### Build Process

1. **Pull latest code** from Git repositories
2. **Build Go backend** and Astro frontend
3. **Extract Tailwind whitelist** for optimization
4. **Restart services** automatically
5. **Clean up** processed files

### Manual Build

```bash
sudo -u t8k /home/t8k/scripts/t8k-concierge.sh
```

## SSL Certificate Management

### Certificate Renewal

Certificates auto-renew via cron job:

```bash
# Check renewal status
sudo -u t8k /home/t8k/certbot_venv/bin/certbot certificates

# Test renewal
sudo -u t8k /home/t8k/certbot_venv/bin/certbot renew --dry-run

# Force renewal (if needed)
sudo -u t8k /home/t8k/certbot_venv/bin/certbot renew --force-renewal
```

### Manual Certificate Request

```bash
sudo -u t8k bash -c "source /home/t8k/certbot_venv/bin/activate && \
  certbot certonly --manual --preferred-challenges dns \
  --config-dir /home/t8k/etc/letsencrypt \
  --work-dir /home/t8k/lib/letsencrypt \
  --logs-dir /home/t8k/log/letsencrypt \
  --agree-tos --email admin@yourdomain.com \
  -d yourdomain.com -d *.yourdomain.com"
```

## Monitoring & Maintenance

### Log Files

- **Application logs**: `/home/t8k/t8k-go-server/log/`
- **nginx logs**: `/var/log/nginx/`
- **systemd logs**: `journalctl -u tractstack-go`
- **PM2 logs**: `pm2 logs`

### Health Checks

```bash
# Check all services
sudo systemctl status tractstack-go nginx
sudo -u t8k pm2 status

# Test HTTP response
curl -I https://yourdomain.com

# Check SSL certificate
echo | openssl s_client -connect yourdomain.com:443 2>/dev/null | openssl x509 -noout -dates
```

### Database Backup

```bash
# Backup SQLite database
sudo -u t8k cp /home/t8k/t8k-go-server/db/default/tractstack.db \
  /home/t8k/backups/tractstack-$(date +%Y%m%d).db

# Automated backup script
sudo -u t8k crontab -e
# Add: 0 2 * * * cp /home/t8k/t8k-go-server/db/default/tractstack.db /home/t8k/backups/tractstack-$(date +\%Y\%m\%d).db
```

## Security Considerations

### Firewall Configuration

```bash
# Allow web traffic
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow SSH (adjust port as needed)
sudo ufw allow 22/tcp

# Enable firewall
sudo ufw enable
```

### User Security

- **Dedicated user**: Services run as `t8k` user, not root
- **File permissions**: Restrictive permissions on configuration files
- **Process isolation**: Each service runs in its own context

### SSL Security

- **A+ SSL rating**: Modern TLS configuration
- **HSTS headers**: Force HTTPS connections
- **Certificate transparency**: Automatic CT log submission

## Troubleshooting Production

### Common Issues

**Services won't start:**

```bash
# Check logs for errors
sudo journalctl -u tractstack-go --no-pager
sudo -u t8k pm2 logs astro-main

# Verify ports aren't in use
sudo netstat -tlnp | grep :10000
sudo netstat -tlnp | grep :20000
```

**SSL certificate issues:**

```bash
# Check certificate status
sudo -u t8k /home/t8k/certbot_venv/bin/certbot certificates

# Verify DNS propagation
dig yourdomain.com
dig _acme-challenge.yourdomain.com TXT
```

**nginx configuration errors:**

```bash
# Test configuration
sudo nginx -t

# Check configuration files
sudo ls -la /etc/nginx/sites-enabled/
sudo cat /etc/nginx/sites-enabled/t8k-main.conf
```

## Performance Optimization

### nginx Tuning

Edit `/etc/nginx/sites-enabled/t8k-main.conf`:

```nginx
# Add caching headers
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Enable gzip compression
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### Database Optimization

- **Regular VACUUM**: `VACUUM;` on SQLite database
- **Consider Turso**: For high-traffic sites
- **Monitor size**: Keep track of database growth

---

_Production deployment provides a secure, scalable foundation for your TractStack site. For ongoing maintenance, see the [Operations guide](/operations/service-management/)._
