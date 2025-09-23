---
title: Database Options
description: SQLite and Turso cloud database configuration
---

TractStack supports two database options: SQLite for local storage and Turso for distributed cloud databases. Choose based on your scalability and availability requirements.

## SQLite (Default)

SQLite is the default database option, providing zero-configuration, high-performance local storage.

### Advantages

- **Zero configuration**: Works out of the box
- **High performance**: Excellent for read-heavy workloads
- **Reliability**: ACID compliance and crash recovery
- **Simplicity**: Single file database, easy backups
- **Cost**: Completely free
- **Scalability**: Handles hundreds of thousands of visitors

### Configuration

**Default settings** (backend `.env`):

```bash
DB_TYPE=sqlite
DB_PATH=../../t8k-go-server/db/default/tractstack.db
ENABLE_WAL_MODE=true
SQLITE_CACHE_SIZE=2000
SQLITE_TIMEOUT=5000
```

### Database Location

**Development**: `~/t8k/t8k-go-server/db/default/tractstack.db`
**Production**: `/home/t8k/t8k-go-server/db/default/tractstack.db`

### SQLite Optimization

**Enable Write-Ahead Logging (WAL):**

```bash
ENABLE_WAL_MODE=true
```

Benefits:

- Better concurrent read/write performance
- Reduced blocking between readers and writers
- Improved crash recovery

**Cache settings:**

```bash
SQLITE_CACHE_SIZE=2000          # 2MB cache
SQLITE_PAGE_SIZE=4096           # 4KB pages
SQLITE_MMAP_SIZE=268435456      # 256MB memory-mapped I/O
```

### Backup and Maintenance

**Manual backup:**

```bash
# Development
cp ~/t8k/t8k-go-server/db/default/tractstack.db \
   ~/t8k/backups/tractstack-$(date +%Y%m%d).db

# Production
sudo -u t8k cp /home/t8k/t8k-go-server/db/default/tractstack.db \
   /home/t8k/backups/tractstack-$(date +%Y%m%d).db
```

**Automated backup script:**

```bash
#!/bin/bash
# Create daily backups
DB_PATH="/home/t8k/t8k-go-server/db/default/tractstack.db"
BACKUP_DIR="/home/t8k/backups"
DATE=$(date +%Y%m%d)

mkdir -p $BACKUP_DIR
cp $DB_PATH $BACKUP_DIR/tractstack-$DATE.db

# Keep only 30 days of backups
find $BACKUP_DIR -name "tractstack-*.db" -mtime +30 -delete
```

**Database maintenance:**

```sql
-- Connect to SQLite and run these commands periodically
VACUUM;                         -- Reclaim space
ANALYZE;                        -- Update query planner statistics
PRAGMA optimize;                -- General optimization
```

## Turso Cloud Database

Turso provides globally distributed SQLite with edge replication for high availability and performance.

### Advantages

- **Global distribution**: Edge locations worldwide
- **Automatic replication**: Multi-region synchronization
- **Zero maintenance**: Fully managed service
- **SQLite compatibility**: Same queries and features
- **Scaling**: Automatic scaling based on demand
- **Analytics**: Built-in monitoring and insights

### Setup Process

