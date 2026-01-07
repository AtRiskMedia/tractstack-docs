---
title: Environment Variables
description: System and project-level configuration
---

TractStack uses `.env` files for system-level process configuration and `env.json` for site-level runtime settings.

## 1. Frontend Configuration (.env)

Located in `src/my-tractstack/.env`. These variables are consumed by Astro during the build process.

```bash
# Connection to the Go API
PUBLIC_GO_BACKEND="http://localhost:8080"
PUBLIC_TENANTID="default"

# Feature Flags
PUBLIC_ENABLE_MULTI_TENANT="false"
PUBLIC_ENABLE_BUNNY="true"

# Internal path for the build concierge
PRIVATE_GO_BACKEND_PATH="/home/t8k/t8k-go-server/"
```

---

## 2. Backend Configuration (.env)

Located in `src/tractstack-go/.env`. These variables define how the Go binary interacts with the OS.

```bash
# System Paths
GO_BACKEND_PATH="/home/t8k/t8k-go-server/"
PORT=10000

# Security and Mode
GIN_MODE="release"
SSL_ENABLED="true"
BIND_ADDRESS="0.0.0.0"

# Multi-Tenant Mode
ENABLE_MULTI_TENANT="false"
```

---

## 3. Site Configuration (env.json)

Located in `t8k-go-server/config/default/env.json`. These are the runtime settings for your specific instance.

```json
{
  "SITE_URL": "[https://yourdomain.com](https://yourdomain.com)",
  "SITE_INIT": true,
  "HOME_SLUG": "hello",
  "JWT_SECRET": "system-generated-secret",
  "AES_KEY": "32-character-encryption-key",
  "ADMIN_PASSWORD_HASH": "$2a$10$..."
}
```

---

## 4. Port Allocation Logic

The production installer automatically assigns ports to avoid conflicts. These are logged in `/home/t8k/etc/t8k-ports.conf`:

| Instance        | Go Backend | Astro Frontend |
| :-------------- | :--------- | :------------- |
| **Main**        | 10000      | 20000          |
| **Dedicated 1** | 10001      | 20001          |
| **Dedicated 2** | 10002      | 20002          |

Nginx uses these internal ports to route traffic from your public domain (80/443).

---

_Note: If you change the `PORT` in a backend `.env` file manually, you must also update the corresponding Nginx site configuration in `/etc/nginx/sites-available/`._
