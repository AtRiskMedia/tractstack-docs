---
title: Analytics & Tracking
description: Built-in engagement analytics and third-party integrations
---

TractStack includes comprehensive analytics that automatically track visitor engagement and content performance. The system provides privacy-first analytics while supporting integration with external platforms like Google Analytics.

## Built-in Analytics System

### Automatic Event Tracking

TractStack automatically tracks engagement events without requiring additional configuration:

**Core tracking events:**

- `PAGEVIEWED`: Visitor loads a page
- `ENTERED`: Visitor scrolls to a content section
- `READ`: Visitor spends time reading content (dwell time tracking)
- `GLOSSED`: Visitor briefly scans content
- `CLICKED`: Visitor interacts with buttons, links, or widgets
- `WATCHED`: Visitor engages with video or media content
- `Impression`: Visitor interacts with call-to-action notifications

### Analytics Data Structure

**Event properties:**

- **Event type**: Category of interaction
- **Timestamp**: When the event occurred
- **Session ID**: Visitor session identifier
- **Story fragment ID**: Page where event occurred
- **Pane ID**: Specific content section (where applicable)
- **Belief context**: Associated visitor beliefs

### Real-Time Tracking

**Live analytics features:**

- **Active visitor count**: Current site visitors
- **Real-time events**: Live interaction tracking
- **Geographic data**: Visitor location insights
- **Device information**: Platform and browser analytics

## Privacy-First Approach

### Zero-Party Data Focus

**Data collection principles:**

- **Voluntary sharing**: Visitors choose what information to provide
- **Session-based tracking**: Temporary visitor identification
- **No behavioral inference**: Direct preference declaration instead of guessing
- **Transparent usage**: Clear indication of how data is used

### GDPR and Privacy Compliance

**Privacy protection features:**

- **No personal data collection** without explicit consent
- **Session anonymization**: Visitor tracking without identity storage
- **Data minimization**: Only collect necessary information
- **Right to deletion**: Visitor data removal capabilities

## StoryKeep Analytics Dashboard

### Engagement Metrics

**Primary dashboard metrics:**

- **Total Events**: All tracked interactions across the site
- **Anonymous Visitors**: First-time or unidentified visitors
- **Known Leads**: Returning visitors with saved preferences
- **Total Leads**: Email addresses collected through forms

### Time Period Analysis

**Available reporting periods:**

- **Past 24 hours**: Real-time daily patterns
- **Past 7 days**: Weekly trends and engagement patterns
- **Past 28 days**: Monthly overview and growth tracking

### Content Performance

**Page-level analytics:**

- **Story fragment performance**: Individual page metrics
- **Pane engagement**: Content section interaction rates
- **Belief widget effectiveness**: Preference declaration tracking
- **Conversion funnel analysis**: Visitor journey through content

## Lead Generation Analytics

### Visitor Classification

**Visitor categories:**

- **Anonymous visitors**: No identifying information provided
- **Known leads**: Email provided or preferences saved with consent
- **Returning visitors**: Multiple session tracking
- **Engaged users**: High interaction levels

### Lead Data Export

**CSV export capabilities:**

- **Contact information**: Email addresses and engagement history
- **Interaction patterns**: Content consumption and preference data
- **Belief profiles**: Declared preferences and persona information
- **Conversion tracking**: Goal completion and journey analysis

## Google Analytics Integration

### Setup Configuration

**Integration process:**

1. **Obtain Google Analytics measurement ID** (G-XXXXXXXXXX format)
2. **Add to StoryKeep Advanced Settings** (Admin only)
3. **Configure event forwarding** for TractStack events
4. **Set up custom dimensions** for belief-based segmentation

### Event Forwarding

**Automatic event sending:**

- TractStack events automatically forward to Google Analytics
- **Custom event names**: TractStack events mapped to GA4 events
- **Enhanced data**: Belief context and content section information
- **Goal tracking**: Conversion events sent to Google Analytics

### Custom Dimensions

**Belief-based segmentation:**

- **Visitor personas**: Segment by declared identity (Developer, Manager, etc.)
- **Preference categories**: Group by belief declarations
- **Engagement depth**: Track interaction levels
- **Content personalization**: Measure adaptive content effectiveness

## Belief System Analytics

### Preference Declaration Tracking

**Belief analytics:**

- **Widget interaction rates**: How often visitors engage with belief widgets
- **Preference distribution**: Most common belief declarations
- **Belief combinations**: Popular visitor profile patterns
- **Conversion correlation**: How beliefs affect goal completion

### Personalization Effectiveness

**Adaptive content performance:**

- **Content revelation impact**: Engagement before/after personalization
- **Belief-specific content**: Performance by visitor segment
- **Progressive disclosure**: Effectiveness of content unfolding
- **Journey optimization**: Belief-driven path analysis

## Technical Implementation

### Event Collection

**Client-side tracking:**

- **JavaScript event listeners**: Automatic interaction detection
- **Scroll tracking**: Content section visibility monitoring
- **Time-based events**: Dwell time and reading duration
- **Belief integration**: Preference declaration tracking

### Data Storage

**Analytics data storage:**

- **Session-based**: Temporary tracking during visits
- **Aggregated reporting**: Statistical analysis without personal data
- **Lead database**: Consented contact information storage
- **Export capabilities**: CSV downloads for external analysis

### Performance Optimization

**Efficient tracking:**

- **Minimal overhead**: Lightweight analytics implementation
- **Batched requests**: Efficient data transmission
- **Local processing**: Client-side event aggregation
- **Cached reports**: Fast dashboard loading

## Advanced Analytics Features

### Cohort Analysis

**Visitor cohorts:**

- **Acquisition date**: Performance by first visit time
- **Belief profiles**: Behavior by declared preferences
- **Engagement levels**: High vs low interaction visitors
- **Retention patterns**: Return visit frequency and duration

### Content Optimization

**Performance insights:**

- **High-performing content**: Most engaging sections
- **Conversion drivers**: Content leading to desired actions
- **Optimization opportunities**: Low engagement areas needing improvement
- **A/B testing data**: Content variation effectiveness

### Custom Reporting

**Flexible analytics:**

- **Date range selection**: Custom time periods for analysis
- **Event filtering**: Specific interaction types
- **Segmentation**: Visitor groups and behavior patterns
- **Export options**: Data download for external analysis

## Analytics Best Practices

### Data Interpretation

**Key performance indicators:**

- **Engagement depth**: Average events per session
- **Content effectiveness**: Read completion rates
- **Conversion rates**: Goal achievement percentages
- **Belief adoption**: Preference declaration frequency

### Privacy Considerations

**Ethical analytics:**

- **Consent management**: Clear opt-in/opt-out options
- **Data transparency**: Explain what data is collected and why
- **Minimal collection**: Only gather necessary information
- **Regular audits**: Review data collection practices

### Performance Monitoring

**System optimization:**

- **Load impact**: Analytics effect on site performance
- **Data accuracy**: Validate tracking implementation
- **Report reliability**: Ensure consistent data collection
- **Privacy compliance**: Regular privacy policy review

---

_TractStack's analytics provide comprehensive insights into visitor behavior while maintaining privacy and enabling data-driven optimization of content and user experience._
