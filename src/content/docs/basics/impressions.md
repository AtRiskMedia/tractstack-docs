---
title: Impressions
description: Customize the user journey
---

Impressions are dynamic call-to-action notifications that appear when visitors view specific content on your pages. Think of them as an additional channel to capture attention and guide visitor engagement based on the content they're actually reading.

## How Impressions Work

### Triggering Logic

- Impressions are attached to specific **panes** (content sections) on your pages
- When a visitor views a pane that has an associated impression, the impression becomes "visible"
- Multiple impressions can be active simultaneously if a visitor has seen multiple triggering panes

### Display Modes

#### Header Icon Mode

When impressions are active, a small animated notification icon appears in the header menu:

- **Bouncing indicator** with the number of active impressions
- **Red background** to draw attention
- Click the icon to expand and view the impressions

#### Expanded Overlay Mode

When clicked, impressions display as an overlay in the bottom-right corner:

- **Full impression content** with title, body text, and call-to-action button
- **Close button** (X) in the top-right corner
- **Navigation dots** when multiple impressions are active (cycles every 5 seconds)

### Content Structure

Each impression contains:

- **Title** - Headline for the impression
- **Body text** - Descriptive content explaining the offer or message
- **Button text** - Call-to-action link text
- **Action** - Where the button navigates (defined in ActionLisp format)

### Multiple Impressions

When multiple impressions are active:

- They cycle automatically every **5 seconds** in the expanded view
- Users can manually navigate between them using indicator dots
- Each impression is tracked separately for analytics

### Analytics Tracking

When a visitor clicks an impression button:

- Sends analytics event with type `Impression` and value `CLICKED`
- Records the `beliefId` (impression ID) and `paneId` for tracking
- Uses session-based tracking for visitor behavior analysis

### ActionLisp Integration

- Impression actions use ActionLisp format: `(goto (storyfragment "slug"))`
- Supports navigation to different pages or sections
- Parses and validates action syntax before execution

## Creating Impressions

Impressions are created and managed through the StoryKeep content management system:

1. **Attach to Panes** - Associate impressions with specific content sections
2. **Define Trigger Logic** - Set which panes must be viewed to activate
3. **Create Content** - Write compelling titles, descriptions, and call-to-action text
4. **Set Actions** - Define where the impression button should navigate

## Best Practices

### Content Strategy

- **Keep it relevant** - Impressions should relate to the content being viewed
- **Clear value proposition** - Explain what visitors get by clicking
- **Compelling call-to-action** - Use action-oriented button text

### Timing and Frequency

- **Strategic placement** - Attach to high-value content sections
- **Avoid overwhelm** - Don't activate too many impressions simultaneously
- **Test engagement** - Monitor analytics to optimize impression performance

### User Experience

- **Non-intrusive** - Icon mode allows visitors to choose when to engage
- **Easy dismissal** - Clear close option in expanded mode
- **Mobile-friendly** - Responsive design works across all devices

## Analytics and Optimization

Track impression performance through:

- **View rates** - How often impressions become visible
- **Click rates** - Percentage of visitors who engage with impressions
- **Conversion tracking** - Follow-through on impression actions
- **Content correlation** - Which panes trigger the most valuable impressions

Impressions provide a powerful way to create contextual, non-disruptive calls-to-action that respond intelligently to visitor behavior and content engagement patterns.

---

_Configure impressions through your StoryKeep dashboard to start capturing visitor attention at the right moments._
