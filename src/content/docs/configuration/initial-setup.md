---
title: Initial Setup
description: First-time configuration after installation
---

After installing TractStack, you'll need to complete the initial setup to configure your site's basic settings and create your first admin account.

## First Access

### Development Setup

Visit **http://localhost:4321/storykeep** to access the setup wizard.

### Production Setup

Visit **https://yourdomain.com/storykeep** to begin configuration.

## Setup Wizard

The initial setup wizard guides you through essential configuration:

### 1. Admin Account Creation

**Create your admin credentials:**

- **Username**: Choose a secure username (avoid "admin")
- **Password**: Use a strong password (12+ characters)
- **Confirm Password**: Re-enter to verify

**Security recommendations:**

- Use a password manager
- Enable two-factor authentication (if available)
- Choose a non-obvious username

### 2. Site Information

**Basic site details:**

- **Site Name**: Your website's title
- **Site Description**: Brief description for SEO
- **Home Page Slug**: URL slug for your homepage (default: "hello")
- **Site URL**: Full URL of your site (e.g., https://yourdomain.com)

### 3. Initial Content

**Choose your starting content:**

- **Demo Content**: Includes example pages showing TractStack features
- **Blank Site**: Start with minimal content
- **Import**: Upload existing content (if available)

**Recommendation**: Choose demo content to learn TractStack features, then customize.

## Post-Setup Configuration

### Access StoryKeep Dashboard

After setup, you'll see the StoryKeep dashboard with five main sections:

- **Analytics**: Real-time engagement metrics
- **Content**: Manage pages and content
- **Branding**: Configure visual identity
- **Advanced**: System settings (Admin only)
- **Activity**: Live visitor tracking

### First Configuration Steps

#### 1. Configure Branding

Navigate to **Branding** section:

**Upload brand assets:**

- **Logo**: SVG format recommended (PNG/JPG acceptable)
- **Favicon**: 32x32 pixel icon for browser tabs
- **Social Image**: 1200x630 pixel image for social sharing

**Set brand colors:**

- **Primary Color**: Main brand color
- **Secondary Color**: Accent color
- **Background Colors**: Light and dark theme options

**Configure typography:**

- **Font Selection**: Choose from web-safe fonts
- **Heading Styles**: Set typography hierarchy
- **Body Text**: Reading-optimized font settings

#### 2. Basic Site Settings

In **Advanced** section (Admin only):

**Site configuration:**

- **Time Zone**: Set your local timezone
- **Language**: Primary language for content
- **Contact Email**: For system notifications
- **Analytics**: Google Analytics integration (optional)

**SEO settings:**

- **Meta Description**: Default description for pages
- **Keywords**: Primary site keywords
- **Social Media**: Links to your profiles

#### 3. Create Your First Page

Navigate to **Content** section:

1. **Click "Create New"** → **Web Page (Story Fragment)**
2. **Set basic details:**
   - **Title**: Page title
   - **Slug**: URL-friendly identifier
   - **Description**: Brief page description
3. **Add content panes:**
   - **Text sections**: Rich text editor
   - **Images**: Upload and manage media
   - **Interactive elements**: Belief widgets, buttons
4. **Configure visibility:**
   - **Default**: Always visible
   - **Belief-driven**: Show/hide based on visitor preferences
5. **Save and publish**

## Environment Configuration

### Development Environment

**Configuration files:**

- **Backend**: `~/t8k/src/tractstack-go/.env`
- **Frontend**: `~/t8k/src/my-tractstack/.env`
- **Site config**: `~/t8k/t8k-go-server/config/default/env.json`

**Key settings to verify:**

```bash
# Backend (.env)
GIN_MODE=debug
PORT=10000
DB_PATH=../../t8k-go-server/db/default/tractstack.db

# Frontend (.env)
PUBLIC_GO_BACKEND=http://localhost:10000
PUBLIC_TENANTID=default
```

### Production Environment

**Configuration file**: `/home/t8k/t8k-go-server/config/default/env.json`

**Essential settings:**

```json
{
  "SITE_URL": "https://yourdomain.com",
  "SITE_INIT": true,
  "HOME_SLUG": "your-homepage-slug",
  "ADMIN_PASSWORD_HASH": "...",
  "EDITOR_PASSWORD_HASH": "...",
  "JWT_SECRET": "...",
  "AES_KEY": "..."
}
```

**Security settings:**

- **JWT_SECRET**: Secure random string for authentication
- **AES_KEY**: 32-character encryption key
- **Password hashes**: Automatically generated during setup

## Database Initialization

### Default Database Structure

TractStack creates these essential tables:

- **story_fragments**: Web pages and content
- **pane_nodes**: Content sections within pages
- **file_nodes**: Media and assets
- **menu_nodes**: Navigation menus
- **sessions**: User sessions and beliefs
- **impressions**: Call-to-action notifications

### Initial Data

**Demo content includes:**

- **Sample pages**: Showcase TractStack features
- **Belief examples**: Interactive widgets demonstration
- **Analytics data**: Example engagement patterns
- **Sample media**: Placeholder images and assets

## Media Directory Setup

### Development Media Path

`~/t8k/t8k-go-server/config/default/media/`

### Production Media Path

`/home/t8k/t8k-go-server/config/default/media/`

**Directory structure:**

```
media/
├── images/           # Uploaded images
├── css/             # Generated stylesheets
└── uploads/         # User uploads
```

**Permissions (production):**

```bash
sudo chown -R t8k:t8k /home/t8k/t8k-go-server/config/default/media/
sudo chmod -R 755 /home/t8k/t8k-go-server/config/default/media/
```

## Verification Steps

### 1. Test Site Access

**Frontend verification:**

- Visit your site URL
- Verify pages load correctly
- Test navigation between pages
- Check responsive design on mobile

**StoryKeep access:**

- Login with admin credentials
- Navigate through all dashboard sections
- Create a test page
- Upload a test image

### 2. Test Adaptive Features

**Belief system verification:**

- Find pages with belief widgets
- Interact with widgets (dropdowns, buttons)
- Verify content reveals/hides appropriately
- Check analytics tracking

### 3. Performance Check

**Load testing:**

- Test page load speeds
- Verify image optimization
- Check mobile performance
- Test with multiple browsers

## Common Initial Issues

### Login Problems

**Can't access StoryKeep:**

```bash
# Reset admin password (development)
cd ~/t8k/src/tractstack-go
./tractstack-go --reset-admin

# Check configuration
cat ~/t8k/t8k-go-server/config/default/env.json
```

### Media Upload Issues

**File permissions:**

```bash
# Development
chmod -R 755 ~/t8k/t8k-go-server/config/default/media/

# Production
sudo chown -R t8k:t8k /home/t8k/t8k-go-server/config/default/media/
```

### Site Not Loading

**Check services:**

```bash
# Development
# Ensure both terminals are running Go backend and Astro frontend

# Production
sudo systemctl status tractstack-go nginx
sudo -u t8k pm2 status
```

## Next Steps

After completing initial setup:

1. **Explore demo content** to understand TractStack features
2. **Customize branding** to match your organization
3. **Create your content strategy** using story fragments and panes
4. **Learn about Magic Paths** for adaptive personalization
5. **Set up analytics** to track visitor engagement

---

_Initial setup provides the foundation for your TractStack site. Take time to explore the features before customizing extensively._
