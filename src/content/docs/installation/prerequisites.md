---
title: Prerequisites
description: System requirements based on your installation path
---

Before installing TractStack, identify your use case. You can run TractStack natively for development, as a production service on Linux, or as a portable appliance via Docker.

---

## 1. Choose Your Path

### A. Docker (Recommended for Mac/Windows)

The most reliable way to run TractStack on macOS or Windows. It packages all dependencies (Go, Node, Python, and SQLite) into a single container.

- **Requirements**: [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.
- **Benefits**: No need to install Go, Node.js, or Python on your host machine.

### B. Native Development

Best for users who want to modify core Go or Astro code directly on their machine with their own IDE.

- **OS Support**: macOS, Linux, or Windows (via WSL2).
- **Requirements**: See [Essential Developer Tools](#essential-developer-tools) below.

### C. Production Deployment

For high-performance, live environments configured with security and process management.

- **OS Support**: Linux (Ubuntu/Debian recommended).
- **Requirements**: See [Production Requirements](#production-requirements) below.

---

## 2. Essential Developer Tools (Native Path)

If you are **not** using Docker, ensure these tools are installed and available in your system PATH:

### Go Programming Language

- **Version**: Go 1.22 or higher.
- **Note**: The backend requires SQLite with FTS5 support (included in the default build tags).
- **Verify**: `go version`

### Node.js & npm

- **Version**: Node.js 20 or 22 (Node 24 is currently UNTESTED).
- **Verify**: `node --version`

### Python 3 & BeautifulSoup4

- **Required for**: Automated Tailwind CSS whitelist extraction for the Go backend templates.
- **Install**: `pip3 install beautifulsoup4` or `apt install python3-bs4`
- **Verify**: `python3 -c "import bs4; print('ok')"`

### pnpm Package Manager

- **Note**: TractStack uses pnpm for faster, more efficient dependency management.
- **Manual install**: `npm install -g pnpm`

---

## 3. Production Requirements (Additional)

For bare-metal production deployments on Linux, you also need the following system-level components:

### Web Server & Utilities

- **nginx**: Acts as the reverse proxy for SSL termination and static media serving.
- **socat**: Required by the SSL issuance scripts for ACME challenges.
- **systemd**: Standard on modern Linux; used to manage the Go backend as a background service.

### Process Manager

- **PM2**: Manages the Astro/Node.js frontend processes and provides auto-restart capabilities.
- **Installation**: `npm install -g pm2`

### System Permissions

- **sudo access**: Required to create the dedicated `t8k` user and bind to web ports.
- **t8k User**: The installer creates a dedicated system user (`t8k`) to isolate service permissions.
- **Nginx Access**: The installer automatically adds `www-data` to the `t8k` group for media access.

---

## 4. Hardware Requirements

| Requirement | Minimum (Dev/Docker) | Recommended (Production)        |
| :---------- | :------------------- | :------------------------------ |
| **RAM**     | 2GB Available        | 4GB+ Available                  |
| **Storage** | 1GB Free Space       | 10GB+ (for logs, media, and DB) |
| **CPU**     | Any modern processor | 2+ Cores                        |

---

## 5. Network Requirements

### Internal Ports

- **Astro Frontend**: 4321
- **Go Backend**: 8080 (Docker/Dev) or 10000+ (Production)

### External Ports (Production)

- **HTTP (Port 80)**: For initial web traffic and SSL verification.
- **HTTPS (Port 443)**: For secure production web traffic.

---

## 6. Verification Commands

Run these to confirm your environment is ready for the **Native Path**:

```bash
# Check Go
go version
# Expected: go version go1.22.x or higher

# Check Node
node --version
# Expected: v20.x or v22.x

# Check Python Libs
python3 -c "import bs4; print('bs4 ok')"
# Expected: bs4 ok

# Check Docker (if using Docker Path)
docker --version
# Expected: Docker version x.x.x
```
