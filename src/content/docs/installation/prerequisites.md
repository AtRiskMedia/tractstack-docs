---
title: Prerequisites
description: System requirements and essential tools
---

Before installing TractStack, ensure your system meets these requirements. The installation process will check for these prerequisites and guide you through any missing components.

## Essential Developer Tools

### Go Programming Language

- **Version**: Go 1.22 or higher
- **Download**: [golang.org/dl](https://golang.org/dl/)
- **Verify installation**: `go version`

### Node.js & npm

- **Version**: Node.js 20 or higher (Node 24 is UNTESTED!! Use 20 or 22)
- **Download**: [nodejs.org](https://nodejs.org/)
- **Verify installation**: `node --version` and `npm --version`
- **Note**: npm is included with Node.js

### Git Version Control

- **Required for**: Cloning repositories and version control
- **Download**: [git-scm.com](https://git-scm.com/)
- **Verify installation**: `git --version`

### pnpm Package Manager

- **Auto-installed**: The installer will add pnpm if missing
- **Manual install**: `npm install -g pnpm`
- **Why pnpm**: Faster, more efficient package management than npm

## Production Requirements (Additional)

For production deployments, you'll also need:

### Web Server

- **nginx** - For reverse proxy and SSL termination
- **Installation**: Available in all major Linux distributions
- **Ubuntu/Debian**: `sudo apt install nginx`
- **CentOS/RHEL**: `sudo yum install nginx`

### Process Manager

- **PM2** - For Node.js process management and monitoring
- **Installation**: `npm install -g pm2`
- **Features**: Auto-restart, logging, clustering

### System Service Manager

- **systemd** - For automatic service startup (Linux only)
- **Included**: Standard on modern Linux distributions
- **Used for**: Go backend service management

### System Permissions

- **sudo access** - Required for production installation
- **User creation**: Installer creates dedicated `t8k` user
- **Port binding**: For services on ports 80/443

### SSL Certificates

- **Let's Encrypt** integration included
- **Automated**: With Cloudflare DNS API
- **Manual**: DNS verification for other providers

## Operating System Support

### Fully Supported

- **Linux distributions**: Ubuntu, Debian, CentOS, RHEL, Fedora
- **macOS**: Development and testing
- **Windows**: Via WSL2 (Windows Subsystem for Linux)

### Recommended for Production

- **Ubuntu 20.04 LTS** or newer
- **Debian 11** or newer
- **CentOS 8** or newer

## Hardware Requirements

### Minimum (Development)

- **RAM**: 2GB available
- **Storage**: 1GB free space
- **CPU**: Any modern processor

### Recommended (Production)

- **RAM**: 4GB+ available
- **Storage**: 10GB+ free space (for logs, media, database)
- **CPU**: 2+ cores
- **Network**: Stable internet connection for SSL certificates

## Optional Enhancements

### Database Options

- **SQLite** (default) - Zero configuration, included
- **Turso** - Cloud SQLite with global replication
- **Custom**: Other databases via configuration

### CDN Integration

- **Bunny.net** - For video streaming
- **CloudFlare** - For DNS and SSL automation
- **Custom**: Any CDN via configuration

### External Services

- **Assembly AI** - For AI-powered content analysis
- **Resend** - For transactional email
- **Google Analytics** - For additional analytics

## Verification Commands

Run these commands to verify your system is ready:

```bash
# Check Go installation
go version
# Expected: go version go1.22.x

# Check Node.js installation
node --version
# Expected: v20.x.x or higher

# Check npm installation
npm --version
# Expected: 10.x.x or higher

# Check Git installation
git --version
# Expected: git version 2.x.x

# Check available disk space
df -h
# Ensure at least 1GB free space

# Check available memory
free -h
# Ensure at least 2GB available
```

## Network Requirements

### Development

- **Outbound HTTPS (443)**: For downloading dependencies
- **Local ports**: 4321 (Astro), 10000 (Go backend)

### Production

- **Inbound HTTP (80)**: For web traffic and SSL verification
- **Inbound HTTPS (443)**: For secure web traffic
- **Outbound HTTPS (443)**: For SSL certificates and updates
- **DNS access**: For domain resolution and SSL verification

## Troubleshooting Prerequisites

### Go Installation Issues

```bash
# Verify GOPATH and GOROOT
go env GOPATH
go env GOROOT

# Check PATH includes Go binary
echo $PATH | grep go
```

### Node.js Version Issues

```bash
# Use Node Version Manager (nvm) for multiple versions
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
```

### Permission Issues (Linux/macOS)

```bash
# Fix npm global permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
```

### WSL2 Setup (Windows)

1. Enable WSL2 in Windows Features
2. Install Ubuntu from Microsoft Store
3. Run Ubuntu and install prerequisites inside WSL2
4. Use WSL2 terminal for all TractStack commands

---

_Once these prerequisites are met, you're ready to proceed with the [Development Setup](/installation/development-setup/) or [Production Deployment](/installation/production-deployment/)._
