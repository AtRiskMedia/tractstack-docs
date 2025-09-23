---
title: Build System
description: Automated build and deployment process
---

TractStack includes an automated build system that handles code updates, compilation, and service restarts through the build concierge process.

## Build Concierge

### Overview

The build concierge (`/home/t8k/scripts/t8k-concierge.sh`) processes automated builds via CSV files in `/home/t8k/state/`. This system enables automated deployments and updates without manual intervention.

### Build Process

**Automated build steps:**

1. **Pull latest code** from Git repositories
2. **Build Go backend** and compile binary
3. **Build Astro frontend** with optimizations
4. **Extract Tailwind whitelist** for CSS optimization
5. **Restart services** automatically
6. **Clean up** processed CSV files

## Build Trigger System

### CSV File Format

Build commands are triggered by CSV files in `/home/t8k/state/`:

**Main installation:**

```csv
type=main,tenant=default,command=build
```

**Multi-tenant installation:**

```csv
type=multi,tenant=default,command=build
```

**Dedicated instance:**

```csv
type=dedicated,site=SITE_ID,command=build
```

### File Processing

**Processing order:**

- Files named `build-*.csv` are processed in sorted order
- Each CSV file is processed completely before moving to the next
- Processed files are automatically removed after completion

**File naming convention:**

```bash
build-$(date +%s).csv        # Timestamp-based naming
build-manual-001.csv         # Manual numbering
build-urgent.csv             # Descriptive naming
```

## Triggering Builds

### Manual Build Trigger

**Create build file:**

```bash
# Main installation
echo "type=main,tenant=default,command=build" > /home/t8k/state/build-$(date +%s).csv

# Dedicated instance
echo "type=dedicated,site=SITE_ID,command=build" > /home/t8k/state/build-$(date +%s).csv
```

### systemd Integration

**Build watcher services:**

- `t8k-build-watcher.path` - Monitors `/home/t8k/state/` directory
- `t8k-build-watcher.service` - Executes build concierge when files appear

**Service status:**

```bash
sudo systemctl status t8k-build-watcher.path
sudo systemctl status t8k-build-watcher.service
```

### Manual Build Execution

**Run build concierge directly:**

```bash
sudo -u t8k /home/t8k/scripts/t8k-concierge.sh
```

## Build Components

### Go Backend Build

**Backend compilation process:**

1. **Navigate to source directory**: `/home/t8k/src/tractstack-go`
2. **Pull latest changes**: `git pull origin main`
3. **Download dependencies**: `go mod tidy`
4. **Compile binary**: `go build`
5. **Copy to bin directory**: `/home/t8k/bin/tractstack-go`

### Astro Frontend Build

**Frontend build process:**

1. **Navigate to source directory**: `/home/t8k/src/my-tractstack`
2. **Pull latest changes**: `git pull origin main`
3. **Install dependencies**: `pnpm install`
4. **Build production assets**: `pnpm build`
5. **Generate optimized output**: Static files in `dist/`

### Tailwind Optimization

**CSS optimization process:**

1. **Extract Tailwind classes**: Scan built files for used CSS classes
2. **Generate whitelist**: Create optimized class list
3. **Update configuration**: Save whitelist to `tailwindWhitelist.json`
4. **Optimize CSS delivery**: Reduce CSS bundle size

## Service Restart Process

### Restart Sequence

**Automated service restart:**

1. **Stop services gracefully**
2. **Update binaries and assets**
3. **Start services in correct order**
4. **Verify service health**

**Main installation restart:**

```bash
sudo systemctl restart tractstack-go
sudo -u t8k pm2 restart astro-main
```

**Dedicated instance restart:**

```bash
sudo systemctl restart tractstack-go@SITE_ID
sudo -u t8k pm2 restart astro-SITE_ID
```

### Health Verification

**Post-build health checks:**

- **Service status**: Verify all services are running
- **HTTP response**: Test endpoint accessibility
- **Log monitoring**: Check for startup errors
- **Port availability**: Confirm services are listening

## Build Monitoring

### Build Logs

**Concierge execution logs:**

```bash
sudo journalctl -u t8k-build-watcher.service -f
sudo tail -f /home/t8k/log/build.log  # If logging is configured
```

**Service restart logs:**

```bash
sudo journalctl -u tractstack-go -f
sudo -u t8k pm2 logs astro-main
```

### Build Status

**Check build completion:**

```bash
# Monitor state directory
ls -la /home/t8k/state/

# Check service status after build
sudo systemctl status tractstack-go
sudo -u t8k pm2 status
```

## Troubleshooting Builds

### Common Build Issues

**Git pull failures:**

- **Authentication**: Verify Git credentials
- **Repository access**: Check repository permissions
- **Network connectivity**: Verify internet access
- **Local changes**: Resolve merge conflicts

**Go build failures:**

```bash
cd /home/t8k/src/tractstack-go
go mod tidy
go build -v  # Verbose output for debugging
```

**Astro build failures:**

```bash
cd /home/t8k/src/my-tractstack
pnpm install --frozen-lockfile
pnpm build --verbose
```

### Service Restart Issues

**Backend restart problems:**

```bash
sudo journalctl -u tractstack-go --no-pager -n 50
```

**Frontend restart problems:**

```bash
sudo -u t8k pm2 logs astro-main --err
sudo -u t8k pm2 describe astro-main
```

### Recovery Procedures

**Failed build recovery:**

1. **Stop automatic processing**: Remove problematic CSV files
2. **Manual diagnosis**: Run build steps individually
3. **Fix issues**: Resolve code or configuration problems
4. **Retry build**: Create new build trigger file

**Service recovery:**

```bash
# Stop all services
sudo systemctl stop tractstack-go
sudo -u t8k pm2 stop all

# Start services manually
sudo systemctl start tractstack-go
sudo -u t8k pm2 start all
```

## Build Optimization

### Performance Improvements

**Faster builds:**

- **Incremental compilation**: Only rebuild changed components
- **Parallel processing**: Build frontend and backend simultaneously
- **Caching**: Cache dependencies and build artifacts
- **Selective updates**: Only update changed services

### Resource Management

**Build resource usage:**

- **CPU utilization**: Monitor build process load
- **Memory consumption**: Track memory usage during builds
- **Disk I/O**: Optimize file operations
- **Network usage**: Efficient Git operations

---

_The build system automates deployment and updates while maintaining service availability. Monitor build processes and maintain proper Git repository access for reliable automated deployments._
