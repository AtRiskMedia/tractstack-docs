---
title: Impressions System
description: Contextual call-to-action notifications based on content engagement
---

Impressions are dynamic call-to-action notifications that appear when visitors view specific content on your pages. They provide an additional channel to capture attention and guide visitor engagement based on the content they're actually reading.

## How Impressions Work

### Triggering Logic

Impressions are attached to specific **panes** (content sections) on your pages. When a visitor views a pane that has an associated impression, the impression becomes "visible" and can be displayed to the user.

**Activation process:**

1. **Visitor scrolls** to or views a specific content pane
2. **System detects** pane viewing event
3. **Associated impression** becomes active
4. **Notification appears** in header or overlay
5. **Analytics track** impression visibility and interactions

### Multiple Impressions

Multiple impressions can be active simultaneously if a visitor has seen multiple triggering panes on the same page or across different pages during their session.

## Display Modes

### Header Icon Mode

When impressions are active, a small animated notification icon appears in the header menu:

**Visual indicators:**

- **Bouncing animation** to draw attention
- **Number badge** showing count of active impressions
- **Red background** for visibility
- **Click to expand** functionality

### Expanded Overlay Mode

When the header icon is clicked, impressions display as an overlay in the bottom-right corner:

**Overlay features:**

- **Full impression content** with title, body text, and call-to-action button
- **Close button** (X) in the top-right corner for dismissal
- **Navigation dots** when multiple impressions are active
- **Auto-cycling** every 5 seconds through multiple impressions
- **Manual navigation** using indicator dots

## Content Structure

Each impression contains structured content elements:

### Core Components

**Title**: Headline for the impression that captures attention
**Body text**: Descriptive content explaining the offer, message, or call-to-action
**Button text**: Call-to-action link text that encourages interaction
**Action**: Navigation destination defined in ActionLisp format

### ActionLisp Integration

Impression actions use ActionLisp format for navigation:

**Story fragment navigation:**

```
(goto (storyfragment "slug"))
```

**Context page navigation:**

```
(goto (context "slug"))
```

**External URL:**

```
(goto (url "https://example.com"))
```

The system parses and validates action syntax before execution, ensuring reliable navigation behavior.

## Creating and Managing Impressions

### Impression Creation

Impressions are created and managed through the StoryKeep content management system:

1. **Associate with panes**: Link impressions to specific content sections
2. **Define trigger logic**: Set which panes must be viewed to activate
3. **Create compelling content**: Write effective titles, descriptions, and call-to-action text
4. **Set navigation actions**: Define where the impression button should lead

### Content Strategy

**Effective impression content:**

- **Relevant messaging**: Relate to the content being viewed
- **Clear value proposition**: Explain what visitors get by clicking
- **Action-oriented language**: Use compelling call-to-action text
- **Contextual timing**: Appear at appropriate moments in content consumption

## User Experience Design

### Non-Intrusive Approach

**Respectful engagement:**

- **Icon mode**: Allows visitors to choose when to engage
- **Easy dismissal**: Clear close option in expanded mode
- **No forced interactions**: Visitors can ignore impressions completely
- **Progressive disclosure**: Information available when wanted

### Mobile-Friendly Design

**Responsive implementation:**

- **Touch-optimized**: Interface works well on mobile devices
- **Appropriate sizing**: Readable text and touch-friendly buttons
- **Performance optimized**: Fast loading and smooth animations
- **Cross-device consistency**: Same experience across platforms

## Analytics and Tracking

### Automatic Event Tracking

When a visitor clicks an impression button, the system automatically:

- **Sends analytics event** with type `Impression` and value `CLICKED`
- **Records belief data** including `beliefId` (impression ID) and `paneId`
- **Tracks session information** for visitor behavior analysis
- **Integrates with site analytics** for comprehensive reporting

### Performance Metrics

**Key impression metrics:**

- **View rates**: How often impressions become visible to visitors
- **Click rates**: Percentage of visitors who engage with impressions
- **Conversion tracking**: Follow-through on impression actions
- **Content correlation**: Which panes trigger the most valuable impressions

### Optimization Insights

**Data-driven improvements:**

- **A/B testing**: Compare different impression content and placement
- **Timing optimization**: Find optimal moments for impression display
- **Content effectiveness**: Identify most compelling messaging
- **Navigation analysis**: Track where impressions lead visitors

## Best Practices

### Content Strategy

**Impression content guidelines:**

- **Keep it relevant**: Impressions should relate to viewed content
- **Clear value exchange**: Explain why visitors should click
- **Compelling calls-to-action**: Use action-oriented button text
- **Contextual messaging**: Adapt content to visitor journey stage

### Timing and Frequency

**Strategic implementation:**

- **Strategic pane attachment**: Connect to high-value content sections
- **Avoid overwhelm**: Don't activate too many impressions simultaneously
- **Test engagement patterns**: Monitor analytics to optimize impression performance
- **Respect visitor intent**: Allow easy dismissal and non-participation

### Technical Considerations

**Performance optimization:**

- **Lightweight implementation**: Minimal impact on page load times
- **Efficient tracking**: Streamlined analytics integration
- **Responsive design**: Consistent experience across devices
- **Accessibility**: Screen reader and keyboard navigation support

## Integration with Belief System

### Belief-Aware Impressions

Impressions can integrate with the belief system for enhanced targeting:

- **Belief-triggered impressions**: Different impressions for different visitor personas
- **Progressive messaging**: Build on previously captured beliefs
- **Contextual relevance**: Show impressions based on declared preferences

### Analytics Enhancement

**Belief-enhanced tracking:**

- **Visitor segmentation**: Analyze impression performance by belief categories
- **Personalization effectiveness**: Compare generic vs targeted impressions
- **Journey optimization**: Understand how beliefs affect impression engagement

---

_Impressions provide a powerful way to create contextual, non-disruptive calls-to-action that respond intelligently to visitor behavior and content engagement patterns while respecting user agency and choice._
