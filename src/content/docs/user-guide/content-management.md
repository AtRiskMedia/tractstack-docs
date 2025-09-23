---
title: Content Management
description: Managing pages, media, and content organization in StoryKeep
---

StoryKeep's content management system provides tools for creating and organizing your website content through the Content section of the dashboard.

## Content Browser

### Web Pages Tab

The main content browser displays your site's pages in a visual interface.

**Page display:**

- Thumbnail previews using open graph images where available
- Page titles and basic information
- Click any page to edit directly

**Sorting options:**

- **Most Active**: Pages with recent visitor activity (if "Sort by Most Active" toggle is enabled)
- Default chronological listing

### Page Actions

**Available actions per page:**

- **Edit**: Access the page editor
- **View analytics**: Page-specific engagement data

## Manage Content Tab

The Manage Content section organizes different content types:

### Content Types

**Images:**

- Site-wide registry of uploaded images
- Media file management

**Menus:**

- Create custom navigation menus
- Configure menu structure and links

**Resources:**

- Custom content types like itineraries or recommended readings widgets
- Dynamic content elements

**Tract Stacks:**

- Configure how site analytics are gathered

**Magic Path Beliefs:**

- Define how visitors can engage dynamically with content
- Configure belief-driven content revelation

## Content Creation

### Creating New Content

From the Manage Content section, you can create:

- **Menu**: Navigation structures
- **Resource**: Dynamic content components
- **Tract Stack**: Analytics configurations
- **Web Page (Story Fragment)**: Standard web pages
- **Context Page**: Supporting information pages

### Story Fragments (Web Pages)

Story fragments are the main web pages of your site:

- Each has a `slug` which becomes its URL: `/slug`
- Contains multiple panes (content sections)
- Supports belief-driven content visibility

### Context Pages

Special pages for additional background information:

- URL pattern: `/context/slug`
- Used for detailed explanations, legal text, or supporting information
- Can be linked from anywhere without interrupting main user flow

## Pane Management

Pages are built from panes (content sections):

- **Text sections**: Rich text content
- **Interactive elements**: Belief widgets, buttons, forms
- **Media**: Images and other assets
- **Custom components**: Code hooks for specialized functionality

### Belief-Driven Visibility

Panes can be configured with visibility rules:

- **Held Beliefs**: Show content when visitor has specific beliefs
- **Withheld Beliefs**: Hide content when visitor has specific beliefs
- **Default visibility**: Always shown to all visitors

## Media Management

### Image Upload and Organization

- Upload images through the Images section
- Images are stored in the media directory
- Support for common web formats (JPG, PNG, GIF, SVG)

### File Storage

**Development**: `~/t8k/t8k-go-server/config/default/media/`
**Production**: `/home/t8k/t8k-go-server/config/default/media/`

## Analytics Integration

### Content Analytics

- Track engagement at page and pane level
- Monitor which content sections get most attention
- View visitor interaction patterns
- Export analytics data as needed

### Event Tracking

TractStack automatically tracks:

- `PAGEVIEWED`: Page loads
- `ENTERED`: Visitor reaches content section
- `READ`: Extended engagement with content
- `GLOSSED`: Brief content viewing
- `CLICKED`: Element interactions
- `WATCHED`: Media engagement

## Lead Management

### Lead Collection

- Download lead data as CSV from Analytics dashboard
- Includes email addresses and engagement history
- Integration capabilities with email marketing tools

### Visitor Classification

- **Anonymous Visitors**: First-time or unknown visitors
- **Known Leads**: Returning visitors with stored preferences
- **Total Leads**: Registered email addresses collected

---

_Content management in StoryKeep focuses on the core functionality available in the actual system, emphasizing belief-driven content and analytics integration._
