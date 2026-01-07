---
title: Production Deployment
description: Production-ready installation with SSL, nginx, and systemd
---

Production deployment creates a secure, scalable TractStack installation using a dedicated service user, automated SSL via acme.sh, and nginx as a high-performance reverse proxy.

## Production Installation Types

### Single-Tenant Production

One website per server installation.

```bash
curl -fsSL [https://get.tractstack.com](https://get.tractstack.com) | bash -s -- --prod --domain yourdomain.com
```

### Multi-Tenant Production

Multiple websites from one installation with subdomain support.

```bash
curl -fsSL [https://get.tractstack.com](https://get.tractstack.com) | bash -s -- --multi --domain yourdomain.com
```

### Dedicated Instance

Isolated installation for a specific site ID.

```bash
curl -fsSL [https://get.tractstack.com](https://get.tractstack.com) | bash -s -- --dedicated SITE_ID --domain yourdomain.com
```

---

## Prerequisites for Production

### System Requirements

- **OS**: Debian or Ubuntu recommended (Installer verified for Debian 11/12).
- **Access**: Regular user with **sudo** privileges. The installer explicitly blocks running as root for safety.
- **DNS**: Point your primary Domain (A Record) and Wildcard (for Multi-tenant) to the server IP.

---

## SSL Certificate Setup

### Automated: Cloudflare DNS

The installer detects Cloudflare secrets for automated wildcard certificates via acme.sh. Create this file as root:

```bash
sudo mkdir -p /root/.secrets/acme
sudo nano /root/.secrets/acme/cloudflare.ini
```

Add your token and account ID:

```ini
dns_cloudflare_api_token = YOUR_API_TOKEN
dns_cloudflare_account_id = YOUR_ACCOUNT_ID
```

Set strict permissions: `sudo chmod 600 /root/.secrets/acme/cloudflare.ini`

### Manual: DNS Challenge

If Cloudflare secrets are missing, the installer falls back to a manual DNS challenge. You will be prompted to add a TXT record to your DNS provider and wait for propagation.

---

## Service Management

The installer configures the system to run under a dedicated `t8k` user.

### Go Backend (systemd)

Managed as a native Linux system service.

```bash
# Main Service
sudo systemctl status tractstack-go
sudo systemctl restart tractstack-go

# Dedicated Instance
sudo systemctl restart tractstack-go@SITE_ID
```

### Astro Frontend (PM2)

Managed via PM2 specifically for the `t8k` user environment.

```bash
sudo -i -u t8k pm2 status
sudo -i -u t8k pm2 logs
```

---

## Port Registry & Nginx

TractStack manages port allocations in `/home/t8k/etc/t8k-ports.conf`.

- **Main Instance**: Go (10000), Astro (20000)
- **Dedicated Instances**: Go (10001+), Astro (20001+)

Nginx is configured to listen on 80/443 and proxy to these internal ports. The installer automatically adds the `www-data` user to the `t8k` group to ensure Nginx can serve media files correctly.

---

## Build Automation: The Concierge

The system includes a build watcher (`t8k-build-watcher.path`) that monitors the `/home/t8k/state` directory.

1. **Trigger**: Any change in the state directory launches `t8k-concierge.sh`.
2. **Process**: It pulls the latest code, rebuilds binaries, and runs `extractTailwindWhitelist.py`.
3. **Sync**: It restarts the systemd and PM2 services automatically to apply updates.

---

## Troubleshooting

### Logs

- **Backend (Go)**: `sudo journalctl -u tractstack-go -f`
- **Frontend (Astro)**: `sudo -i -u t8k pm2 logs`
- **Reverse Proxy**: `sudo tail -f /var/log/nginx/error.log`

### Syncing Tailwind CSS

If you make manual changes to the Astro frontend and the backend templates look unstyled, run the whitelist extractor:

```bash
sudo -u t8k python3 /home/t8k/scripts/extractTailwindWhitelist.py /home/t8k/src/my-tractstack/dist /home/t8k/t8k-go-server/config/default/tailwindWhitelist.json /home/t8k/src/tractstack-go/internal/presentation/templates
```

---

_For advanced SSL renewal details and acme.sh management, see the [SSL Configuration Guide](/installation/ssl-configuration/)._