1. **Create Turso account** at [turso.tech](https://turso.tech)

2. **Install Turso CLI:**

```bash
curl -sSfL https://get.tur.so/install.sh | bash
```

3. **Authenticate:**

```bash
turso auth login
```

4. **Create database:**

```bash
turso db create tractstack-prod --group default
```

5. **Create auth token:**

```bash
turso db tokens create tractstack-prod
```

6. **Get database URL:**

```bash
turso db show tractstack-prod --url
```

### Configuration

**Backend `.env` settings:**

```bash
ENABLE_TURSO=true
TURSO_DATABASE_URL=libsql://tractstack-prod-[org].turso.io
TURSO_AUTH_TOKEN=your-auth-token-here
TURSO_SYNC_INTERVAL=5m
TURSO_READ_YOUR_WRITES=true
```

**Advanced Turso settings:**

```bash
# Connection pooling
TURSO_MAX_CONNECTIONS=25
TURSO_IDLE_TIMEOUT=300s

# Replication
TURSO_EMBEDDED_REPLICA=true     # Local replica for reads
TURSO_SYNC_URL=libsql://tractstack-prod-[org].turso.io

# Performance
TURSO_WRITE_TIMEOUT=30s
TURSO_READ_TIMEOUT=10s
```

### Multi-Tenant with Turso

For multi-tenant setups, create separate databases:

```bash
# Create tenant-specific databases
turso db create tractstack-tenant1 --group tenants
turso db create tractstack-tenant2 --group tenants

# Create tokens for each
turso db tokens create tractstack-tenant1
turso db tokens create tractstack-tenant2
```

**Tenant configuration** (`config/{tenant-id}/env.json`):

```json
{
  "TURSO_DATABASE_URL": "libsql://tractstack-tenant1-[org].turso.io",
  "TURSO_AUTH_TOKEN": "tenant1-specific-token"
}
```

### Turso Pricing

**Free tier includes:**

- 500 databases
- 1GB total storage
- 1 billion row reads/month
- 1 million row writes/month

**Paid tiers** offer:

- Additional storage and usage
- Premium support
- Enhanced analytics
- Custom regions

## Migration Between Databases

### SQLite to Turso

1. **Export SQLite data:**

```bash
sqlite3 tractstack.db .dump > backup.sql
```

2. **Create Turso database:**

```bash
turso db create tractstack-prod
```

3. **Import data to Turso:**

```bash
turso db shell tractstack-prod < backup.sql
```

4. **Update configuration:**

```bash
ENABLE_TURSO=true
TURSO_DATABASE_URL=libsql://tractstack-prod-[org].turso.io
TURSO_AUTH_TOKEN=your-token
```

5. **Restart TractStack services**

### Turso to SQLite

1. **Export from Turso:**

```bash
turso db shell tractstack-prod .dump > turso-backup.sql
```

2. **Create new SQLite database:**

```bash
sqlite3 new-tractstack.db < turso-backup.sql
```

3. **Update configuration:**

```bash
ENABLE_TURSO=false
DB_PATH=../../t8k-go-server/db/default/tractstack.db
```

4. **Move database file and restart services**

## Performance Comparison

### SQLite Performance

**Strengths:**

- Extremely fast local reads
- Low latency for single-server deployments
- Minimal resource overhead
- Predictable performance

**Limitations:**

- Single point of failure
- Limited concurrent writes
- No geographic distribution
- Manual backup required

### Turso Performance

**Strengths:**

- Global edge distribution
- Automatic replication and backups
- High availability
- Scales automatically

**Considerations:**

- Network latency for writes
- Slight overhead for replication
- Requires internet connectivity
- Usage-based pricing

## Monitoring and Analytics

### SQLite Monitoring

**Database size:**

```bash
du -h /home/t8k/t8k-go-server/db/default/tractstack.db
```

**Query performance:**

```sql
-- Enable query logging
PRAGMA query_log=ON;

-- Check slow queries
.timer on
SELECT * FROM your_table;
```

**Database statistics:**

```sql
PRAGMA database_list;           -- List attached databases
PRAGMA table_info(story_fragments);  -- Table structure
PRAGMA index_list(story_fragments);  -- Available indexes
```

### Turso Monitoring

**CLI monitoring:**

```bash
# Database status
turso db show tractstack-prod

# Usage statistics
turso db usage tractstack-prod

# Recent activity
turso db logs tractstack-prod
```

**Dashboard monitoring:**

- Access Turso dashboard at [app.turso.tech](https://app.turso.tech)
- View real-time metrics
- Monitor geographic distribution
- Track usage and billing

## Troubleshooting

### SQLite Issues

**Database locked errors:**

```bash
# Check for lingering processes
lsof /home/t8k/t8k-go-server/db/default/tractstack.db

# Fix corruption (if needed)
sqlite3 tractstack.db "PRAGMA integrity_check;"
```

**Performance issues:**

```sql
-- Analyze and optimize
ANALYZE;
PRAGMA optimize;

-- Check indexes
.schema
```

### Turso Issues

**Connection errors:**

```bash
# Test connectivity
turso db shell tractstack-prod "SELECT 1;"

# Verify auth token
turso auth token
```

**Sync issues:**

```bash
# Check sync status
turso db show tractstack-prod

# Force sync
turso db sync tractstack-prod
```

## Recommendations

### Choose SQLite when:

- Single server deployment
- Predictable traffic patterns
- Cost is primary concern
- Simplicity is preferred
- High-performance local access needed

### Choose Turso when:

- Global user base
- High availability required
- Multiple regions needed
- Automatic scaling desired
- Professional support needed

### Hybrid approach:

- Start with SQLite for development and early production
- Migrate to Turso as traffic and requirements grow
- Use SQLite for development, Turso for production

---

_Database choice significantly impacts your site's scalability and availability. SQLite provides excellent performance for most use cases, while Turso offers global distribution for demanding applications._
