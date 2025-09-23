---
title: Troubleshooting
description: Common issues and solutions for TractStack
---

This guide covers common TractStack issues and their solutions, organized by symptom and system component.

## Service Issues

### TractStack Won't Start

**Symptoms:**

- Services fail to start after installation
- systemd service shows failed status
- PM2 processes crash immediately

**Diagnosis:**

```bash
sudo systemctl status tractstack-go
sudo journalctl -u tractstack-go --no-pager -n 50
sudo -u t8k pm2 logs astro-main --err
```

**Common causes and solutions:**

**Port conflicts:**

```bash
# Check what's using the port
sudo netstat -tlnp | grep :10000
sudo lsof -i :10000

# Kill conflicting process
sudo kill -9 <PID>
```

**Database connection errors:**

```bash
# Check database file exists and permissions
ls -la /home/t8k/t8k-go-server/db/default/tractstack.db
sudo chown t8k:t8k /home/t8k/t8k-go-server/db/default/tractstack.db
```

**Missing configuration:**

```bash
# Verify configuration file exists
cat /home/t8k/t8k-go-server/config/default/env.json
```

### Services Keep Crashing

**Symptoms:**

- Services start but crash shortly after
- Repeated restart attempts in logs
- High memory or CPU usage before crash

**Diagnosis:**

```bash
sudo journalctl -u tractstack-go -f
sudo -u t8k pm2 monit
```

**Solutions:**

**Memory issues:**

```bash
# Check available memory
free -h
# Monitor process memory usage
top -u t8k
```

**Configuration errors:**

```bash
# Validate JSON configuration
cat /home/t8k/t8k-go-server/config/default/env.json | jq .
```

## Database Issues

### Database Locked Errors

**Symptoms:**

- "Database is locked" errors in logs
- Slow response times
- Failed write operations

**Diagnosis:**

```bash
# Check for processes using database
lsof /home/t8k/t8k-go-server/db/default/tractstack.db

# Check database integrity
sqlite3 /home/t8k/t8k-go-server/db/default/tractstack.db "PRAGMA integrity_check;"
```

**Solutions:**

**Kill blocking processes:**

```bash
sudo systemctl stop tractstack-go
# Wait for processes to close database connections
sudo systemctl start tractstack-go
```

**Database corruption recovery:**

```bash
# Stop services
sudo systemctl stop tractstack-go

# Backup current database
sudo -u t8k cp /home/t8k/t8k-go-server/db/default/tractstack.db \
    /home/t8k/t8k-go-server/db/default/tractstack.db.backup

# Check and repair database
sqlite3 /home/t8k/t8k-go-server/db/default/tractstack.db "VACUUM;"
```

## SSL Certificate Issues

### Certificate Not Found

**Symptoms:**

- nginx SSL errors
- HTTPS connections fail
- Certificate file missing

**Diagnosis:**

```bash
sudo ls -la /home/t8k/etc/letsencrypt/live/yourdomain.com/
sudo nginx -t
```

**Solutions:**

**Request new certificate:**

```bash
sudo -u t8k bash -c "source /home/t8k/certbot_venv/bin/activate && \
  certbot certonly --manual --preferred-challenges dns \
  --config-dir /home/t8k/etc/letsencrypt \
  --work-dir /home/t8k/lib/letsencrypt \
  --logs-dir /home/t8k/log/letsencrypt \
  --agree-tos --email admin@yourdomain.com \
  -d yourdomain.com -d *.yourdomain.com"
```

### Certificate Expired

**Symptoms:**

- Browser security warnings
- SSL certificate expired errors

**Diagnosis:**

```bash
echo | openssl s_client -connect yourdomain.com:443 2>/dev/null | openssl x509 -noout -dates
```

**Solutions:**

**Force certificate renewal:**

```bash
sudo -u t8k /home/t8k/certbot_venv/bin/certbot renew --force-renewal
sudo systemctl reload nginx
```

## Network and Connectivity Issues

### Site Not Accessible

**Symptoms:**

- Website doesn't load
- Connection timeouts
- DNS resolution failures

**Diagnosis:**

```bash
# Test local connectivity
curl -I http://localhost:20000
curl -I http://localhost:10000

# Test external connectivity
curl -I https://yourdomain.com

# Check DNS resolution
dig yourdomain.com
```

**Solutions:**

