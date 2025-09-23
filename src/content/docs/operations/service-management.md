---
title: Service Management
description: Managing TractStack services in production
---

TractStack runs as multiple services in production: systemd services for the Go backend and PM2 processes for the Astro frontend. Understanding service management is essential for maintaining a healthy production installation.

## Service Architecture

### Main Installation Services

**systemd services:**

- `tractstack-go.service` - Go backend service
- `t8k-build-watcher.path` - Monitors build triggers
- `t8k-build-watcher.service` - Processes build requests

**PM2 processes:**

- `astro-main` - Main installation Astro process

### Dedicated Instance Services

**systemd services:**

- `tractstack-go@{SITE_ID}.service` - Site-specific Go backend

**PM2 processes:**

- `astro-{SITE_ID}` - Dedicated site Astro processes

## systemd Service Management

### Main Installation Commands

**Service status:**

```bash
sudo systemctl status tractstack-go
sudo systemctl status t8k-build-watcher.service
sudo systemctl status t8k-build-watcher.path
```

**Start/stop/restart:**

```bash
sudo systemctl start tractstack-go
sudo systemctl stop tractstack-go
sudo systemctl restart tractstack-go
```

**Enable/disable auto-start:**

```bash
sudo systemctl enable tractstack-go
sudo systemctl disable tractstack-go
```

**View logs:**

```bash
sudo journalctl -u tractstack-go -f
sudo journalctl -u tractstack-go --no-pager -n 50
```

### Dedicated Instance Commands

**Service management (replace SITE_ID):**

```bash
sudo systemctl status tractstack-go@SITE_ID
sudo systemctl restart tractstack-go@SITE_ID
sudo journalctl -u tractstack-go@SITE_ID -f
```

## PM2 Process Management

### Access PM2

**Switch to t8k user:**

```bash
sudo -u t8k bash
```

### PM2 Commands

**View all processes:**

```bash
pm2 status
pm2 list
```

**Restart processes:**

```bash
pm2 restart astro-main           # Main installation
pm2 restart astro-SITE_ID       # Dedicated instance
pm2 restart all                 # All processes
```

**Stop/start processes:**

```bash
pm2 stop astro-main
pm2 start astro-main
```

**View logs:**

```bash
pm2 logs astro-main
pm2 logs astro-SITE_ID
pm2 logs --lines 50
```

**Real-time monitoring:**

```bash
pm2 monit
```

**Process details:**

```bash
pm2 describe astro-main
pm2 show astro-main
```

## Port Management

### Port Allocation

TractStack automatically manages ports via `/home/t8k/etc/t8k-ports.conf`:

**Main installation:**

- Go backend: Port 10000
- Astro frontend: Port 20000

**Dedicated instances:**

- Go backend: Ports 10001, 10002, 10003...
- Astro frontend: Ports 20001, 20002, 20003...

**Check port allocations:**

```bash
cat /home/t8k/etc/t8k-ports.conf
```

**Verify port usage:**

```bash
sudo netstat -tlnp | grep :10000
sudo netstat -tlnp | grep :20000
lsof -i :10000
```

## nginx Integration

### nginx Configuration

**Test configuration:**

```bash
sudo nginx -t
```

**Reload configuration:**

```bash
sudo systemctl reload nginx
```

**Restart nginx:**

```bash
sudo systemctl restart nginx
```

**Check nginx status:**

```bash
sudo systemctl status nginx
```

### nginx Logs

**Error logs:**

```bash
sudo tail -f /var/log/nginx/error.log
```

**Access logs:**

```bash
sudo tail -f /var/log/nginx/access.log
```

## Service Health Checks

### Backend Health

**Check Go backend response:**

```bash
curl -I http://localhost:10000/health
curl -I http://localhost:10001/health  # Dedicated instance
```

### Frontend Health

**Check Astro frontend:**

```bash
curl -I http://localhost:20000
curl -I http://localhost:20001  # Dedicated instance
```

### Full Stack Health

**Check complete request flow:**

```bash
curl -I https://yourdomain.com
curl -I https://tenant.yourdomain.com  # Multi-tenant
```

## Troubleshooting Services

### Service Won't Start

**Check service status:**

```bash
sudo systemctl status tractstack-go
sudo journalctl -u tractstack-go --no-pager
```

**Common issues:**

- Port already in use
- Missing configuration files
- Database connection errors
- Permission problems

**Check port conflicts:**

```bash
sudo netstat -tlnp | grep :10000
sudo lsof -i :10000
```

### PM2 Process Issues

**Process crashed:**

```bash
pm2 logs astro-main --err
pm2 describe astro-main
```

**Restart failed process:**

```bash
pm2 restart astro-main
pm2 reload astro-main
```

**Delete and recreate process:**

```bash
pm2 delete astro-main
pm2 start ecosystem.config.js
```

### Performance Issues

**High CPU usage:**

```bash
top -u t8k
htop -u t8k
```

**Memory usage:**

```bash
ps aux | grep tractstack
pm2 monit
```

**Disk space:**

```bash
df -h
du -sh /home/t8k/
```

## Service Monitoring

### Automated Monitoring

**systemd auto-restart:**
Services are configured to restart automatically on failure.

**PM2 auto-restart:**

```bash
pm2 startup systemd -u t8k --hp /home/t8k
pm2 save
```

### Health Monitoring Scripts

**Service health check script:**

```bash
#!/bin/bash
# Check if services are running
systemctl is-active --quiet tractstack-go || echo "tractstack-go is down"
sudo -u t8k pm2 jlist | jq -r '.[] | select(.pm2_env.status != "online") | .name' | while read proc; do
  echo "PM2 process $proc is not online"
done
```

### Log Rotation

**systemd logs:**
Automatically managed by journald with configurable retention.

**PM2 logs:**

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
```

## Service Updates

### Update Process

1. **Stop services:**

```bash
sudo systemctl stop tractstack-go
sudo -u t8k pm2 stop all
```

2. **Update code:**

```bash
cd /home/t8k/src/tractstack-go
git pull
go build

cd /home/t8k/src/my-tractstack
git pull
pnpm install
pnpm build
```

3. **Start services:**

```bash
sudo systemctl start tractstack-go
sudo -u t8k pm2 start all
```

### Automated Updates

**Build concierge:**
The `t8k-concierge.sh` script handles automated builds and service restarts.

**Trigger build:**

```bash
echo "type=main,tenant=default,command=build" > /home/t8k/state/build-$(date +%s).csv
```

---

_Proper service management ensures reliable TractStack operation. Regular monitoring and maintenance prevent issues and ensure optimal performance._
