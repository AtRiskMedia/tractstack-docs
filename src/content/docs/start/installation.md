---
title: Installation
description: Self-hosted recipes
---

TractStack is free (as in kitten). Provide an adequate home, and it's yours - under the source-available Functional Source License (only restriction is no re-selling TractStack as-a-service).

Commercial use is encouraged. If you are an agency looking to build with TractStack, let's chat: hello@tractstack.com

## Prerequisites

### Essential Developer Tools

- Go 1.22 or higher
- Node.js 20 or higher
- Git
- npm
- pnpm (will be installed automatically if missing)

### Production Requirements (additional)

- nginx web server
- pm2 Node.js process manager
- systemd (Linux only)
- sudo access
- SSL certificates (automated via Let's Encrypt)

## Installation Methods

### Method 1: One-Line Installer

```bash
curl -fsSL https://get.tractstack.com | bash
```

### Method 2: Direct Script Download

```bash
wget https://get.tractstack.com/t8k-install.sh
chmod +x t8k-install.sh
./t8k-install.sh
```

Command-line options:

- `--quick` - Quick development install
- `--prod --domain=yourdomain.com` - Production single-tenant
- `--multi --domain=yourdomain.com` - Production multi-tenant
- `--dedicated SITE_ID --domain=yourdomain.com` - Dedicated instance
- `--non-interactive` - Fail if manual verification needed (for CI/CD)

## Installation Types

### 1. Quick Install (Development)

Local development setup in your user directory. No sudo required.

Installation creates:

- `~/t8k/src/tractstack-go` - Go backend source
- `~/t8k/src/my-tractstack` - Astro frontend source
- `~/t8k/t8k-go-server` - Data directory

To start:

```bash
# Terminal 1
cd ~/t8k/src/tractstack-go
./tractstack-go

# Terminal 2
cd ~/t8k/src/my-tractstack
pnpm dev
```

Access at `http://localhost:4321`

### 2. Production Single-Tenant

Production setup at `/home/t8k/` for one website.

Creates:

- Dedicated `t8k` system user
- SSL certificates
- nginx reverse proxy
- systemd service `tractstack-go`
- PM2 process `astro-main`
- Ports: 10000 (Go), 20000 (Astro)

### 3. Production Multi-Tenant

Same as Production Single-Tenant with:

- `ENABLE_MULTI_TENANT=true` environment variable
- nginx wildcard domain support (`*.yourdomain.com`)
- Tenants managed via application at `/sandbox/register`

### 4. Dedicated Instance

Separate, complete installation at `/home/t8k/sites/SITE_ID/`

Features:

- Own source code copy
- Own binaries
- Own data directory
- Always uses `tenantId=default`
- systemd service `tractstack-go@SITE_ID`
- PM2 process `astro-SITE_ID`
- Ports start at 10001 (Go), 20001 (Astro)

## SSL Certificate Configuration

### Option 1: Cloudflare DNS (Automated)

Create `/root/.secrets/certbot/cloudflare.ini`:

```ini
dns_cloudflare_api_token = YOUR_API_TOKEN_HERE
```

Set permissions:

```bash
chmod 600 /root/.secrets/certbot/cloudflare.ini
```

Certificates will be obtained automatically during installation.

### Option 2: Manual DNS Verification

Without Cloudflare credentials, installer will:

1. Display TXT records to add to DNS
2. Wait for manual DNS update
3. Verify and issue certificates

## Post-Installation

### Access Points

After successful installation:

- `https://yourdomain.com` - Production domain
- `http://localhost:20000` - Direct Astro access (main)
- `http://localhost:10000` - Go backend API (main)

For dedicated instances, check `/home/t8k/etc/t8k-ports.conf` for allocated ports.

### Service Management

**Main installation (prod/multi):**

```bash
# Status
sudo systemctl status tractstack-go
sudo -u t8k pm2 status astro-main

# Restart
sudo systemctl restart tractstack-go
sudo -u t8k pm2 restart astro-main

# Logs
sudo journalctl -u tractstack-go -f
sudo -u t8k pm2 logs astro-main

# Stop
sudo systemctl stop tractstack-go
sudo -u t8k pm2 stop astro-main
```

**Dedicated instances:**

```bash
# Status (replace SITE_ID)
sudo systemctl status tractstack-go@SITE_ID
sudo -u t8k pm2 status astro-SITE_ID

# Restart
sudo systemctl restart tractstack-go@SITE_ID
sudo -u t8k pm2 restart astro-SITE_ID

# Logs
sudo journalctl -u tractstack-go@SITE_ID -f
sudo -u t8k pm2 logs astro-SITE_ID

# Stop
sudo systemctl stop tractstack-go@SITE_ID
sudo -u t8k pm2 stop astro-SITE_ID
```

### Build System

The build concierge (`/home/t8k/scripts/t8k-concierge.sh`) processes build commands from CSV files in `/home/t8k/state/`.

CSV format:

```
type=TYPE,tenant=TENANT,site=SITE,command=build
```

Parameters:

- `type`: `main`/`prod`/`multi` or `dedicated`
- `tenant`: tenant ID (optional)
- `site`: site ID (required for dedicated)
- `command`: `build`

The concierge:

1. Pulls latest from Git
2. Builds Go backend
3. Builds Astro frontend
4. Extracts Tailwind whitelist
5. Restarts services
6. Removes processed CSV

Files must be named `build-*.csv` and are processed in sorted order.

### Multi-Tenant Management

New tenants are created through the application, not the installer:

1. Visit `/sandbox/register` on multi-tenant installation
2. Register tenants via web interface
3. Each tenant gets subdomain (e.g., `tenant1.yourdomain.com`)

## Directory Structure

### Main Installation

```
/home/t8k/
├── src/
│   ├── tractstack-go/
│   └── my-tractstack/
├── t8k-go-server/
│   └── config/
│       └── default/
│           ├── media/
│           └── env.json
├── bin/
│   └── tractstack-go
├── etc/
│   ├── letsencrypt/
│   ├── pm2/
│   └── t8k-ports.conf
├── scripts/
│   └── t8k-concierge.sh
└── state/
```

### Dedicated Instance

```
/home/t8k/sites/SITE_ID/
├── src/
│   ├── tractstack-go/
│   └── my-tractstack/
├── t8k-go-server/
│   └── config/
│       └── default/
│           ├── media/
│           └── env.json
└── bin/
    └── tractstack-go
```

## Troubleshooting

### Installation Issues

Lock file exists:

```bash
rm -f /tmp/t8k-install.lock
```

Port conflicts:

```bash
cat /home/t8k/etc/t8k-ports.conf
```

SSL certificate issues:

```bash
sudo -i -u t8k bash -c "source /home/t8k/certbot_venv/bin/activate && \
  certbot certonly --manual --preferred-challenges dns \
  --config-dir /home/t8k/etc/letsencrypt \
  --work-dir /home/t8k/lib/letsencrypt \
  --logs-dir /home/t8k/log/letsencrypt \
  --agree-tos --email admin@yourdomain.com \
  -d yourdomain.com -d *.yourdomain.com"
```

### Service Issues

**Main installation:**

```bash
# Go backend
sudo journalctl -u tractstack-go -n 50 --no-pager

# Astro frontend
sudo -u t8k pm2 logs astro-main --lines 50
```

**Dedicated instance:**

```bash
# Go backend
sudo journalctl -u tractstack-go@SITE_ID -n 50 --no-pager

# Astro frontend
sudo -u t8k pm2 logs astro-SITE_ID --lines 50
```

**nginx:**

```bash
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

## Uninstalling

TractStack v2 includes a dedicated uninstall script that handles all installation types safely and thoroughly.

### Automated Uninstall Script

**Download and run:**

```bash
wget https://get.tractstack.com/t8k-uninstall.sh
chmod +x t8k-uninstall.sh
sudo ./t8k-uninstall.sh
```

**Command-line options:**

```bash
# Interactive mode (recommended)
sudo ./t8k-uninstall.sh

# Remove main installation (prod/multi-tenant)
sudo ./t8k-uninstall.sh main

# Remove specific dedicated site
sudo ./t8k-uninstall.sh site SITE_ID

# Remove everything including t8k user
sudo ./t8k-uninstall.sh all

# Non-interactive mode (for automation)
sudo ./t8k-uninstall.sh all --non-interactive
```

The uninstall script will:

- Stop all running TractStack services
- Remove systemd service definitions
- Clean up PM2 processes
- Remove nginx configurations and reload
- Update port allocations
- Remove directories and source code
- Optionally remove the t8k user account

### Manual Uninstall (Alternative)

If you prefer manual removal or the script is unavailable:

```bash
# Stop services
sudo systemctl stop tractstack-go*
sudo systemctl disable tractstack-go*
sudo -u t8k pm2 delete all
sudo pm2 unstartup systemd

# Remove nginx configs
sudo rm -f /etc/nginx/sites-enabled/t8k-*.conf
sudo rm -f /etc/nginx/sites-available/t8k-*.conf
sudo systemctl reload nginx

# Remove systemd services
sudo rm -f /etc/systemd/system/tractstack-go*.service
sudo rm -f /etc/systemd/system/t8k-build-watcher.*
sudo systemctl daemon-reload

# Remove user and files (CAUTION: This removes all data)
sudo userdel -r t8k
```

**Warning:** This permanently deletes all TractStack data, configurations, and user-generated content. Ensure you have backups of any important data before proceeding.

## Support

- Documentation: https://tractstack.org/docs
- GitHub: https://github.com/AtRiskMedia/tractstack-go/issues
- Email: hello@tractstack.com

## License

Functional Source License (FSL) - Commercial use encouraged.

---

_TractStack v2 - Made by At Risk Media_
