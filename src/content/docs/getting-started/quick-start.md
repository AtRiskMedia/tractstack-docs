---
title: Quick Start
description: Get TractStack running in 15 minutes
---

Get TractStack up and running on your local machine in just a few minutes. This guide provides two paths to get started. Choose the one that works best for you.

- **Path 1: Docker (Recommended)**: The easiest way to start. Runs TractStack in a self-contained environment without needing to install Go or Node.js on your machine.
- **Path 2: Local Installation**: For developers who want to set up the environment and edit the source code directly on their machine.

---

## Path 1: Docker Installation (Recommended)

This method uses Docker to run the TractStack sandbox. The only prerequisite is to have Docker installed and running.

### For Linux & macOS

Copy and paste the following commands into your terminal.

#### 1. Download and extract the Docker package

```bash
curl -O [https://get.tractstack.com/t8k-docker.tar.gz](https://get.tractstack.com/t8k-docker.tar.gz)
tar -xzf t8k-docker.tar.gz
cd tractstack-docker
```

#### 2. Build the Docker image

```bash
docker build -t tractstack-sandbox .
```

#### 3. Run the container

```bash
docker run -d --name my-tractstack-sandbox -p 4321:4321 -p 8080:8080 -v tractstack_data:/home/sandbox/t8k/t8k-go-server tractstack-sandbox
```

### For Windows (PowerShell)

Copy and paste the following commands into your PowerShell terminal.

#### 1. Download and extract the Docker package

```powershell
curl -OutFile t8k-docker.tar.gz [https://get.tractstack.com/t8k-docker.tar.gz](https://get.tractstack.com/t8k-docker.tar.gz)
tar -xzf t8k-docker.tar.gz
cd tractstack-docker
```

#### 2. Build the Docker image

```powershell
docker build -t tractstack-sandbox .
```

#### 3. Run the container

```powershell
docker run -d --name my-tractstack-sandbox -p 4321:4321 -p 8080:8080 -v tractstack_data:/home/sandbox/t8k/t8k-go-server tractstack-sandbox
```

### Access Your Site

Once the container is running, your TractStack instance is ready.

- **Access Your Site**: [http://localhost:4321](http://localhost:4321)
- **Access StoryKeep (CMS)**: [http://localhost:4321/storykeep](http://localhost:4321/storykeep)

For additional commands, such as viewing logs, stopping the container, or performing a full reset, please refer to the `README.md` file in the extracted folder.

---

## Path 2: Local Installation

Install the necessary dependencies and run the TractStack source code directly on your machine.

### Prerequisites

Make sure you have these installed:

- **Go 1.22** or higher
- **Node.js 20** or higher
- **Git**
- **npm**

### One-Line Installation

This command will download the source code, install dependencies, and set up a local development environment.

```bash
curl -fsSL [https://get.tractstack.com](https://get.tractstack.com) | bash
```

### Manual Installation

If you prefer to download the installer first:

```bash
wget [https://get.tractstack.com/t8k-install.sh](https://get.tractstack.com/t8k-install.sh)
chmod +x t8k-install.sh
./t8k-install.sh --quick
```

### Starting TractStack

After installation, you'll need two terminal windows.

**Terminal 1: Start the Go Backend**

```bash
cd ~/t8k/src/tractstack-go
./tractstack-go
```

**Terminal 2: Start the Astro Frontend**

```bash
cd ~/t8k/src/my-tractstack
pnpm dev
```

### Access Your Site

Open your browser and go to:

**<http://localhost:4321>**

You should see your TractStack site running!

## Next Steps

- [Core Concepts Overview](/getting-started/core-concepts/) - Understand the key concepts
- [Full Installation Guide](/installation/development-setup/) - For production deployments
- [User Guide](/user-guide/storykeep-dashboard/) - Learn to use StoryKeep CMS
