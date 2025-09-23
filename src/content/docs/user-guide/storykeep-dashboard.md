---
title: StoryKeep Dashboard
description: Complete guide to the StoryKeep content management system
---

StoryKeep is TractStack's built-in content management system, providing everything you need to create, manage, and analyze your adaptive website content.

## Accessing StoryKeep

### Login Process

**Development**: Visit `http://localhost:4321/storykeep`
**Production**: Visit `https://yourdomain.com/storykeep`

**Default credentials** (change immediately):

- Username: `admin`
- Password: `password`

### Dashboard Overview

The StoryKeep dashboard contains five main sections accessible via the top navigation:

- **Analytics**: Real-time engagement metrics and visitor insights
- **Content**: Browse and manage all web pages and content
- **Branding**: Configure site visual identity and settings
- **Advanced**: System configuration and administrative tools (Admin only)
- **Activity**: Live visitor activity and engagement tracking

## Analytics Section

### Real-Time Engagement Analytics

Every section of every web page automatically becomes a touchpoint for engagement tracking without additional configuration.

**Available time periods:**

- Past 24 hours
- Past 7 days
- Past 28 days

**Key metrics tracked:**

- **Events**: Total engagement interactions
- **Anonymous Visitors**: First-time or unknown visitors
- **Known Leads**: Returning visitors with stored preferences
- **Total Leads**: Registered email addresses collected

### Event Types

StoryKeep automatically tracks these engagement events:

- `PAGEVIEWED`: User loaded the page
- `ENTERED`: User arrived at content section
- `READ`: User spent time reading content
- `GLOSSED`: User briefly viewed content
- `CLICKED`: User interacted with elements
- `WATCHED`: User engaged with media content
- `Impression`: User interacted with call-to-action notifications

### Analytics Dashboard Features

**Visual engagement maps:**

- Heat maps showing most-engaged content sections
- Time-based engagement patterns
- Visitor journey tracking

**Performance metrics:**

- Average time on page
- Bounce rates by content section
- Conversion tracking through belief interactions

**Lead management:**

- Export lead data as CSV
- Integration with email marketing tools
- Contact information and engagement history

## Content Section

### Browse Web Pages Tab

The main content browser provides:

**Visual page gallery:**

- Thumbnail previews using open graph images
- Quick access to edit any page
- Page status indicators (published, draft, archived)

**Sorting options:**

- **Most Active**: Pages with recent visitor activity
- **Alphabetical**: By page title
- **Recent**: Last modified pages
- **Popular**: Highest engagement pages

**Page management:**

- Click any page to edit content directly
- Duplicate pages for templating
- Archive or delete unused pages

### Manage Content Tab

Organize special content types and site-wide elements:

**Content types:**

- **Images**: Site-wide media registry and management
- **Menus**: Custom navigation menu creation
- **Resources**: Dynamic content types (itineraries, recommendations, etc.)
- **Tract Stacks**: Analytics configuration and tracking setup

**Magic Path Beliefs:**

- Define visitor interaction patterns
- Configure belief-driven content revelation
- Manage personalization rules

### Content Creation

**Create new content types:**

- **Menu**: Custom navigation structures
- **Resource**: Reusable content components
- **Tract Stack**: Analytics tracking configurations
- **Web Page (Story Fragment)**: Standard web pages
- **Context Page**: Supporting information pages

## Branding Section

### Brand Colors

**Color scheme configuration:**

- **Primary colors**: Main brand colors
- **Secondary colors**: Accent and supporting colors
- **Interactive elements**: Button and link colors
- **Background options**: Light and dark theme support

### Brand Assets

**Logo management:**

- **Logo upload**: SVG preferred, PNG/JPG supported
- **Favicon**: 32x32 pixel browser tab icon
- **Social images**: Open graph and Twitter card images

**Asset optimization:**

- Automatic format conversion
- Size optimization for web delivery
- Multiple format support (WebP, PNG, JPG)

### Site Configuration

**Basic settings:**

- **Site title**: Primary site name
- **Tagline**: Brief site description
- **Home page**: Default landing page configuration
- **Navigation**: Menu structure and organization

### Social Links

