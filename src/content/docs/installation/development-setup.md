---
title: Development Setup
description: Local development installation for testing and building
---

The development setup creates a local TractStack environment perfect for learning, testing, and building your site before deploying to production.

## Quick Development Install

### One-Line Installation

```bash
curl -fsSL https://get.tractstack.com | bash
```

This automatically performs a quick development install in your home directory.

### Manual Installation

If you prefer to download the installer first:

```bash
wget https://get.tractstack.com/t8k-install.sh
chmod +x t8k-install.sh
./t8k-install.sh --quick
```

## Installation Process

The installer will:

1. **Create directory structure** at `~/t8k/`
2. **Clone repositories**:
   - `tractstack-go` (backend)
   - `my-tractstack` (frontend)
3. **Install dependencies**:
   - Go modules for backend
   - Node.js packages for frontend
   - pnpm if not present
4. **Build binaries**:
   - Compile Go backend
   - Prepare Astro frontend
5. **Create configuration files**
6. **Set up local database** (SQLite)

## Directory Structure

After installation, you'll have:

```
~/t8k/
├── src/
│   ├── tractstack-go/          # Go backend source
│   │   ├── tractstack-go       # Compiled binary
│   │   ├── .env               # Backend configuration
│   │   └── ...
│   └── my-tractstack/         # Astro frontend source
│       ├── dist/              # Built static files
│       ├── .env               # Frontend configuration
│       ├── astro.config.mjs   # Astro configuration
│       └── ...
└── t8k-go-server/            # Data directory
    ├── config/default/       # Configuration files
    │   ├── env.json          # Core settings
    │   ├── brand.json        # Site branding
    │   └── media/           # Uploaded files
    └── db/default/          # Database files
        └── tractstack.db    # SQLite database
```

## Starting Development Servers

You need two terminal windows to run TractStack:

### Terminal 1: Go Backend

```bash
cd ~/t8k/src/tractstack-go
./tractstack-go
```

**Expected output:**

```
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.
[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
[GIN-debug] Listening and serving HTTP on :10000
```

The backend runs on **http://localhost:10000**

### Terminal 2: Astro Frontend

```bash
cd ~/t8k/src/my-tractstack
pnpm dev
```

**Expected output:**

```
🚀 astro v5.x.x started in development mode
┃ Local    http://localhost:4321/
┃ Network  use --host to expose
```

The frontend runs on **http://localhost:4321**

## Accessing Your Site

### Main Website

Open **http://localhost:4321** in your browser

You should see the TractStack demo site with sample content.

### StoryKeep CMS

Visit **http://localhost:4321/storykeep** to access the content management system.

**Default credentials** (development only):

- Username: `admin`
- Password: `password`

## Development Features

### Hot Reloading

- **Frontend changes**: Astro automatically reloads when you edit files
- **Backend changes**: Restart the Go server to see changes

### Live Database

- **SQLite database** at `~/t8k/t8k-go-server/db/default/tractstack.db`
- **Data persists** between restarts
- **Reset database**: Delete the file to start fresh

### Configuration Files

- **Backend**: `~/t8k/src/tractstack-go/.env`
- **Frontend**: `~/t8k/src/my-tractstack/.env`
- **Site settings**: `~/t8k/t8k-go-server/config/default/env.json`

## Development Workflow

### Making Content Changes

1. **Edit content** via StoryKeep CMS at `/storykeep`
2. **Changes reflect immediately** on the frontend
3. **Database updates automatically**

### Customizing Code

1. **Frontend changes**: Edit files in `~/t8k/src/my-tractstack/`
2. **Backend changes**: Edit Go files in `~/t8k/src/tractstack-go/`
3. **Restart backend** after Go code changes
4. **Frontend hot-reloads** automatically

### Adding Custom Components

1. **Edit** `~/t8k/src/my-tractstack/src/custom/CodeHook.astro`
2. **Add your components** to the custom directory
3. **Register** new components in the dispatcher

## Stopping Development Servers

To stop TractStack:

1. **Press Ctrl+C** in both terminal windows
2. **Or close** the terminal windows

Data is automatically saved and will be available when you restart.

## Troubleshooting Development Setup

### Port Already in Use

If ports 4321 or 10000 are busy:

```bash
# Find what's using the port
lsof -i :4321
lsof -i :10000

# Kill the process if needed
kill -9 <PID>
```

### Go Build Errors

```bash
cd ~/t8k/src/tractstack-go
go mod tidy
go build
```

### Node/Astro Errors

```bash
cd ~/t8k/src/my-tractstack
rm -rf node_modules
pnpm install
```

### Database Issues

Reset the database:

```bash
rm ~/t8k/t8k-go-server/db/default/tractstack.db
# Restart the Go backend to recreate
```

### Permission Issues

Fix ownership:

```bash
sudo chown -R $USER:$USER ~/t8k/
```

## Development Configuration

### Environment Variables

**Backend** (`~/t8k/src/tractstack-go/.env`):

```bash
GIN_MODE=debug
DB_PATH=../../t8k-go-server/db/default/tractstack.db
CONFIG_PATH=../../t8k-go-server/config
MEDIA_PATH=../../t8k-go-server/config/default/media
PORT=10000
```

**Frontend** (`~/t8k/src/my-tractstack/.env`):

```bash
PUBLIC_GO_BACKEND=http://localhost:10000
PUBLIC_TENANTID=default
PUBLIC_ENABLE_MULTI_TENANT=false
```

### Site Configuration

Edit `~/t8k/t8k-go-server/config/default/env.json` for site settings:

```json
{
  "SITE_URL": "http://localhost:4321",
  "SITE_INIT": true,
  "HOME_SLUG": "hello",
  "ADMIN_PASSWORD_HASH": "...",
  "EDITOR_PASSWORD_HASH": "..."
}
```

## Next Steps

- **Explore the demo content** and see how adaptive features work
- **Try editing content** through StoryKeep
- **Read about Magic Paths** to understand belief-driven personalization
- **When ready for production**, see [Production Deployment](/installation/production-deployment/)

---

_Development setup is perfect for learning TractStack and building your site. When you're ready to go live, the production deployment guide will help you deploy securely._
