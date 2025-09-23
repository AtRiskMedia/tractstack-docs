---
title: Monitoring & Logs
description: System monitoring, logging, and performance tracking
---

TractStack provides comprehensive logging and monitoring capabilities through systemd, PM2, and application-level logging. Understanding these tools is essential for maintaining system health and troubleshooting issues.

## Log Locations

### systemd Logs

**Go backend logs:**

```bash
sudo journalctl -u tractstack-go -f
sudo journalctl -u tractstack-go --no-pager -n 50
sudo journalctl -u tractstack-go --since "1 hour ago"
```

**Build watcher logs:**

```bash
sudo journalctl -u t8k-build-watcher.service -f
sudo journalctl -u t8k-build-watcher.path -f
```

**Dedicated instance logs:**

```bash
sudo journalctl -u tractstack-go@SITE_ID -f
```

### PM2 Logs

**Astro frontend logs:**

```bash
sudo -u t8k pm2 logs astro-main
sudo -u t8k pm2 logs astro-SITE_ID
sudo -u t8k pm2 logs --lines 50
sudo -u t8k pm2 logs --err  # Error logs only
```

**PM2 log files:**

- Standard output: `/home/t8k/.pm2/logs/astro-main-out.log`
- Error output: `/home/t8k/.pm2/logs/astro-main-error.log`

### nginx Logs

**Web server logs:**

```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Application Logs

**TractStack application logs:**

- System logs: `/home/t8k/t8k-go-server/log/system.log`
- Tenant logs: `/home/t8k/t8k-go-server/log/tenant.log`
- Database logs: `/home/t8k/t8k-go-server/log/database.log`

## Log Analysis

### systemd Journal

**Filter by time:**

```bash
sudo journalctl -u tractstack-go --since "2024-01-01 00:00:00"
sudo journalctl -u tractstack-go --until "2024-01-02 00:00:00"
sudo journalctl -u tractstack-go --since yesterday
```

**Filter by priority:**

```bash
sudo journalctl -u tractstack-go -p err  # Errors only
sudo journalctl -u tractstack-go -p warning  # Warnings and above
```

**Follow logs with context:**

```bash
sudo journalctl -u tractstack-go -f --output=verbose
sudo journalctl -u tractstack-go -f --output=json-pretty
```

### Log Search and Filtering

**Search for specific errors:**

```bash
sudo journalctl -u tractstack-go | grep "ERROR"
sudo journalctl -u tractstack-go | grep -i "database"
sudo journalctl -u tractstack-go | grep "panic"
```

**Count log entries:**

```bash
sudo journalctl -u tractstack-go --since "1 hour ago" | wc -l
```

## Performance Monitoring

### System Resources

**CPU and memory usage:**

```bash
top -u t8k
htop -u t8k
ps aux | grep tractstack
```

**Process monitoring:**

```bash
sudo -u t8k pm2 monit  # Real-time PM2 monitoring
sudo -u t8k pm2 describe astro-main
```

### Disk Usage

**Storage monitoring:**

```bash
df -h  # Disk space
du -sh /home/t8k/  # TractStack directory size
du -sh /home/t8k/t8k-go-server/db/  # Database size
du -sh /home/t8k/t8k-go-server/config/default/media/  # Media size
```

### Network Monitoring

**Port usage:**

```bash
sudo netstat -tlnp | grep tractstack
sudo lsof -i :10000
sudo lsof -i :20000
```

**Connection monitoring:**

```bash
sudo ss -tuln | grep -E ":(10000|20000)"
```

## Health Checks

### Service Health

**Check service status:**

```bash
sudo systemctl is-active tractstack-go
sudo systemctl is-enabled tractstack-go
sudo -u t8k pm2 jlist | jq -r '.[] | .pm2_env.status'
```

**HTTP endpoint health:**

```bash
curl -I http://localhost:10000/health
curl -I http://localhost:20000
curl -I https://yourdomain.com
```

### Database Health

**SQLite database checks:**

```bash
# Check database file integrity
sqlite3 /home/t8k/t8k-go-server/db/default/tractstack.db "PRAGMA integrity_check;"