**Social media integration:**

- Platform-specific profile links
- Social sharing configuration
- Contact information display

### SEO Settings

**Search optimization:**

- **Meta descriptions**: Default and page-specific
- **Open graph**: Social media sharing optimization
- **Schema markup**: Structured data configuration
- **Sitemap**: Automatic generation and submission

## Advanced Section (Admin Only)

### Authentication Configuration

**User management:**

- **Role assignments**: Admin and Editor permissions
- **Password policies**: Security requirements
- **Session settings**: Timeout and security options
- **Multi-factor authentication**: Enhanced security setup

### API Configuration

**External service integrations:**

- **Assembly AI**: AI-powered content analysis
- **Resend**: Transactional email service
- **Google Analytics**: Additional analytics platform
- **Custom APIs**: Third-party service connections

### System Settings

**Performance optimization:**

- **Caching configuration**: Content and database caching
- **Image optimization**: Automatic format conversion
- **CSS/JS minification**: Performance improvements

**Database management:**

- **Backup configuration**: Automated backup schedules
- **Database maintenance**: Optimization and cleanup
- **Storage monitoring**: Usage tracking and alerts

## Activity Section

### Live Visitor Monitoring

**Real-time activity:**

- **Active sessions**: Current visitors on site
- **Page views**: Live traffic monitoring
- **Engagement events**: Real-time interaction tracking
- **Geographic data**: Visitor location insights

**Visitor journey tracking:**

- **Entry points**: How visitors arrive
- **Page progression**: Navigation patterns
- **Exit points**: Where visitors leave
- **Time on site**: Engagement duration

### Heat Map Analytics

**Content engagement visualization:**

- **Section-level**: Which content areas get most attention
- **Time-based**: Engagement patterns throughout day/week
- **Device-specific**: Mobile vs desktop interaction patterns

## User Roles and Permissions

### Editor Role

**Content permissions:**

- Create and edit web pages
- Manage images and media
- Configure basic branding
- View analytics and activity

**Restricted access:**

- Cannot access Advanced settings
- Cannot manage user accounts
- Cannot modify system configuration

### Admin Role

**Full system access:**

- All Editor permissions
- User management capabilities
- System configuration access
- Advanced analytics and reporting
- API and integration management

## Workflow Best Practices

### Content Creation Workflow

1. **Plan content structure** using story fragments and panes
2. **Create supporting materials** (images, menus, resources)
3. **Build adaptive content** with belief-driven personalization
4. **Test engagement** using preview and analytics
5. **Optimize based on data** from visitor interactions

### Team Collaboration

**Editor workflow:**

- Draft content creation
- Collaborative editing
- Review and approval process

**Admin oversight:**

- User management
- System monitoring
- Performance optimization
- Security management

### Analytics-Driven Optimization

**Regular review schedule:**

- **Daily**: Check activity and engagement
- **Weekly**: Review analytics trends
- **Monthly**: Analyze lead generation and conversion
- **Quarterly**: Comprehensive performance review

## Mobile and Responsive Management

### Mobile-Optimized Interface

StoryKeep dashboard is fully responsive:

- **Touch-friendly**: Optimized for tablet and phone management
- **Adaptive layout**: Interface adjusts to screen size
- **Fast loading**: Optimized for mobile connections

### Content Preview

**Multi-device preview:**

- **Desktop**: Full-featured view
- **Tablet**: Medium-screen optimization
- **Mobile**: Touch-optimized layout
- **Adaptive content**: How belief-driven content appears

## Integration Capabilities

### Export and Import

**Content export:**

- **CSV exports**: Analytics and lead data
- **Content backup**: Full site content export
- **Media archives**: Bulk media download

**Import capabilities:**

- **Content migration**: From other platforms
- **Media uploads**: Bulk image and file uploads
- **Configuration**: Settings import/export

### API Access

**Programmatic access:**

- **Content API**: Headless content management
- **Analytics API**: Data export and integration
- **Belief API**: Personalization data access

---

_StoryKeep provides comprehensive content management while maintaining simplicity for everyday use. The dashboard grows with your needs, from simple content editing to sophisticated analytics and personalization._
