---
title: Account Settings (Advanced)
description: In your Story Keep
---

All settings are managed from `/storykeep/settings` in your Tract Stack storykeep.

## Settings for tractstack-storykeep

### Shopify Settings

If enabled your products will be available under products/slug:

```
PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_*
PUBLIC_SHOPIFY_SHOP=*.myshopify.com
PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=*
```

### Backend API

Points to the "Concierge" running on the server. It handles events (analytics) and manages your Tract Stack.

```
PRIVATE_CONCIERGE_BASE_URL=https://storykeep.hello.tractstack.com/api/v1
PUBLIC_CONCIERGE_STYLES_URL=https://storykeep.hello.tractstack.com/api/styles
```

### Frontend

What's your custom URL for your website. Where are the images stored?

```
PUBLIC_SITE_URL=https://hello.tractstack.com
PUBLIC_IMAGE_URL=https://hello.tractstack.com
```

### Brand

Add your personal flare!

Fast travel requires Neo4j AuraDB

Open Demo mode allows anyone to "edit" (but not save changes). Likely you do _not_ want this.

Note: remember you'll use `/storykeep/settings` to update your Socials

```
PUBLIC_SOCIALS="github|https://github.com/AtRiskMedia,x|https://x.com/AtRiskMedia"
PUBLIC_SLOGAN=your slogan
PUBLIC_FOOTER=your slogan for the website footer
PUBLIC_DISABLE_FAST_TRAVEL=true
PUBLIC_USE_CUSTOM_FONTS=false
PUBLIC_THEME=light
PRIVATE_OPEN_DEMO=false
```

### Home page

Select which storyfragment to use as the front page.

Note: remember you'll use `/storykeep/settings` to select this

```
PUBLIC_HOME=home
```

### Header widget (optional)

This is an advanced feature that allows you to add a custom header to appear above the menu.

```
ENABLE_HEADER_WIDGET=false
HEADER_WIDGET_RESOURCE_CATEGORY=
```

### Turso database integration

Where is your data?

```
TURSO_DATABASE_URL=libsql://*.turso.io
TURSO_AUTH_TOKEN=
```

### Miscellaneous

```
PUBLIC_IMPRESSIONS_DELAY=22000
```

### Auth

PRIVATE_AUTH_SECRET=
PRIVATE_CONCIERGE_SECRET=

## Backend "Concierge" Settings

### Folder structure on the server

```
CONCIERGE_ROOT=/home/hello/srv/tractstack-concierge/
FRONT_ROOT=/home/adon/src/tractstack-storykeep/
WATCH_ROOT=/home/hello/watch/
```

### Database configuration

```
DB_HOST=localhost
DB_NAME=concierge_hello
DB_USER=t8k_hello
DB_PASSWORD=
```

### Neo4j AuraDB integration (optional)

```
NEO4J_URI=
NEO4J_USER=
NEO4J_SECRET=
NEO4J_ENABLED=
```

### Auth

```
SECRET_KEY=
CONCIERGE_SECRET=
```
