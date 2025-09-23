---
title: Google Analytics
description: Integrate Google Analytics with TractStack
---

TractStack can integrate with Google Analytics to send engagement events and provide additional analytics capabilities alongside the built-in analytics system.

## Setup Process

### 1. Obtain Google Analytics Measurement ID

Create a Google Analytics 4 (GA4) property:

1. Visit [Google Analytics](https://analytics.google.com/)
2. Create new account or use existing account
3. Set up GA4 property for your domain
4. Copy the Measurement ID (format: G-XXXXXXXXXX)

### 2. Configure in StoryKeep

Add your measurement ID through StoryKeep:

1. **Access Advanced Settings** (Admin only)
2. **Navigate to integrations** section
3. **Enter Google Analytics key** in the provided field
4. **Save configuration**

The measurement ID will be stored in your site configuration.

## Event Integration

### Automatic Event Forwarding

TractStack automatically forwards internal events to Google Analytics:

**Core events sent to GA:**

- **Page views**: When visitors load story fragments
- **Content engagement**: Reading, scrolling, and interaction events
- **Belief interactions**: Widget usage and preference declarations
- **Impression clicks**: Call-to-action notification interactions
- **Custom events**: Site-specific tracking events

### Event Mapping

**TractStack to GA4 event mapping:**

- `PAGEVIEWED` → `page_view`
- `CLICKED` → `click`
- `READ` → `engagement`
- `Impression` → `impression_click`
- Belief events → `belief_declaration`

## Enhanced Analytics

### Custom Dimensions

Set up custom dimensions in Google Analytics to track belief-based visitor segmentation:

**Recommended custom dimensions:**

- **Visitor Persona**: Track declared identity (Developer, Manager, etc.)
- **Engagement Level**: Anonymous vs Known Lead status
- **Belief Categories**: Preference declarations
- **Content Personalization**: Whether visitor sees personalized content

### Goal Tracking

**Configure goals in Google Analytics:**

- **Lead generation**: Email capture and form submissions
- **Engagement depth**: Reading completion and time on site
- **Belief completion**: Preference declaration frequency
- **Conversion events**: Business-specific goal completion

## Privacy Considerations

### Data Sharing

**What gets sent to Google Analytics:**

- **Page views and navigation**: Standard web analytics
- **Engagement events**: Content interaction without personal data
- **Belief categories**: Preference types without visitor identity
- **Goal completions**: Conversion events

**What is NOT sent:**

- **Personal information**: Email addresses or contact details
- **Session identifiers**: TractStack-specific session data
- **Detailed belief values**: Specific preference declarations
- **Individual visitor tracking**: Personal behavior patterns

### Compliance

**Privacy compliance considerations:**

- **Cookie consent**: Google Analytics requires consent in many jurisdictions
- **Data processing agreements**: Review Google's terms for your region
- **Visitor notification**: Inform visitors about Google Analytics usage
- **Opt-out options**: Provide mechanisms for visitors to decline tracking

## Configuration Options

### Advanced Settings

**Additional GA4 configuration:**

- **Enhanced measurement**: Automatic scroll, outbound clicks, site search
- **Conversion events**: Mark important events as conversions
- **Audience segments**: Create visitor segments based on behavior
- **Attribution modeling**: Track visitor journey across sessions

### Custom Event Tracking

**Send additional events to Google Analytics:**

```javascript
// Example custom event
gtag("event", "custom_action", {
  custom_parameter: "value",
  event_category: "engagement",
  event_label: "specific_action",
});
```

## Reporting and Analysis

### Google Analytics Reports

**Available GA4 reports:**

- **Real-time**: Live visitor activity
- **Acquisition**: How visitors find your site
- **Engagement**: Content performance and interaction
- **Conversions**: Goal completion and business outcomes

### TractStack-Specific Insights

**Enhanced reporting with TractStack integration:**

- **Belief-driven segmentation**: Visitor analysis by declared preferences
- **Content personalization impact**: Engagement before/after belief declaration
- **Adaptive content performance**: Effectiveness of personalized experiences
- **Lead generation analysis**: Path from anonymous to known visitor

## Troubleshooting

### Common Issues

**Events not appearing in GA:**

- **Verify measurement ID**: Ensure correct ID format (G-XXXXXXXXXX)
- **Check configuration**: Confirm settings saved in StoryKeep Advanced section
- **Real-time testing**: Use GA4 real-time reports to verify event delivery
- **Browser extensions**: Ad blockers may prevent GA tracking

**Data discrepancies:**

- **Different methodologies**: TractStack and GA may count events differently
- **Privacy settings**: Visitor privacy controls affect GA tracking
- **Bot filtering**: GA filters some automated traffic
- **Time zone differences**: Ensure consistent time zone settings

### Verification Steps

**Confirm integration is working:**

1. **Check real-time reports** in Google Analytics
2. **Trigger test events** on your site
3. **Verify event parameters** are being sent correctly
4. **Monitor for 24-48 hours** for full data flow

## Best Practices

### Data Strategy

**Effective GA integration:**

- **Define clear goals**: Set up meaningful conversion events
- **Segment visitors**: Use belief data for visitor analysis
- **Monitor performance**: Regular review of key metrics
- **Privacy compliance**: Respect visitor privacy preferences

### Analysis Approach

**Combine TractStack and GA data:**

- **Use TractStack**: For detailed belief and engagement analysis
- **Use Google Analytics**: For broader web analytics and acquisition data
- **Cross-reference insights**: Validate findings across both systems
- **Focus on actionable metrics**: Concentrate on data that drives decisions

---

_Google Analytics integration provides additional web analytics capabilities while TractStack's built-in analytics focus on belief-driven engagement and content personalization insights._
