---
title: Menus & Navigation
description: Creating and managing site navigation menus
---

TractStack provides flexible menu creation and navigation management through the Content section of StoryKeep. Menus help organize your site structure and guide visitors through your content.

## Understanding TractStack Menus

### Menu System Overview

Menus in TractStack are custom content types that can be created and managed independently of page structure. They consist of menu links with configurable properties and can be assigned to different locations in your site.

### Menu Components

**Menu Links**: Individual navigation items with:

- **Name**: Display text for the link
- **Description**: Additional context or explanation
- **Featured**: Highlighting for important menu items
- **ActionLisp**: Navigation behavior definition

**Menu Structure**:

- **ID**: Unique identifier for the menu
- **Title**: Menu name for management purposes
- **Theme**: Visual styling for the menu
- **Options Payload**: Array of menu links

## Creating Menus

### Basic Menu Creation

1. **Access menu creation**: Navigate to Content → Manage Content → "Create New" → "Menu"

2. **Menu configuration**:
   - **Title**: Descriptive name for menu management
   - **Theme**: Visual styling theme for the menu
   - **Menu Links**: Add individual navigation items

3. **Link configuration**: For each menu item:
   - **Name**: Text that appears in navigation
   - **Description**: Hover text or additional context
   - **Featured**: Mark important items for special styling
   - **ActionLisp**: Define where the link navigates

### ActionLisp Navigation

ActionLisp format defines navigation behavior:

**Story fragment navigation**:

```
(goto (storyfragment "slug"))
```

**Context page navigation**:

```
(goto (context "slug"))
```

**External URL**:

```
(goto (url "https://example.com"))
```

## Menu Placement and Integration

### Header Navigation

Menus can be integrated into the site header for primary navigation:

- **Main navigation**: Primary site menu
- **Utility navigation**: Secondary links (login, contact, etc.)
- **Mobile navigation**: Responsive menu for mobile devices

### Footer Navigation

Footer menus provide:

- **Site map**: Complete navigation overview
- **Legal links**: Privacy, terms, contact information
- **Social links**: Social media and external connections

### Contextual Menus

**In-content navigation**:

- **Section menus**: Navigation within content areas
- **Related links**: Contextual navigation suggestions
- **Call-to-action menus**: Action-oriented navigation

## Menu Themes and Styling

### Theme Configuration

Menu themes control visual presentation:

- **Color schemes**: Match site branding
- **Typography**: Font and text styling
- **Layout**: Horizontal, vertical, or custom arrangements
- **Interactive states**: Hover, active, and focus styling

### Responsive Behavior

Menus automatically adapt for different screen sizes:

- **Desktop**: Full menu display
- **Tablet**: Condensed navigation
- **Mobile**: Hamburger menu or drawer navigation

## Advanced Menu Features

### Featured Items

Mark menu items as featured for:

- **Visual emphasis**: Special styling or highlighting
- **Priority placement**: Prominent positioning in navigation
- **Call-to-action treatment**: Button-style presentation

### Dynamic Menu Content

Menus can integrate with:

- **Content management**: Automatically include new pages
- **User context**: Show different items based on authentication
- **Belief system**: Adaptive navigation based on visitor preferences

## Menu Analytics

### Navigation Tracking

TractStack automatically tracks menu usage:

- **Click events**: Which menu items are used most
- **Navigation patterns**: How visitors move through your site
- **Drop-off points**: Where visitors leave navigation flows

### Performance Insights

**Menu effectiveness metrics**:

- **Usage frequency**: Most and least used menu items
- **Conversion impact**: How navigation affects site goals
- **User journey analysis**: Navigation's role in visitor paths

## Multi-Level Navigation

### Hierarchical Menus

While TractStack menus are primarily flat structures, you can create hierarchical navigation through:

- **Menu grouping**: Organize related items together
- **Nested ActionLisp**: Complex navigation behaviors
- **Contextual menus**: Different menus for different sections

### Breadcrumb Navigation

Implement breadcrumb trails using:

- **Page hierarchy**: Logical content organization
- **Menu integration**: Breadcrumbs based on menu structure
- **User journey**: Show navigation path taken

## Menu Management

### Content Organization

**Menu planning**:

- **Information architecture**: Logical site organization
- **User needs**: Navigation that matches visitor goals
- **Content strategy**: Menus that support content discovery

**Menu maintenance**:

- **Regular review**: Update menus when content changes
- **Link validation**: Ensure all menu links work correctly
- **Performance monitoring**: Track menu effectiveness

### Team Workflow

**Role-based menu management**:

- **Editors**: Can create and modify menus
- **Admins**: Full menu management capabilities
- **Content strategy**: Collaborative menu planning

## Integration with Content

### Story Fragment Integration

Menus work seamlessly with story fragments:

- **Page navigation**: Link to any story fragment
- **Context integration**: Include context pages in menus
- **Dynamic updates**: Menus reflect current content structure

### Belief-Driven Navigation

**Adaptive menus**:

- **Personalized navigation**: Show relevant items based on visitor beliefs
- **Progressive disclosure**: Reveal navigation options as visitors engage
- **Custom journeys**: Navigation paths based on declared preferences

## Technical Implementation

### Menu Storage

Menus are stored as content nodes with:

- **Database integration**: Persistent menu configuration
- **Cache optimization**: Fast menu loading
- **Update synchronization**: Immediate menu changes

### Template Integration

Menus integrate with Astro templates:

- **Component rendering**: Menu components in page layouts
- **Theme application**: Consistent styling across site
- **Responsive rendering**: Device-appropriate menu display

---

_Effective menu design creates intuitive navigation that helps visitors find content and achieve their goals. Regular analysis of menu performance helps optimize the user experience._
