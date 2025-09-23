---
title: Context Pages
description: Creating supporting information pages
---

Context pages are special types of web pages in TractStack designed to provide additional background information, detailed explanations, or supporting content without interrupting the main user flow.

## Understanding Context Pages

### Purpose and Use Cases

A context page is a special kind of web page in your TractStack site. Whenever you need to provide some additional context and background information, use a context page. You can link to it from anywhere, and visitors keen on that added detail have it one-click away, while others taking a more cursory glance won't get bogged down in the details.

**Common use cases:**

- **Legal information**: Terms of service, privacy policies, disclaimers
- **Detailed explanations**: Technical specifications, methodology details
- **Supporting documentation**: Additional resources, references, citations
- **Background information**: Company history, team bios, detailed process explanations
- **Fine print**: Warranty information, detailed terms and conditions

### URL Structure

Each context page has a slug and its URI follows the pattern: `/context/slug`

This consistent URL structure helps visitors understand they're accessing supporting information rather than main content.

## Creating Context Pages

### Creation Process

1. **Access creation**: Navigate to Content section → "Create New" → "Context Page"

2. **Basic configuration**:
   - **Title**: Page headline and purpose
   - **Slug**: URL identifier (becomes `/context/your-slug`)
   - **Description**: Brief explanation of the context page purpose

3. **Content development**: Add detailed information using the same pane system as story fragments

4. **Publishing**: Make available for linking from main content

### Content Structure

Context pages use the same pane-based content system as story fragments:

- **Text panes**: Detailed explanations and information
- **Image panes**: Supporting diagrams, charts, or visuals
- **Interactive elements**: Forms or widgets where appropriate
- **Custom components**: Specialized content via code hooks

## Design Considerations

### Content Organization

**Clear hierarchy**: Organize information with logical headings and sections
**Scannable format**: Use bullet points, numbered lists, and clear formatting
**Comprehensive coverage**: Include all relevant details since this is the "deep dive" content
**Cross-references**: Link to related context pages or main content

### User Experience

**Easy navigation**: Clear path back to referring content
**Print-friendly**: Often users want to save or print legal/reference information
**Mobile optimization**: Ensure readability on all devices
**Search functionality**: Make content discoverable through site search

## Integration with Main Content

### Linking Strategy

**From story fragments**: Link to context pages when mentioning topics that need elaboration
**In navigation**: Include important context pages in footer or utility navigation
**Contextual placement**: Link at the point where additional detail becomes relevant

**Link examples:**

- "See our [privacy policy](/context/privacy-policy) for details"
- "Read about our [methodology](/context/research-methodology)"
- "View [terms and conditions](/context/terms)"

### Content Flow

Context pages support the main content strategy by:

- **Reducing cognitive load**: Keep main pages focused, move details to context
- **Improving conversion**: Don't overwhelm visitors with too much information upfront
- **Building trust**: Provide transparency through accessible detailed information
- **Supporting compliance**: Meet legal requirements without cluttering main content

## SEO and Discoverability

### Search Engine Optimization

**Meta data**: Include descriptive titles and meta descriptions
**Internal linking**: Link from relevant main content pages
**Sitemap inclusion**: Ensure context pages appear in site navigation structure
**Structured data**: Use appropriate schema markup for legal/policy pages

### Content Indexing

Context pages are fully indexed and searchable:

- **Site search**: Included in internal search results
- **External search**: Discoverable through search engines
- **Analytics tracking**: Monitor engagement and usage patterns

## Analytics and Performance

### Usage Tracking

Context pages automatically track:

- **Page views**: How often context information is accessed
- **Referral sources**: Which main content drives context page visits
- **Engagement depth**: How thoroughly visitors read context information
- **Exit patterns**: Whether visitors return to main content or leave

### Performance Insights

**Popular context**: Identify most-accessed supporting information
**Content gaps**: Find areas where context pages are needed but missing
**User journeys**: Understand how context pages fit into overall site navigation
**Conversion impact**: See how context page visits affect main site goals

## Maintenance and Updates

### Content Lifecycle

**Regular review**: Update context pages when main content or policies change
**Legal compliance**: Ensure legal pages remain current and accurate
**Content audits**: Remove outdated or no longer relevant context information
**Version control**: Track changes to important policy or legal documents

### Quality Assurance

**Link validation**: Ensure all links to and from context pages work correctly
**Content accuracy**: Verify information remains current and correct
**Mobile testing**: Confirm context pages work well on all devices
**Load performance**: Monitor page speed and optimization

## Multi-Tenant Considerations

### Tenant-Specific Context

For multi-tenant installations:

- **Shared context**: Common legal or policy information
- **Tenant-specific**: Customized context pages per tenant/subdomain
- **Inheritance**: Option to inherit global context or create custom versions

### Content Management

- **Global templates**: Standard context page templates
- **Customization options**: Tenant-specific modifications
- **Consistency**: Maintain brand and legal consistency across tenants

## Best Practices

### Content Strategy

**User-first approach**: Write context pages from the visitor's perspective
**Plain language**: Use clear, understandable language even for complex topics
**Logical organization**: Structure information in a way that makes sense to readers
**Actionable information**: Include next steps or contact information where relevant

### Technical Implementation

**Performance optimization**: Keep context pages fast-loading despite detailed content
**Accessibility**: Ensure context pages meet accessibility standards
**Mobile-first**: Design for mobile reading and interaction
**Print consideration**: Ensure content prints well when needed

---

_Context pages provide essential supporting information while keeping main content focused and engaging. They're crucial for transparency, compliance, and comprehensive user support._
