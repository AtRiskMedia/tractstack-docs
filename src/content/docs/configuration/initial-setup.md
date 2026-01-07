---
title: Initial Setup
description: Finalizing your installation and triggering your first build
---

Once the TractStack installer finishes, your environment is scaffolded but requires a final build handshake to sync the frontend CSS with the backend templates.

## 1. Post-Installation Checklist

Immediately after the installer completes, verify your access points based on your mode:

### Development Mode

- **Frontend**: <http://localhost:4321>
- **Backend API**: <http://localhost:8080>
- **CMS Access**: <http://localhost:4321/storykeep> (Admin / Password)

### Production Mode

- **Production URL**: `https://yourdomain.com`
- **Internal Astro Port**: `http://localhost:20000`
- **Internal Go Port**: `http://localhost:10000`

---

## 2. Triggering Builds via the Concierge

In production, you do not run `pnpm build` manually. The system uses a **Build Concierge** that watches the `/home/t8k/state/` directory for triggers.

### How it works

The `t8k-build-watcher.path` unit detects any file modification in the state directory and launches `t8k-concierge.sh`. To trigger a build, create a CSV-formatted file.

### Example 1: Main Site (Single or Multi-tenant)

Use this if you are updating the primary project located at `/home/t8k/src/my-tractstack`.

```bash
# Run this as any user with write access to /home/t8k/state/
echo "type=main,tenant=default,command=build" > /home/t8k/state/main_build.csv
```

### Example 2: Dedicated Instance

Use this if you have installed a separate site via the `--dedicated SITE_ID` flag. This will trigger a build for the project located at `/home/t8k/sites/SITE_ID/src/my-tractstack`.

```bash
# Replace 'mytenant' with your actual SITE_ID
echo "type=dedicated,site=mytenant,command=build" > /home/t8k/state/dedicated_build.csv
```

### Manual Trigger

If you need to run the build immediately and watch the output for errors, you can bypass the watcher and run the concierge directly as the `t8k` user:

```bash
sudo -u t8k /home/t8k/scripts/t8k-concierge.sh
```

---

## 3. Initial CMS Login

TractStack initializes with a default administrative account for immediate configuration:

- **URL**: `/storykeep`
- **User**: `admin`
- **Password**: `password`

**Immediate Action**: Navigate to the "Advanced" or "Users" section to change the admin password and generate a new `JWT_SECRET` in your `env.json`.

---

_Next: Configure your environment specifics in [Environment Variables](/configuration/environment-variables/)._
