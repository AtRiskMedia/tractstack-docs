---
title: Quick Start
description: Get TractStack running in 15 minutes
---

Get TractStack up and running on your local machine in just a few minutes. This quick start guide will have you exploring the platform without any complex configuration.

## Prerequisites

Make sure you have these installed:

- **Go 1.22** or higher
- **Node.js 20** or higher
- **Git**
- **npm**

## One-Line Installation

```bash
curl -fsSL https://get.tractstack.com | bash
```

This will automatically:

- Download TractStack source code
- Install dependencies
- Set up a local development environment
- Install pnpm if needed

## Manual Installation

If you prefer to download the installer first:

```bash
wget https://get.tractstack.com/t8k-install.sh
chmod +x t8k-install.sh
./t8k-install.sh --quick
```

## Starting TractStack

After installation, you'll need two terminal windows:

### Terminal 1: Start the Go Backend

```bash
cd ~/t8k/src/tractstack-go
./tractstack-go
```

You'll see output like:

```
[GIN-debug] Listening and serving HTTP on :10000
TractStack backend running at http://localhost:10000
```

### Terminal 2: Start the Astro Frontend

```bash
cd ~/t8k/src/my-tractstack
pnpm dev
```

You'll see output like:

```
🚀 astro v5.x.x started in development mode
┃ Local    http://localhost:4321/
```

## Access Your Site

Open your browser and go to:

**http://localhost:4321**

You should see your TractStack site running!

## Access StoryKeep (CMS)

To manage your content, visit the built-in CMS:

**http://localhost:4321/storykeep**

This is where you'll:

- Create and edit pages
- Configure belief-driven personalization
- Monitor analytics
- Manage site branding

## What's Next?

1. **Explore the demo content** - Click around and see how the adaptive content works
2. **Try StoryKeep** - Create your first page or modify existing content
3. **Learn about Magic Paths** - See how belief-driven personalization works
4. **Check the analytics** - View real-time engagement tracking

## Quick Development Setup

This quick install creates a development environment at `~/t8k/` with:

- **Source code** in `~/t8k/src/`
- **Database** at `~/t8k/t8k-go-server/db/`
- **Configuration** at `~/t8k/t8k-go-server/config/`
- **Media files** at `~/t8k/t8k-go-server/config/default/media/`

## Stopping TractStack

To stop the development servers:

1. Press `Ctrl+C` in both terminal windows
2. Or close the terminal windows

## Next Steps

- [Core Concepts Overview](/getting-started/core-concepts/) - Understand the key concepts
- [Full Installation Guide](/installation/development-setup/) - For production deployments
- [User Guide](/user-guide/storykeep-dashboard/) - Learn to use StoryKeep CMS

---

_You're now ready to explore epistemic hypermedia! Start by visiting your local site and trying out the adaptive content features._
