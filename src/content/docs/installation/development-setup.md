---
title: Development Setup
description: Local development installation for testing and building
---

The development setup creates a local TractStack environment perfect for learning, testing, and building your site. You can choose between a native installation or a containerized Docker setup.

## 1. Choose Your Development Path

### Path A: Docker (Recommended for Mac/Windows)

The fastest way to get started. It uses a self-contained appliance to handle all dependencies, including Go, Node.js, and Python.

**1. Build the Image**

```bash
docker build -t tractstack-sandbox .
```

**2. Run the Container**

```bash
docker run -d --name my-tractstack-sandbox \
  -p 4321:4321 -p 8080:8080 \
  -v tractstack_data:/home/sandbox/t8k/t8k-go-server \
  tractstack-sandbox
```

**3. Access Your Environment**

- **Frontend**: [http://localhost:4321](http://localhost:4321)
- **Backend API**: [http://localhost:8080](http://localhost:8080)

---

### Path B: Native Installation

Best for users who want to modify core Go or Astro code directly on their host machine. Requires all Prerequisites to be installed locally.

**One-Line Installation**

```bash
curl -fsSL [https://get.tractstack.com](https://get.tractstack.com) | bash
```

**Manual Installation**

```bash
wget [https://get.tractstack.com/t8k-install.sh](https://get.tractstack.com/t8k-install.sh)
chmod +x t8k-install.sh
./t8k-install.sh --quick
```

**Installation Process**
The native installer will:

1. **Create directory structure** at `~/t8k/`
2. **Clone repositories**: `tractstack-go` (backend) and `my-tractstack` (frontend)
3. **Install dependencies**: Go modules, Node packages, and pnpm
4. **Build binaries**: Compile Go backend and prepare the Astro frontend
5. **Set up local database**: Initialize SQLite in `~/t8k/t8k-go-server/`

---

## 2. Directory Structure

Regardless of your path, the internal TractStack structure remains consistent:

```
t8k/
├── src/
│   ├── tractstack-go/          # Go backend source
│   │   ├── tractstack-go       # Compiled binary
│   │   └── .env                # Backend configuration
│   └── my-tractstack/          # Astro frontend source
│       ├── .env                # Frontend configuration
│       └── astro.config.mjs    # Astro configuration
└── t8k-go-server/              # Data directory (Persistent Volume)
    ├── config/default/         # Site settings and Branding
    │   └── media/              # Uploaded files
    └── db/default/             # SQLite database files
```

---

## 3. Starting Development Servers (Native Only)

If using the **Native Path**, you must run two terminal windows. (Docker handles this automatically).

### Terminal 1: Go Backend

```bash
cd ~/t8k/src/tractstack-go
./tractstack-go
```

_Expected: Listening and serving HTTP on :10000_

### Terminal 2: Astro Frontend

```bash
cd ~/t8k/src/my-tractstack
pnpm dev
```

_Expected: Local <http://localhost:4321/>_

---

## 4. Accessing Your Site

### Main Website

Open **<http://localhost:4321>** in your browser to see the demo site with sample content.

### StoryKeep CMS

Visit **<http://localhost:4321/storykeep>** to access the content management system.

**Default credentials** (development only):

- **Username**: `admin`
- **Password**: `password`

---

## 5. Development Workflow

### Hot Reloading

- **Frontend**: Astro automatically reloads when you edit files in `src/my-tractstack/`.
- **Backend**: You must restart the Go server (or the Docker container) to see changes to Go source code.

### Live Database

- **SQLite Persistence**: Data persists between restarts in the `t8k-go-server/db/` directory.
- **Reset Database**: Delete `tractstack.db` to start fresh. If using Docker, run `docker volume rm tractstack_data`.

### Customizing Code

1. **Frontend**: Edit files in `~/t8k/src/my-tractstack/`.
2. **Backend**: Edit Go files in `~/t8k/src/tractstack-go/`.
3. **Custom Components**: Edit `~/t8k/src/my-tractstack/src/custom/CodeHook.astro` to add your own adaptive logic.

---

## 6. Troubleshooting

### Port Already in Use

If ports 4321 or 10000/8080 are busy:

```bash
lsof -i :4321
kill -9 <PID>
```

### Permission Issues (Docker)

The Docker appliance includes an `entrypoint.sh` script that automatically fixes ownership of the `t8k-go-server` volume. If you encounter permission errors on the host, ensure Docker has permission to write to its designated volumes.

### Native Build Errors

Ensure your Go version is 1.22+ and you have `python3-bs4` installed for Tailwind whitelisting.

---

_Once your development environment is running, you can explore **[Adaptive Content](/concepts/adaptive-content/)** or prepare for **[Production Deployment](/installation/production-deployment/)**._
