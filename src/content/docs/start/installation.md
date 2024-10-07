---
title: Installation
description: Self-hosted recipes on Debian
---

Tract Stack is a _full stack_ application. It includes an astro frontend to serve the web experience, a basic PHP backend "concierge" of sorts with a sprinkling of server config. This guide is based on [Debian Linux](https://www.debian.org/). If you're up to the challenge we'll provide you with everything required to install and self-host your own Tract Stack!

It is available under the source-available [Functional Source License](/start/license)

Commercial use is [encouraged](/start/license/). If you are an agency looking to build with Tract Stack, [let's chat](mailto:hello@tractstack.com).

:::caution[This is a technical guide]
If you want Tract Stack as a service, visit [Tract Stack](https://tractstack.com/#pricing?utm_source=docs&utm_medium=www&utm_campaign=starlight) for managed hosting options.
:::

## Prerequisites

Tract Stack can be self-hosted on [Debian Linux](https://www.debian.org/).

- Debian 12 server with sudo access and python-pip3 installed
- everything else can be installed via ansible playbooks and bash scripts! This includes `CSF`,`Nginx`,`PHP-fpm`,`MariaDB`,`docker`,`nodejs`,`composer`
- Cloudflare [API credentials](https://certbot-dns-cloudflare.readthedocs.io/en/stable/); note: this is for certbot to generate SSL certs and could be overridden / done manually

## Before Installation

Tract Stack should run on any VPS with 1-2GB ram. This guide and its scripts are based on Debian 12. No reason it couldn't be ported to other systems.

### Prepare the server

In `tractstack-installer` you'll find two ansible playbooks. You'll need to run both.

_Be sure_ to review the README, esp. about `/templates/*` where you'll set your API keys, SSH keys, MySQL pwd, etc.

If you are running these playbooks remotely, be sure to consult the README on how to 'first run' before your SSH keys are installed.

`build_server.yml` initializes the server:

- installs some dependencies and helpers: `vnstat`, `htop`, `rsync`, `zip`, `mutt`, `libwww-perl`, `locate`, `dnsutils`, `wget`, `curl`, `lnav`, `snapd`, `pwgen`, `vim`
- set-up [ConfigServer Security and Firewall](https://configserver.com/configserver-security-and-firewall/), [MariaDB](https://mariadb.org/), and [Certbot](https://certbot.eff.org/)

`build_server_t8k.yml` prepares the server for Tract Stack:

- installs [neovim](https://neovim.io/) (...btw), [git](https://www.git-scm.com/)
- installs [docker](https://www.docker.com/)
- activates [Nginx](https://nginx.org/) / [PHP-fpm](https://www.php.net/manual/en/install.fpm.php), [composer](https://getcomposer.org/), [nodejs](https://nodejs.org/) using playbooks maintained by [Jeff Geerling](https://github.com/geerlingguy)
- installs [yarn](https://yarnpkg.com/) and versioning via [corepack](https://yarnpkg.com/corepack)
- installs [astro](https://github.com/withastro/astro), [tailwindcss](https://tailwindcss.com/docs/installation)

Ensure that you've run **both** playbooks.

### Create the t8k user

Tract Stack installs itself in the `t8k` user `/home/t8k` folder.

There are two steps involved. First, create the user. _remember your password!_

```bash
sudo adduser t8k
sudo usermod -aG sudo t8k
```

Next, become the `t8k` user and get the Tract Stack installer:

```bash
su - t8k
git clone https://github.com/AtRiskMedia/tractstack-installer
```

## Installation

Log-in or become the `t8k` user.

:::danger
**TODO** **note for Adon** ... the `tractstack-install.sh` script is hard-coded to tractstack.com; but it's already dynamic for sub-domain (via ZZZZZ sed) so it _could_ be fully dynamic and reference the parent domain from `.env` - in the meantime if you need help override this, email us at [hello@tractstack.com](mailto:hello@tractstack.com).
:::

:::note
Two sub-domains are configured for each Tract Stack during the install process:

- `hello.yourdomain.com` will serve the frontend; this could be a CNAME pointing to `yourdomain.com` -- if you update your primary domain, be sure to set the new domain in your Story Keep
- `storykeep.hello.yourdomain.com` will serve the backend services
  :::

### Run the install script

Use the `tractstack-install.sh` script to get a new instance of Tract Stack (e.g. 1 website). A new user account and `/home/user` folder will be generated through this process. (If you are running multiple websites, simply repeat the process with a different user name.)

Carefully decide upon a subdomain for this Tract Stack. It will also be used as username on Debian. It **must** be short and text only, no spaces. We'll use `hello` as a default.

Once your website is live, you can set-up the subdomains a CNAME records pointing to the primary domain.

```bash
cd ~/tractstack-installer/scripts
sudo ./tractstack-install.sh hello
```

### Complete the installation

The install script will take 1-2 minutes. A lot happens. When it's finished you're ready to go!

All the instructions (and credentials) will be in the terminal. You will need to copy and paste these! Be sure to store them in a secure place afterwards.

### Enter your Story Keep

Visit `https://hello.yourdomain.com/storykeep/login?force=true` (update with your domain; use the link provided in the terminal) and log-in with the account you made in the prior step.
