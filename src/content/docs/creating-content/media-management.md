---
title: Media Management
description: Upload, organize, and manage images and files
---

TractStack provides comprehensive media management through the Images section in StoryKeep, allowing you to upload, organize, and manage all media files used across your site.

## Media Storage System

### File Storage Location

**Development**: `~/t8k/t8k-go-server/config/default/media/`
**Production**: `/home/t8k/t8k-go-server/config/default/media/`

### Directory Structure

```
media/
├── images/           # Uploaded images
├── css/             # Generated stylesheets
└── uploads/         # User uploads
```

## Supported File Types

### Image Formats

**Primary formats**:

- **JPG/JPEG**: Photographic images, complex color images
- **PNG**: Images with transparency, simple graphics
- **GIF**: Animated images, simple graphics
- **SVG**: Vector graphics, logos, icons
- **WebP**: Modern format for optimized web delivery

### File Size Considerations

**Upload limits**:

- Maximum file size determined by system configuration
- Automatic optimization for web delivery
- Format conversion for performance

## Image Upload Process

### Basic Upload

1. **Access media management**: Navigate to Content → Manage Content → Images
2. **Upload interface**: Use drag-and-drop or file browser
3. **File processing**: Automatic optimization and format handling
4. **Media library**: Images appear in site-wide registry

### Bulk Upload

- **Multiple file selection**: Upload several images simultaneously
- **Progress tracking**: Monitor upload status for each file
- **Error handling**: Clear feedback for failed uploads

## Image Optimization

### Automatic Processing

TractStack automatically optimizes uploaded images:

- **Compression**: Reduce file sizes without visible quality loss
- **Format selection**: Choose optimal format for each image
- **Responsive sizing**: Generate multiple sizes for different screen densities

### Web Performance

**Optimization features**:

- **Next-gen formats**: WebP and AVIF when supported
- **Lazy loading**: Images load as needed during page scroll
- **Responsive delivery**: Appropriate image size for device
- **CDN integration**: Fast delivery through content networks

## Media Organization

### Site-Wide Registry

The Images section provides:

- **Complete media library**: All uploaded images and files
- **Usage tracking**: See where images are used across the site
- **File information**: Size, format, upload date, dimensions

### File Management

**Available actions**:

- **Preview**: View images within the interface
- **Download**: Retrieve original files
- **Replace**: Update files while maintaining links
- **Delete**: Remove unused media (with usage verification)

## Integration with Content

### Image Usage in Pages

**Pane integration**:

- **Image panes**: Dedicated image content sections
- **Inline images**: Images within text content
- **Background images**: Visual design elements
- **Social images**: Open graph and sharing images

### Responsive Image Delivery

**Automatic adaptation**:

- **Screen size**: Appropriate image dimensions
- **Device pixel density**: Retina and high-DPI display support
- **Connection speed**: Optimized delivery based on bandwidth
- **Format support**: Modern formats for compatible browsers

## Brand Asset Management

### Logo and Brand Images

**Special handling for brand assets**:

- **Logo files**: Primary brand identity images
- **Wordmark**: Text-based logo variants
- **Favicon**: Browser tab icons
- **Social images**: Default sharing images

### Asset Optimization

Brand assets receive special optimization:

- **SVG preservation**: Vector graphics maintain scalability
- **Multi-format delivery**: Fallbacks for older browsers
- **Size optimization**: Minimal file sizes for fast loading

## Media Analytics

### Usage Tracking

Monitor media performance:

- **View frequency**: How often images are displayed
- **Page association**: Which pages use specific images
- **Performance impact**: Loading time and user experience effects

### Storage Management

**File system monitoring**:

- **Storage usage**: Track total media storage consumption
- **File organization**: Identify unused or duplicate files
- **Cleanup suggestions**: Remove orphaned media files

## File Permissions and Security

### Development Environment

**File permissions**:

```bash
chmod -R 755 ~/t8k/t8k-go-server/config/default/media/
```

### Production Environment

**Secure file handling**:

```bash
sudo chown -R t8k:t8k /home/t8k/t8k-go-server/config/default/media/
sudo chmod -R 755 /home/t8k/t8k-go-server/config/default/media/
```

### Security Considerations

**File security measures**:

- **Type validation**: Only allow safe file formats
- **Size limits**: Prevent excessive file uploads
- **Access control**: Secure file serving
- **Malware scanning**: Protect against malicious uploads

## Multi-Tenant Media

### Tenant Isolation

For multi-tenant installations:

- **Separate storage**: Each tenant has isolated media directory
- **Access control**: Tenants can only access their own media
- **Storage quotas**: Configurable limits per tenant

### Shared Resources

**Global media assets**:

- **System images**: Shared brand and interface elements
- **Template assets**: Common design elements
- **Fallback images**: Default images when tenant assets unavailable

## Backup and Recovery

### Media Backup

**Backup strategies**:

- **Regular automated backups**: Scheduled media file backups
- **Version control**: Track changes to important brand assets
- **Disaster recovery**: Restore procedures for media loss

### File Recovery

**Recovery options**:

- **Individual file restore**: Recover specific lost images
- **Bulk restoration**: Restore entire media libraries
- **Version rollback**: Return to previous file versions

## Performance Optimization

### Delivery Optimization

**Content delivery strategies**:

- **CDN integration**: Global content distribution
- **Caching headers**: Browser and server-side caching
- **Compression**: Optimal file size reduction
- **Format serving**: Best format for each browser

### Load Performance

**Site speed optimization**:

- **Image lazy loading**: Load images as needed
- **Critical path optimization**: Prioritize above-fold images
- **Progressive loading**: Show low-quality images while high-quality loads

---

_Effective media management ensures fast-loading, visually appealing content while maintaining organized file systems and optimal performance across all devices._
