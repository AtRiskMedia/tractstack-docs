---
title: Resend Email
description: Send transactional and marketing emails through Resend
---

TractStack integrates with Resend for sending transactional and marketing emails. Resend provides a developer-friendly email API with high deliverability rates and detailed analytics.

## Setup Process

### 1. Create Resend Account

Sign up for Resend:

1. Visit [Resend](https://resend.com/)
2. Create your account
3. Navigate to API Keys section
4. Create a new API key with appropriate permissions
5. Copy the API key (starts with `re_`)

### 2. Configure in StoryKeep

Add your API key through StoryKeep:

1. **Access Advanced Settings** (Admin only)
2. **Navigate to integrations** section
3. **Enter Resend API Key** in the provided field
4. **Save configuration**

The API key will be stored securely in your site configuration.

## Email Capabilities

### Transactional Emails

**Automated system emails:**

- **Welcome messages**: New user registration confirmations
- **Password resets**: Secure password change requests
- **Form submissions**: Contact form and inquiry confirmations
- **System notifications**: Important account or system updates

### Marketing Emails

**Promotional and engagement emails:**

- **Newsletter campaigns**: Regular content updates and announcements
- **Lead nurturing**: Automated email sequences based on visitor behavior
- **Event notifications**: Webinar, product launch, or update announcements
- **Re-engagement campaigns**: Win back inactive subscribers

## Integration with TractStack Features

### Lead Generation Integration

**Automatic email capture:**

- **Form submissions**: Automatically add contacts to email lists
- **Belief-based segmentation**: Segment contacts based on declared preferences
- **Lead scoring**: Enhanced lead data with engagement history
- **Progressive profiling**: Build detailed contact profiles over time

### Analytics-Driven Campaigns

**Data-informed email marketing:**

- **Engagement data**: Use TractStack analytics to inform email strategy
- **Content preferences**: Send content based on declared interests
- **Behavioral triggers**: Email campaigns based on site interaction patterns
- **Conversion tracking**: Track email impact on site goals

## Email Templates and Personalization

### Dynamic Content

**Belief-driven personalization:**

- **Persona-specific content**: Different email content for different visitor types
- **Interest-based messaging**: Content tailored to declared preferences
- **Experience-level adaptation**: Beginner vs advanced content in emails
- **Dynamic subject lines**: Personalized based on recipient data

### Template Management

**Email template organization:**

- **Transactional templates**: System-generated email formats
- **Marketing templates**: Campaign and newsletter designs
- **Responsive design**: Mobile-optimized email layouts
- **Brand consistency**: Templates matching site branding

## API Integration

### Backend Implementation

TractStack includes backend infrastructure for Resend integration:

- **API wrapper**: Simplified interface for sending emails
- **Error handling**: Robust error management and retry logic
- **Rate limiting**: Respect Resend API limits
- **Logging**: Track email sending success and failures

### Email Sending

**Programmatic email dispatch:**

```javascript
// Example email sending through TractStack
const emailData = {
  to: "recipient@example.com",
  subject: "Welcome to TractStack",
  template: "welcome",
  personalizations: {
    name: "John Doe",
    useCase: "Developer",
  },
};
```

## List Management

### Contact Segmentation

**Organize contacts by:**

- **Belief categories**: Group by declared preferences
- **Engagement level**: Active, inactive, and highly engaged segments
- **Content interests**: Topic-based subscription preferences
- **Lead stage**: Awareness, consideration, decision phases

### Subscription Management

**Contact preferences:**

- **Opt-in management**: Clear consent and subscription confirmation
- **Preference centers**: Allow contacts to choose email types and frequency
- **Unsubscribe handling**: Easy opt-out with preference retention
- **Re-engagement**: Win-back campaigns for inactive subscribers

## Deliverability and Performance

### Email Deliverability

**High delivery rates with Resend:**

- **Domain authentication**: SPF, DKIM, and DMARC setup
- **Reputation management**: Shared high-reputation sending infrastructure
- **Bounce handling**: Automatic bounce and complaint management
- **List hygiene**: Tools for maintaining clean contact lists

### Analytics and Tracking

**Email performance metrics:**

- **Delivery rates**: Successful email delivery statistics
- **Open rates**: Email open and engagement tracking
- **Click-through rates**: Link click and website traffic from emails
- **Conversion tracking**: Email impact on site goals and conversions

## Compliance and Privacy

### Email Compliance

**Regulatory compliance:**

- **CAN-SPAM**: US anti-spam law compliance
- **GDPR**: European privacy regulation adherence
- **CASL**: Canadian anti-spam legislation compliance
- **Unsubscribe requirements**: Legal unsubscribe option in all emails

### Privacy Protection

**Data handling best practices:**

- **Consent management**: Clear opt-in and permission tracking
- **Data minimization**: Only collect necessary contact information
- **Secure storage**: Encrypted contact data storage
- **Right to deletion**: Honor contact deletion requests

## Automation and Workflows

### Automated Email Sequences

**Trigger-based campaigns:**

- **Welcome series**: Multi-email onboarding sequences
- **Belief-based nurturing**: Automated emails based on declared preferences
- **Engagement triggers**: Emails based on site interaction patterns
- **Conversion sequences**: Automated sales and conversion workflows

### Workflow Integration

**TractStack trigger events:**

- **Form submissions**: Automatic email responses
- **Belief declarations**: Triggered email sequences
- **Goal completions**: Congratulations and next-step emails
- **Inactivity triggers**: Re-engagement campaign initiation

## Troubleshooting

### Common Issues

**API key problems:**

- **Invalid key**: Verify API key format and permissions
- **Rate limits**: Monitor for API usage limit exceeded errors
- **Domain verification**: Ensure sending domain is verified in Resend

**Email delivery issues:**

- **Spam filters**: Check email content and sending practices
- **Bounce management**: Monitor bounce rates and list quality
- **Authentication**: Verify SPF, DKIM, and DMARC records
- **Reputation**: Monitor sender reputation and delivery metrics

### Best Practices

**Email marketing optimization:**

- **List quality**: Maintain clean, engaged contact lists
- **Content relevance**: Send targeted, valuable content
- **Frequency management**: Avoid over-emailing subscribers
- **Testing**: A/B test subject lines, content, and send times

---

_Resend integration provides reliable email delivery with TractStack's belief-driven personalization, enabling targeted email campaigns that respect visitor preferences and privacy._