# Database size and statistics
sqlite3 /home/t8k/t8k-go-server/db/default/tractstack.db "PRAGMA database_list;"
```

## Alerting and Monitoring

### Service Monitoring Script

**Basic health check script:**

```bash
#!/bin/bash
# /home/t8k/scripts/health-check.sh

echo "=== TractStack Health Check ==="
echo "Date: $(date)"

# Check systemd service
if systemctl is-active --quiet tractstack-go; then
    echo "✓ tractstack-go service is running"
else
    echo "✗ tractstack-go service is not running"
fi

# Check PM2 processes
if sudo -u t8k pm2 jlist | jq -e '.[] | select(.pm2_env.status != "online")' > /dev/null; then
    echo "✗ Some PM2 processes are not online"
    sudo -u t8k pm2 status
else
    echo "✓ All PM2 processes are online"
fi

# Check HTTP endpoints
if curl -s -I http://localhost:10000 > /dev/null; then
    echo "✓ Go backend responding"
else
    echo "✗ Go backend not responding"
fi

if curl -s -I http://localhost:20000 > /dev/null; then
    echo "✓ Astro frontend responding"
else
    echo "✗ Astro frontend not responding"
fi

echo "=== End Health Check ==="
```

### Log Rotation

**systemd log management:**

```bash
# Configure journal size limits
sudo mkdir -p /etc/systemd/journald.conf.d/
echo -e "[Journal]\nSystemMaxUse=500M\nMaxRetentionSec=1month" | sudo tee /etc/systemd/journald.conf.d/size.conf
sudo systemctl restart systemd-journald
```

**PM2 log rotation:**

```bash
sudo -u t8k pm2 install pm2-logrotate
sudo -u t8k pm2 set pm2-logrotate:max_size 10M
sudo -u t8k pm2 set pm2-logrotate:retain 30
sudo -u t8k pm2 set pm2-logrotate:compress true
```

## Troubleshooting Common Issues

### High CPU Usage

**Identify processes:**

```bash
top -o %CPU
htop -s PERCENT_CPU
```

**Go backend profiling:**

```bash
curl http://localhost:10000/debug/pprof/profile?seconds=30 > cpu.prof
```

### Memory Issues

**Memory usage analysis:**

```bash
sudo -u t8k pm2 show astro-main
ps -o pid,ppid,%mem,rss,vsz,comm -p $(pgrep tractstack-go)
```

**Check for memory leaks:**

```bash
# Monitor memory over time
watch -n 5 'ps aux | grep tractstack'
```

### Database Issues

**Database lock problems:**

```bash
# Check for database locks
lsof /home/t8k/t8k-go-server/db/default/tractstack.db

# SQLite database analysis
sqlite3 /home/t8k/t8k-go-server/db/default/tractstack.db "PRAGMA compile_options;"
```

### SSL Certificate Issues

**Certificate monitoring:**

```bash
# Check certificate expiration
echo | openssl s_client -connect yourdomain.com:443 2>/dev/null | openssl x509 -noout -dates

# Check certificate files
sudo ls -la /home/t8k/etc/letsencrypt/live/yourdomain.com/
```

## Monitoring Best Practices

### Regular Monitoring

**Daily checks:**

- Service status and health
- Log error analysis
- Disk space monitoring
- SSL certificate validity

**Weekly reviews:**

- Performance trend analysis
- Log rotation and cleanup
- Backup verification
- Security update review

### Automated Monitoring

**Cron job for health checks:**

```bash
# Add to crontab
0 */6 * * * /home/t8k/scripts/health-check.sh >> /home/t8k/log/health-check.log 2>&1
```

**Log monitoring alerts:**

```bash
# Monitor for critical errors
*/5 * * * * journalctl -u tractstack-go --since "5 minutes ago" | grep -i "error\|panic\|fatal" && echo "Critical error detected" | mail -s "TractStack Alert" admin@yourdomain.com
```

---

_Effective monitoring and logging enable proactive issue detection and resolution. Regular log analysis helps identify trends and prevent problems before they impact users._