**nginx not running:**

```bash
sudo systemctl status nginx
sudo systemctl start nginx
```

**DNS issues:**

```bash
# Check DNS records
dig yourdomain.com A
dig *.yourdomain.com A  # For multi-tenant
```

**Firewall blocking:**

```bash
sudo ufw status
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## Performance Issues

### Slow Response Times

**Symptoms:**

- Pages load slowly
- High CPU or memory usage
- Database query timeouts

**Diagnosis:**

```bash
# Check system resources
top
htop
df -h

# Monitor database performance
sqlite3 /home/t8k/t8k-go-server/db/default/tractstack.db "ANALYZE;"
```

**Solutions:**

**Database optimization:**

```bash
sqlite3 /home/t8k/t8k-go-server/db/default/tractstack.db "VACUUM;"
sqlite3 /home/t8k/t8k-go-server/db/default/tractstack.db "PRAGMA optimize;"
```

**Clear caches:**

```bash
sudo systemctl restart tractstack-go
sudo -u t8k pm2 restart all
```

## Multi-Tenant Issues

### Tenant Registration Fails

**Symptoms:**

- Registration page errors
- Subdomain not working
- Tenant creation failures

**Diagnosis:**

```bash
# Check multi-tenant configuration
grep ENABLE_MULTI_TENANT /home/t8k/src/tractstack-go/.env
grep PUBLIC_ENABLE_MULTI_TENANT /home/t8k/src/my-tractstack/.env

# Test subdomain DNS
dig tenant.yourdomain.com
```

**Solutions:**

**DNS configuration:**

```bash
# Verify wildcard DNS record exists
dig *.yourdomain.com A
```

**SSL certificate for subdomains:**

```bash
# Ensure wildcard certificate covers subdomains
sudo -u t8k /home/t8k/certbot_venv/bin/certbot certificates
```

## Build System Issues

### Build Failures

**Symptoms:**

- Build process fails
- Services don't restart after build
- Old code still running

**Diagnosis:**

```bash
sudo journalctl -u t8k-build-watcher.service -f
ls -la /home/t8k/state/
```

**Solutions:**

**Manual build:**

```bash
sudo -u t8k /home/t8k/scripts/t8k-concierge.sh
```

**Git repository issues:**

```bash
cd /home/t8k/src/tractstack-go
git status
git pull origin main

cd /home/t8k/src/my-tractstack
git status
git pull origin main
```

## Recovery Procedures

### Emergency Service Restart

**Complete service restart:**

```bash
# Stop all services
sudo systemctl stop tractstack-go
sudo -u t8k pm2 stop all

# Wait for clean shutdown
sleep 5

# Start services
sudo systemctl start tractstack-go
sudo -u t8k pm2 start all

# Verify services are running
sudo systemctl status tractstack-go
sudo -u t8k pm2 status
```

### Reset to Clean State

**Reset PM2 processes:**

```bash
sudo -u t8k pm2 kill
sudo -u t8k pm2 resurrect
```

**Reset systemd services:**

```bash
sudo systemctl daemon-reload
sudo systemctl reset-failed tractstack-go
sudo systemctl start tractstack-go
```

## Getting Help

### Log Collection

**Gather diagnostic information:**

```bash
# Create diagnostic report
echo "=== TractStack Diagnostic Report ===" > diagnostic.txt
echo "Date: $(date)" >> diagnostic.txt
echo "" >> diagnostic.txt

echo "=== Service Status ===" >> diagnostic.txt
sudo systemctl status tractstack-go >> diagnostic.txt
sudo -u t8k pm2 status >> diagnostic.txt

echo "=== Recent Logs ===" >> diagnostic.txt
sudo journalctl -u tractstack-go --no-pager -n 50 >> diagnostic.txt

echo "=== System Resources ===" >> diagnostic.txt
df -h >> diagnostic.txt
free -h >> diagnostic.txt
```

### Community Support

**When seeking help:**

- Include TractStack version information
- Provide relevant log excerpts
- Describe steps to reproduce the issue
- Include system information (OS, architecture)

**Resources:**

- GitHub Issues: Report bugs and feature requests
- Documentation: Check latest documentation for updates
- Community: Connect with other TractStack users

---

_Most issues can be resolved by checking logs, verifying configuration, and restarting services. When in doubt, collect diagnostic information before seeking help._
