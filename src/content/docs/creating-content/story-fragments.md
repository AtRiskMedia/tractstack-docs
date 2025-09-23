---
title: Story Fragments
description: Creating and managing web pages in TractStack
---

Story fragments are the main web pages of your TractStack site. Unlike traditional static pages, story fragments can adapt and reveal content based on visitor interactions and declared beliefs.

## Understanding Story Fragments

### Core Concept

Think of each webpage not as a self-contained unit, but as a **story fragment** - a piece of a larger narrative that visitors will encounter in their own unique sequence. Unlike traditional linear storytelling, your website's corpus is more like a dynamic collection of interconnected moments, each fragment holding the potential to spark interest and lead to deeper exploration.

### URL Structure

A story fragment has a `slug` which becomes its URL: `/slug`. This is important for the analytics out-of-the-box experience. When building your TractStack, give each story fragment a descriptive and meaningful `slug`.

## Creating Story Fragments

### Basic Creation Process

1. **Access creation**: Navigate to Content section → "Create New" → "Web Page (Story Fragment)"

2. **Basic information**:
   - **Title**: Page headline and browser title
   - **Slug**: URL-friendly identifier (auto-generated from title, but editable)
   - **Description**: Brief page description for SEO

3. **Content structure**: Add and organize panes (content sections)

4. **Publishing**: Save as draft or publish immediately

### Page Structure

Story fragments are built from **panes** - individual content sections that can:

- Contain different types of content (text, images, interactive elements)
- Be shown or hidden based on visitor beliefs
- Have individual analytics tracking
- Trigger personalization rules

## Content Panes

### Pane Types

**Text panes**: Rich text content with formatting options
**Image panes**: Media content with responsive sizing
**Interactive panes**: Belief widgets, buttons, forms
**Custom panes**: Code hooks for specialized functionality

### Pane Organization

- **Visual editor**: Drag-and-drop pane arrangement
- **Nested structures**: Complex layouts and content organization
- **Responsive preview**: See how content appears on different devices

## Belief-Driven Content

### Visibility Rules

Panes can be configured with belief-based visibility:

**Held Beliefs (Show Conditions)**:

- `UseCase=Developer` → Shows developer-specific content
- `Interest=BELIEVES_YES` → Reveals detailed information
- `Experience=Advanced` → Displays technical content

**Withheld Beliefs (Hide Conditions)**:

- `Experience=Beginner` → Hides advanced content
- `Budget=Limited` → Hides premium features

### Progressive Disclosure

Story fragments enable **progressive disclosure** where:

1. Visitors see default content initially
2. Content reveals based on declared preferences
3. Personalized journey unfolds without page refreshes
4. Experience becomes more relevant over time

## Analytics Integration

### Automatic Tracking

Every story fragment automatically tracks:

- `PAGEVIEWED`: When visitor loads the page
- `ENTERED`: When visitor reaches specific panes
- `READ`: Extended engagement with content sections
- `CLICKED`: Interactions with elements
- Belief widget interactions

### Performance Metrics

**Page-level analytics**:

- Total page views
- Unique visitors
- Average time on page
- Bounce rate

**Pane-level analytics**:

- Section engagement rates
- Content completion rates
- Interaction patterns

## SEO and Social Sharing

### Meta Data

Each story fragment includes:

- **Title tag**: Browser and search engine title
- **Meta description**: Search result snippet
- **Open graph**: Social media sharing optimization
- **Schema markup**: Structured data for search engines

### Social Image Configuration

- Upload custom social sharing images
- Automatic generation from page content
- Platform-specific optimization (Twitter, Facebook, LinkedIn)

## Content Strategy

### Planning Story Fragments

**Consider the user journey**:

- What brings visitors to this page?
- What beliefs might they declare here?
- Where should they go next?
- What actions do you want them to take?

**Content organization**:

- Start with core information visible to everyone
- Add belief-driven content for personalization
- Include clear calls-to-action
- Provide paths to related content

### Belief Widget Integration

**Strategic placement**:

- Early in content to enable personalization
- Natural points in user journey
- Clear value proposition for sharing preferences

**Widget types available**:

- **Belief Widget**: Dropdown scales (Yes/No, Agree/Disagree, Likert)
- **Toggle Belief Widget**: Simple binary choices
- **Identify As Widget**: Persona-based selection

## Mobile Optimization

### Responsive Design

Story fragments automatically adapt for:

- **Mobile devices**: Touch-optimized interface
- **Tablet displays**: Medium-screen optimization
- **Desktop**: Full-featured experience
- **Various orientations**: Portrait and landscape

### Performance Considerations

- **Image optimization**: Automatic compression and format selection
- **Content prioritization**: Critical content loads first
- **Interaction optimization**: Touch-friendly belief widgets

## Content Relationships

### Linking Strategy

**Internal linking**:

- Link to related story fragments
- Reference context pages for detailed information
- Create content series and collections

**Navigation integration**:

- Include in main site navigation
- Create contextual navigation paths
- Implement breadcrumb trails

### Content Collections

- **Series**: Sequential story fragments
- **Topics**: Thematically related content
- **User journeys**: Belief-driven content paths

## Publishing and Workflow

### Publishing States

**Draft**: Work in progress, not visible to visitors
**Published**: Live on website and accessible via URL
**Archived**: Removed from active site but preserved

### Content Updates

- **Live editing**: Changes appear immediately on published pages
- **Preview mode**: Test content before publishing
- **Revision tracking**: See change history

### Team Collaboration

- **Role-based editing**: Admin and Editor access levels
- **Concurrent editing**: Multiple team members can work simultaneously
- **Content review**: Collaborative editing and approval process

---

_Story fragments form the foundation of your TractStack site's adaptive content strategy. Each fragment should serve both individual visitor needs and contribute to the overall narrative journey._
