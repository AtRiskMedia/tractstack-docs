---
title: Installation
description: Self-hosted recipes on Debian
---

Tract Stack is free (as in kitten). If you're able to provide an adequate home, it's yours - made available under the source-available [Functional Source License](/start/license) (only restriction is no re-selling Tract Stack as-a-service.)

Commercial use is [encouraged](/start/license/). If you are an agency looking to build with Tract Stack, [let's chat](mailto:hello@tractstack.com).

If you're up to the challenge we'll provide you with everything required to install and self-host your own Tract Stack!

:::caution[This is a technical guide]
If you want Tract Stack as a service, visit [Pricing](https://tractstack.com/pricing?utm_source=docs&utm_medium=www&utm_campaign=starlight) for managed hosting and kitty "hoteling" options.
:::

## Quick install (for preview)

For non-production use you don't even need Docker. It will work in `dev` mode just fine via a local-first Turso database.

Pre-requirements: Node 20, pnpm 9+

```
pnpm create astro@latest my-tractstack-site --template AtRiskMedia/tractstack-starter/template --typescript strict --install --package-manager pnpm

cd my-tractstack-site
pnpm dev
```

## Production install (recommended)

While Tract Stack can be run as a standalone in a Docker for production installs we offer this guide based on [Debian Linux](https://www.debian.org/) running Nginx with PHP 8.2 FPM, Docker.

For a production install you will need a [Turso](https://turso.tech) database url with read &amp; write token. They offer a generous free tier which will be sufficient for most sites. Although we recommend at least `hobby` tier for no cold starts and no database archival.

### Production Install

Tract Stack should run on any VPS with 1-2GB ram. This guide and its scripts are based on Debian 12. If you port elsewhere, please let us know!

#### Prepare Debian

As root user...
```
apt update
apt install -y nginx curl php8.2-fpm php8.2 php-cli php-zip unzip php8.2-curl rsync backblaze-b2 gnupg2 ca-certificates python3 python3-pip python3.11-venv sudo git vim docker.io
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
corepack enable
COREPACK_ENABLE_STRICT=0 corepack prepare pnpm@latest --activate
systemctl enable nginx
systemctl start nginx
systemctl enable php8.2-fpm
systemctl start php8.2-fpm
systemctl enable docker
systemctl start docker
```

If you're using backblaze for backups...
```
sudo apt install pipx
pipx install b2
```

Then install [Composer](https://getcomposer.org/download/) *best to check their site for latest version
```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'.PHP_EOL; } else { echo 'Installer corrupt'.PHP_EOL; unlink('composer-setup.php'); exit(1); }"
php composer-setup.php
php -r "unlink('composer-setup.php');"
mv composer.phar /usr/local/bin/composer
```

#### Create the t8k user

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

And set-up certbot in a virtual environment.
```
su - t8k
python3 -m venv ~/certbot_venv
source ~/certbot_venv/bin/activate
pip install --upgrade pip
pip install certbot certbot-dns-cloudflare
deactivate
```

#### Prepare your environment

Log-in or become the `t8k` user.

**Set your BASE_URL in ~/tractstack-installer/scripts/tractstack-install.sh**

There is an optional USE_BACKUPS flag to enable. This depends on [Backblack](https://backblaze.com). Create a bucket and a ~/.env.b2 file:
```
B2_BUCKET_NAME=
B2_APPLICATION_KEY_ID=
B2_APPLICATION_KEY=
```

**Domain configuration (if using Cloudflare)**


The install script will use a ./cert.sh and look for your [dns_cloudflare_api_token](https://certbot-dns-cloudflare.readthedocs.io/en/stable/) in /root/.secrets/certbot/cloudflare.ini. If present it will attempt to generate SSL certs for the domains being used. Remember you can use a CNAME for a public-facing branded URL.

:::note
Nginx will be configured for you by the install script. Two sub-domains are configured for each Tract Stack during the install process:

- `hello.yourdomain.com` will serve the frontend; this could be a CNAME pointing to `yourdomain.com` -- if you update your primary domain, be sure to set the new domain in your Story Keep
- `storykeep.hello.yourdomain.com` will serve the backend services (e.g. to trigger a rebuild when required)
  :::

#### Run the install script

Use the `tractstack-install.sh` script to get a new instance of Tract Stack (e.g. 1 website). A new user account and `/home/user` folder will be generated through this process. (If you are running multiple websites, simply repeat the process with a different user name.)

```bash
cd ~/tractstack-installer/scripts
sudo ./tractstack-install.sh hello
```

*Carefully decide upon a subdomain for this Tract Stack.* It will also be used as username on Debian. It **must** be short and text only, no spaces. We'll use `hello` as a default user name/sub-domain. Once your website is live, you can set-up the subdomains a CNAME records pointing to the primary domain.

#### Complete the installation

The install script will take 1-2 minutes.

All the instructions (and credentials) will be shown in the terminal. You will need to copy and paste these! Be sure to store them in a secure place afterwards.

#### Enter your Story Keep

Visit `https://hello.yourdomain.com/storykeep/login?force=true` (update with your domain; use the link provided in the terminal) and log-in with the account you made in the prior step. On first install you will not be asked for the password, and you will be prompted to provide your own secure password(s) during site initialization.
