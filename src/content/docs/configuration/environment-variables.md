---
title: Environment Variables
description: Configuration settings for TractStack components
---

TractStack uses environment variables and configuration files to manage system behavior. Understanding these settings helps you customize and troubleshoot your installation.

## Configuration File Locations

### Development

- **Backend**: `~/t8k/src/tractstack-go/.env`
- **Frontend**: `~/t8k/src/my-tractstack/.env`
- **Site config**: `~/t8k/t8k-go-server/config/default/env.json`

### Production

- **Backend**: `/home/t8k/src/tractstack-go/.env`
- **Frontend**: `/home/t8k/src/my-tractstack/.env`
- **Site config**: `/home/t8k/t8k-go-server/config/default/env.json`

## Backend Environment Variables

### Core Settings

**File**: `.env` in tractstack-go directory

```bash
# Application Mode
GIN_MODE=debug                    # debug, release
PORT=10000                        # HTTP server port

# Database Configuration
DB_PATH=../../t8k-go-server/db/default/tractstack.db
ENABLE_TURSO=false               # Enable Turso cloud database
TURSO_DATABASE_URL=              # Turso database URL
TURSO_AUTH_TOKEN=                # Turso authentication token

# File Paths
CONFIG_PATH=../../t8k-go-server/config
MEDIA_PATH=../../t8k-go-server/config/default/media
LOG_PATH=../../t8k-go-server/log

# Multi-tenant Configuration
ENABLE_MULTI_TENANT=false       # Enable multi-tenant features
MAX_TENANTS=100                  # Maximum number of tenants

# Security
CORS_ORIGINS=http://localhost:4321,https://yourdomain.com
RATE_LIMIT_ENABLED=true          # Enable API rate limiting
RATE_LIMIT_REQUESTS=100          # Requests per minute per IP
```

### Advanced Settings

```bash
# Caching
ENABLE_REDIS=false               # Enable Redis caching
REDIS_URL=redis://localhost:6379

# External Services
AAI_API_KEY=                     # Assembly AI API key
RESEND_API_KEY=                  # Resend email API key
GOOGLE_ANALYTICS_KEY=            # Google Analytics measurement ID

# Performance
MAX_UPLOAD_SIZE=10485760         # 10MB max file upload
WORKER_POOL_SIZE=10              # Background worker pool size
CACHE_TTL=3600                   # Cache time-to-live in seconds

# Logging
LOG_LEVEL=info                   # debug, info, warn, error
LOG_FORMAT=json                  # json, text
ENABLE_ACCESS_LOG=true           # HTTP access logging
```

## Frontend Environment Variables

### Core Settings

**File**: `.env` in my-tractstack directory

```bash
# Backend Connection
PUBLIC_GO_BACKEND=http://localhost:10000
PUBLIC_TENANTID=default

# Multi-tenant
PUBLIC_ENABLE_MULTI_TENANT=false

# Development
NODE_ENV=development             # development, production
ASTRO_TELEMETRY_DISABLED=1      # Disable Astro telemetry
```

### Production Settings

```bash
# Backend Connection
PUBLIC_GO_BACKEND=https://yourdomain.com
PUBLIC_TENANTID=default

# Multi-tenant
PUBLIC_ENABLE_MULTI_TENANT=true

# Production
NODE_ENV=production
BUILD_PATH=./dist
```

## Site Configuration (env.json)

### Core Settings

**File**: `config/default/env.json`

```json
{
  "SITE_URL": "https://yourdomain.com",
  "SITE_INIT": true,
  "HOME_SLUG": "hello",
  "SITE_NAME": "Your Site Name",
  "SITE_DESCRIPTION": "Your site description",

  "ADMIN_PASSWORD_HASH": "...",
  "EDITOR_PASSWORD_HASH": "...",
  "JWT_SECRET": "secure-random-string-here",
  "AES_KEY": "32-character-encryption-key-here",

  "TIME_ZONE": "America/New_York",
  "LANGUAGE": "en",
  "CONTACT_EMAIL": "admin@yourdomain.com"
}
```

### Advanced Settings

```json
{
  "SEO_SETTINGS": {
    "DEFAULT_META_DESCRIPTION": "Default page description",
    "DEFAULT_KEYWORDS": "keyword1, keyword2, keyword3",
    "SOCIAL_IMAGE": "/og-image.jpg",
    "ROBOTS_TXT": "User-agent: *\nDisallow:"
  },

  "ANALYTICS": {
    "GOOGLE_ANALYTICS_ID": "G-XXXXXXXXXX",
    "ENABLE_INTERNAL_ANALYTICS": true,
    "TRACK_SCROLL_DEPTH": true,
    "TRACK_CLICK_EVENTS": true
  },

  "PERFORMANCE": {
    "ENABLE_IMAGE_OPTIMIZATION": true,
    "ENABLE_CSS_MINIFICATION": true,
    "ENABLE_JS_MINIFICATION": true,
    "CACHE_STATIC_ASSETS": true
  },

  "FEATURES": {
    "ENABLE_COMMENTS": false,
    "ENABLE_SEARCH": true,
    "ENABLE_RSS": true,
    "ENABLE_SITEMAP": true
  }
}
```

