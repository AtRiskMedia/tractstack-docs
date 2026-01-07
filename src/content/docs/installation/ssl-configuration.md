---
title: SSL Configuration
description: SSL certificate setup and management using acme.sh
---

TractStack handles SSL certificate management using Let's Encrypt via **acme.sh**, supporting both automated Cloudflare DNS verification and manual DNS challenges.

## Automated SSL (Cloudflare DNS)

The installer uses the Cloudflare DNS API to automatically issue and renew wildcard certificates.

### 1. Setup Cloudflare API

- **Generate Token**: Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens).
- **Permissions**: Create a token with `Zone:DNS:Edit` permissions.
- **Identify Account**: Note your Cloudflare **Account ID** from the domain overview page.

### 2. Create Credentials File

The installer specifically looks for this file as `root` to copy it into the service user environment.

```bash
sudo mkdir -p /root/.secrets/acme
sudo nano /root/.secrets/acme/cloudflare.ini
```

### 3. Add API Credentials

```ini
dns_cloudflare_api_token = YOUR_API_TOKEN
dns_cloudflare_account_id = YOUR_ACCOUNT_ID
```

### 4. Secure the File

```bash
sudo chmod 600 /root/.secrets/acme/cloudflare.ini
```

---

## Manual DNS Verification

If Cloudflare secrets are not found, the installer falls back to manual verification.

### Installation Process

Run the installer with the domain flag:

```bash
curl -fsSL [https://get.tractstack.com](https://get.tractstack.com) | bash -s -- --prod --domain yourdomain.com
```

### DNS Verification Steps

The installer will pause and display the TXT records provided by **acme.sh**:

```text
Please add the following TXT record to your DNS:
_acme-challenge.yourdomain.com TXT "verification-token-1"
_acme-challenge.yourdomain.com TXT "verification-token-2"
```

1. **Add Records**: Access your DNS provider and add the displayed TXT records.
2. **Wait**: Allow 1–5 minutes for propagation.
3. **Verify**: Open a separate terminal and run `dig _acme-challenge.yourdomain.com TXT`.
4. **Continue**: Return to the installer and press **Enter** to complete issuance.

---

## Certificate Management

### Certificate Locations

Unlike standard certbot paths, TractStack stores certificates within the `t8k` user's directory for better isolation:

- **Root Path**: `/home/t8k/etc/letsencrypt/live/yourdomain.com/`
- **Files**: `fullchain.pem` (Certificate + Chain) and `privkey.pem` (Private Key).

### Automated Renewal

**acme.sh** is installed to `/home/t8k/.acme.sh/` and automatically adds a crontab entry for the `t8k` user. It will attempt renewal every 60 days.

### Manual Management

To manually check or force a renewal, run as the `t8k` user:

```bash
# View installed certificates
sudo -i -u t8k /home/t8k/.acme.sh/acme.sh --list

# Force renewal
sudo -i -u t8k /home/t8k/.acme.sh/acme.sh --renew -d yourdomain.com --force
```

---

## nginx SSL Configuration

TractStack configures nginx with modern security standards. The configuration is automatically generated based on the installation type (prod, multi, or dedicated).

### Security Fencing

The installer sets up a reverse proxy with standard SSL headers:

```nginx
server {
    listen 443 ssl http2;
    server_name yourdomain.com *.yourdomain.com;
    ssl_certificate /home/t8k/etc/letsencrypt/live/[yourdomain.com/fullchain.pem](https://yourdomain.com/fullchain.pem);
    ssl_certificate_key /home/t8k/etc/letsencrypt/live/[yourdomain.com/privkey.pem](https://yourdomain.com/privkey.pem);

    location / {
        proxy_pass http://localhost:20000; # Astro Frontend Port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Troubleshooting SSL

### Deployment Failures

If the installer fails during SSL issuance:

- **Check Paths**: Ensure `/root/.secrets/acme/cloudflare.ini` contains both the token and account ID.
- **Port 80**: Ensure Port 80 is not blocked, as acme.sh may use it for certain challenge fallbacks.
- **Rate Limits**: Let's Encrypt limits failed attempts. Check `/home/t8k/.acme.sh/acme.sh.log` for specific error codes.

### Forced Syncing

If certificates exist but nginx is failing to find them, verify the directory permissions:

```bash
sudo ls -la /home/t8k/etc/letsencrypt/live/[yourdomain.com/](https://yourdomain.com/)
# Should be owned by t8k:t8k
```

---

_SSL security is a critical part of the TractStack architecture. For production environments, always ensure your Cloudflare DNS is set to "DNS Only" (grey cloud) during initial certificate issuance._
