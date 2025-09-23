---
title: Multi-Tenant Management
description: Managing multiple websites from a single TractStack installation
---

TractStack's multi-tenant capabilities allow you to host multiple websites from a single installation, each with isolated data, configurations, and custom domains or subdomains.

## Multi-Tenant Architecture

### Tenant Isolation

**Complete separation:**

- **Separate databases**: Each tenant has isolated data storage
- **Independent configurations**: Tenant-specific settings and branding
- **Isolated media storage**: Separate file systems per tenant
- **Individual analytics**: Tenant-specific tracking and reporting

### Domain Structure

**Subdomain routing:**

- **Main domain**: `yourdomain.com` (primary installation)
- **Tenant subdomains**: `tenant1.yourdomain.com`, `tenant2.yourdomain.com`
- **Wildcard DNS**: `*.yourdomain.com` routes to TractStack
- **Custom domains**: Optional tenant-specific domains

## Installation and Setup

### Multi-Tenant Installation

**Installation command:**

```bash
curl -fsSL https://get.tractstack.com | bash -s -- --multi --domain=yourdomain.com
```

**Configuration requirements:**

- **Wildcard DNS**: `*.yourdomain.com` pointing to server
- **Wildcard SSL certificate**: Covers all tenant subdomains
- **nginx configuration**: Subdomain routing setup

### Environment Configuration

**Backend configuration:**

```bash
ENABLE_MULTI_TENANT=true
MAX_TENANTS=100
```

**Frontend configuration:**

```bash
PUBLIC_ENABLE_MULTI_TENANT=true
```

## Tenant Registration

### Self-Service Registration

**Registration endpoint**: `https://yourdomain.com/sandbox/register`

**Registration process:**

1. **Visit registration page**
2. **Choose tenant subdomain** (e.g., `mybusiness` for `mybusiness.yourdomain.com`)
3. **Provide basic information** (name, email, organization)
4. **Create admin credentials** for tenant
5. **Complete initial setup** with automatic tenant creation

### Tenant Validation

**Domain requirements:**

- **Unique subdomain**: No conflicts with existing tenants
- **Valid characters**: Letters, numbers, hyphens only
- **Length limits**: Reasonable subdomain length restrictions
- **Reserved names**: Prevent conflicts with system paths

## Tenant Configuration

### Individual Tenant Settings

**Tenant-specific configuration** (`config/{tenant-id}/env.json`):

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
  "MAX_USERS": 5
}
```

### Global Tenant Management

**Tenant registry** (`config/t8k/tenants.json`):

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

## Tenant Management

### Resource Quotas

**Configurable limits per tenant:**

- **Storage quota**: Media and database storage limits
- **Page limits**: Maximum number of story fragments
- **User limits**: Number of admin/editor accounts
- **Bandwidth**: Traffic and data transfer limits

### Usage Monitoring

**Tenant resource tracking:**

- **Storage usage**: Database and media file consumption
- **Page count**: Number of active story fragments
- **User activity**: Admin and editor account usage
- **Traffic patterns**: Analytics and engagement metrics

### Administrative Controls

**Global management capabilities:**

- **Tenant activation/deactivation**: Enable or disable tenant access
- **Resource limit adjustment**: Modify quotas and restrictions
- **Usage monitoring**: Track tenant resource consumption
- **Backup management**: Tenant-specific data backup

## Custom Domain Support

### Tenant Custom Domains

**Custom domain configuration:**

- **CNAME setup**: Point custom domain to main installation
- **SSL certificates**: Automatic certificate generation for custom domains
- **nginx configuration**: Route custom domains to appropriate tenants

**Example custom domain setup:**

1. **Tenant configures**: `tenant.example.com` CNAME to `yourdomain.com`
2. **SSL generation**: Automatic certificate for `tenant.example.com`
3. **nginx routing**: Custom domain routes to tenant subdomain
4. **Tenant access**: Site accessible via custom domain

### DNS Configuration

**For custom domains:**

```
Type: CNAME
Name: tenant
Value: yourdomain.com
TTL: 300
```

**SSL certificate handling:**

- **Automatic detection**: System detects new custom domains
- **Certificate generation**: Automatic SSL certificate creation
- **nginx update**: Configuration automatically updated for new domains

## Security and Isolation

### Data Isolation

**Tenant separation:**

- **Database isolation**: Separate SQLite files per tenant
- **File system isolation**: Independent media directories
- **Session isolation**: Tenant-specific session management
- **Configuration isolation**: Independent settings per tenant

### Access Control

**Tenant-level security:**

- **Administrative boundaries**: Tenants cannot access each other's data
- **User authentication**: Tenant-specific login systems
- **API isolation**: Tenant-scoped API access
- **Analytics separation**: Independent tracking and reporting

## Performance Considerations

### Scalability

**Multi-tenant performance:**

- **Shared infrastructure**: Efficient resource utilization
- **Tenant caching**: Individual caching per tenant
- **Database optimization**: Efficient queries across tenants
- **Static asset sharing**: Common assets served efficiently

### Resource Management

**System optimization:**

- **Connection pooling**: Efficient database connections
- **Memory management**: Tenant-aware memory allocation
- **CPU distribution**: Fair resource allocation across tenants
- **I/O optimization**: Efficient file system access

## Backup and Maintenance

### Tenant-Specific Backups

**Individual tenant backup:**

```bash
# Backup specific tenant
sudo -u t8k cp /home/t8k/t8k-go-server/config/tenant-id/... /backups/
sudo -u t8k cp /home/t8k/t8k-go-server/db/tenant-id/... /backups/
```

**Automated backup strategy:**

- **Per-tenant scheduling**: Individual backup schedules
- **Incremental backups**: Efficient storage utilization
- **Restoration procedures**: Tenant-specific recovery processes

### System Maintenance

**Multi-tenant updates:**

- **Rolling updates**: Update system without affecting all tenants
- **Tenant notification**: Inform tenants of maintenance windows
- **Gradual rollout**: Deploy updates to subsets of tenants
- **Rollback procedures**: Tenant-specific rollback capabilities

## Analytics and Reporting

### Tenant Analytics

**Individual tenant reporting:**

- **Isolated analytics**: Tenant-specific engagement data
- **Performance metrics**: Individual tenant performance tracking
- **Usage reporting**: Resource consumption and limits
- **Growth tracking**: Tenant-specific growth metrics

### Global Analytics

**System-wide reporting:**

- **Tenant overview**: All tenant status and health
- **Resource utilization**: System-wide resource usage
- **Performance monitoring**: Global system performance
- **Capacity planning**: Growth and scaling insights

---

_Multi-tenant management enables efficient hosting of multiple websites while maintaining complete isolation and individual tenant control. Proper setup and monitoring ensure scalable, secure operation for all tenants._