## Multi-Tenant Configuration

### Tenant-Specific Settings

Each tenant has its own configuration at:
`config/{tenant-id}/env.json`

```json
{
  "TENANT_ID": "tenant-name",
  "SITE_URL": "https://tenant-name.yourdomain.com",
  "SITE_NAME": "Tenant Site Name",
  "HOME_SLUG": "home",

  "ADMIN_PASSWORD_HASH": "...",
  "EDITOR_PASSWORD_HASH": "...",

  "STORAGE_QUOTA": "1GB",
  "MAX_PAGES": 100,
  "MAX_USERS": 5,

  "CUSTOM_DOMAIN": null,
  "SSL_ENABLED": true
}
```

### Global Multi-Tenant Settings

**File**: `config/t8k/tenants.json`

```json
{
  "max_tenants": 100,
  "default_quota": "1GB",
  "enable_custom_domains": true,
  "require_email_verification": true,
  "auto_ssl": true,

  "tenants": [
    {
      "id": "tenant1",
      "domain": "tenant1.yourdomain.com",
      "created": "2024-01-01T00:00:00Z",
      "active": true
    }
  ]
}
```

## Database Configuration

### SQLite (Default)

```bash
# Backend .env
DB_TYPE=sqlite
DB_PATH=../../t8k-go-server/db/default/tractstack.db
ENABLE_WAL_MODE=true             # Write-Ahead Logging
SQLITE_CACHE_SIZE=2000           # Cache size in KB
```

### Turso Cloud Database

```bash
# Backend .env
ENABLE_TURSO=true
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-auth-token
TURSO_SYNC_INTERVAL=5m           # Sync interval
```

## Security Configuration

### Authentication Settings

```json
{
  "JWT_EXPIRY": "24h",
  "SESSION_TIMEOUT": "8h",
  "MAX_LOGIN_ATTEMPTS": 5,
  "LOCKOUT_DURATION": "15m",

  "PASSWORD_POLICY": {
    "min_length": 8,
    "require_uppercase": true,
    "require_lowercase": true,
    "require_numbers": true,
    "require_symbols": false
  }
}
```

### CORS Configuration

```bash
# Backend .env
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
CORS_METHODS=GET,POST,PUT,DELETE,OPTIONS
CORS_HEADERS=Content-Type,Authorization,X-Tenant-ID
CORS_CREDENTIALS=true
```

## Performance Tuning

### Caching Settings

```bash
# Backend .env
ENABLE_CACHE=true
CACHE_TYPE=memory                # memory, redis
CACHE_TTL=3600                   # 1 hour
CACHE_MAX_SIZE=100MB
CACHE_CLEANUP_INTERVAL=300       # 5 minutes
```

### Rate Limiting

```bash
# Backend .env
RATE_LIMIT_ENABLED=true
RATE_LIMIT_REQUESTS=100          # Per minute
RATE_LIMIT_BURST=10              # Burst capacity
RATE_LIMIT_WINDOW=60             # Time window in seconds
```

## Development vs Production

### Development Configuration

```bash
# Development settings
GIN_MODE=debug
LOG_LEVEL=debug
ENABLE_CORS=true
CORS_ORIGINS=http://localhost:4321
ENABLE_HOT_RELOAD=true
CACHE_DISABLED=true
```

### Production Configuration

```bash
# Production settings
GIN_MODE=release
LOG_LEVEL=info
ENABLE_CORS=true
CORS_ORIGINS=https://yourdomain.com
ENABLE_HOT_RELOAD=false
CACHE_ENABLED=true
ENABLE_COMPRESSION=true
```

## Environment Variable Priority

Settings are loaded in this order (later values override earlier ones):

1. **Default values** (hardcoded in application)
2. **Configuration files** (env.json)
3. **Environment variables** (.env files)
4. **System environment variables**
5. **Command line flags**

## Validation and Troubleshooting

### Check Current Configuration

```bash
# Backend configuration
cd ~/t8k/src/tractstack-go
./tractstack-go --config-check

# View environment variables
env | grep -E "(DB_|SITE_|PUBLIC_)"

# Validate JSON configuration
cat ~/t8k/t8k-go-server/config/default/env.json | jq .
```

### Common Configuration Issues

**Database connection errors:**

```bash
# Check database path
ls -la ~/t8k/t8k-go-server/db/default/

# Verify permissions
chmod 644 ~/t8k/t8k-go-server/db/default/tractstack.db
```

**CORS errors:**

```bash
# Check CORS origins include your frontend URL
grep CORS_ORIGINS ~/t8k/src/tractstack-go/.env
```

**File upload issues:**

```bash
# Check media directory permissions
ls -la ~/t8k/t8k-go-server/config/default/media/
chmod -R 755 ~/t8k/t8k-go-server/config/default/media/
```

---

_Proper environment configuration ensures TractStack runs optimally in your specific environment. Always backup configuration files before making changes._
