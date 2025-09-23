---
title: Branding
description: Configure your site's visual identity and brand settings
---

The Branding section in StoryKeep allows you to configure your site's visual identity, upload brand assets, and customize the overall appearance and settings.

## Accessing Branding Configuration

Navigate to the **Branding** section in the StoryKeep dashboard to configure your site's visual identity and basic settings.

## Brand Assets

### Logo Configuration

**Logo upload and management:**

- Upload your primary logo file
- Supported formats: SVG (recommended), PNG, JPG
- Used in site header and navigation

**Wordmark configuration:**

- Upload wordmark/text logo variant
- Wordmark display modes:
  - `default`: Shows both logo and wordmark
  - `logo`: Shows only logo
  - `wordmark`: Shows only wordmark

### Favicon

- Upload favicon for browser tabs
- 32x32 pixel icon recommended
- Displays in browser tabs and bookmarks

### Social Images

- Upload default social sharing image
- Used for open graph and social media previews
- Recommended size: 1200x630 pixels

## Site Configuration

### Basic Settings

**Site information:**

- **Site name**: Primary website title
- **Site description**: Brief description for SEO and social sharing
- **Home page slug**: URL slug for homepage (e.g., "hello" creates `/hello`)
- **Site URL**: Full domain URL (e.g., `https://yourdomain.com`)

### SEO Settings

**Meta configuration:**

- Default meta descriptions for pages
- Open graph settings for social sharing
- Basic SEO optimization settings

## Brand Colors

Configure color schemes for your site's visual appearance:

- **Primary colors**: Main brand colors used throughout the site
- **Secondary colors**: Accent and supporting colors
- **Theme variations**: Light and dark mode color options

## Social Links

Configure social media and contact links:

- Platform-specific profile URLs
- Contact information display
- Social media integration settings

## Site Initialization

### Initial Setup Process

During first-time setup, the Branding section handles:

1. **Site initialization**: `SITE_INIT` flag configuration
2. **Basic brand asset upload**: Logo, favicon, social images
3. **Core site settings**: Name, description, homepage configuration
4. **Theme selection**: Initial color and visual preferences

### Branding Workflow

**Recommended setup order:**

1. Upload logo and brand assets
2. Configure site name and description
3. Set homepage slug and site URL
4. Choose color scheme and themes
5. Add social media links
6. Test appearance across different pages

## Asset Management

### Media Storage

Brand assets are stored in the media directory:

- **Development**: `~/t8k/t8k-go-server/config/default/media/`
- **Production**: `/home/t8k/t8k-go-server/config/default/media/`

### File Organization

Brand assets follow specific naming conventions:

- `logo.svg` or `logo.png`: Primary logo file
- `wordmark.svg` or `wordmark.png`: Text/wordmark version
- `favicon.ico` or `favicon.png`: Browser icon
- `og-image.jpg` or `og-image.png`: Social sharing image

## Configuration Storage

### Brand Configuration File

Settings are stored in `brand.json`:

- **Development**: `~/t8k/t8k-go-server/config/default/brand.json`
- **Production**: `/home/t8k/t8k-go-server/config/default/brand.json`

### Environment Integration

Brand settings integrate with:

- Site-wide configuration in `env.json`
- Frontend display through template system
- SEO meta data generation
- Social media sharing optimization

## Multi-Tenant Branding

### Tenant-Specific Branding

For multi-tenant installations:

- Each tenant has separate branding configuration
- Isolated brand asset storage per tenant
- Independent color schemes and logos
- Subdomain-specific branding

### Global vs Tenant Settings

- **Global**: Default branding for main domain
- **Tenant**: Custom branding for subdomains
- **Inheritance**: Tenants can inherit or override global settings

## Responsive Design

### Asset Optimization

Brand assets automatically adapt for:

- **Desktop displays**: Full-resolution assets
- **Mobile devices**: Optimized sizing and loading
- **High-DPI screens**: Retina-ready asset delivery
- **Different orientations**: Portrait and landscape optimization

### Logo Display

Logo and wordmark display adapts based on:

- Screen size and available space
- Navigation context (header, footer, mobile menu)
- Theme settings (light/dark mode)
- User preferences and accessibility needs

## Integration with Content

### Header and Navigation

Brand assets appear in:

- **Site header**: Logo and wordmark display
- **Navigation menus**: Brand identity integration
- **Mobile interface**: Responsive brand presentation

### Page Templates

Branding affects:

- **Page layouts**: Color scheme application
- **Typography**: Brand-consistent text styling
- **Interactive elements**: Button and link styling
- **Content presentation**: Overall visual cohesion

---

_Proper branding configuration creates a cohesive visual identity across your TractStack site. Brand settings integrate seamlessly with content and provide consistent user experience._
