---
title: Widget Types
description: Interactive belief capture widgets in TractStack
---

TractStack provides three types of interactive widgets for capturing visitor beliefs and preferences. Each widget type serves different use cases and interaction patterns.

## Belief Widget (Dropdown)

### Overview

The Belief Widget is a dropdown selection interface that captures visitor opinions, preferences, or attitudes using predefined scales.

### Configuration

**Required parameters:**

- **Belief Slug**: Letters only, no spaces (e.g., `InterestLevel`)
- **Question Prompt**: Clear, conversational question text
- **Scale**: Predefined scale type

### Available Scales

**Yes/No (`yn`):**

- Options: Yes or No
- Values: `BELIEVES_YES` / `BELIEVES_NO`
- Use case: Simple binary preferences

**True/False (`tf`):**

- Options: True or False
- Values: `BELIEVES_TRUE` / `BELIEVES_FALSE`
- Use case: Factual or opinion statements

**Interest (`interest`):**

- Options: Interested or Not Interested
- Values: `BELIEVES_INTERESTED` / `BELIEVES_NOT_INTERESTED`
- Use case: Engagement and preference measurement

**Agreement (`agreement`):**

- Options: Agrees or Disagrees
- Values: `BELIEVES_AGREES` / `BELIEVES_DISAGREES`
- Use case: Opinion and position measurement

**Likert (`likert`):**

- 5-point scale options:
  - Strongly Agree (`STRONGLY_AGREES`)
  - Agree (`AGREES`)
  - Neither Agree nor Disagree (`NEITHER_AGREES_NOR_DISAGREES`)
  - Disagree (`DISAGREES`)
  - Strongly Disagree (`STRONGLY_DISAGREES`)
- Use case: Nuanced opinion measurement

### Example Usage

```
Belief Slug: TechnicalDocumentation
Prompt: "Are you interested in technical documentation?"
Scale: interest
```

## Toggle Belief Widget

### Overview

Toggle Belief Widget provides simple binary choices through a toggle interface, perfect for quick preference capture.

### Configuration

**Required parameters:**

- **Belief Slug**: Letters only, no spaces
- **Question Prompt**: Clear toggle description
- **Automatic scale**: Uses Yes/No or True/False values

### Behavior

- **Visual toggle**: Switch-style interface
- **Immediate feedback**: Shows current state clearly
- **Binary values**: Automatically assigns appropriate true/false values
- **Quick interaction**: Single click to set preference

### Example Usage

```
Belief Slug: ShowAdvancedFeatures
Prompt: "Show me advanced features"
Result: Creates toggle that sets BELIEVES_YES/BELIEVES_NO
```

## Identify As Widget

### Overview

Identify As Widget provides persona-based content personalization through exclusive button group selection.

### Configuration

**Required parameters:**

- **Belief Tag**: Letters only, no spaces (e.g., `UseCase`)
- **Question Prompt**: Clear persona selection question
- **Target Values**: Custom persona identifiers

### Custom Target Values

**Common persona examples:**

- **Roles**: `Developer`, `Manager`, `Designer`, `Student`
- **Experience**: `Beginner`, `Intermediate`, `Advanced`
- **Company Size**: `Startup`, `SMB`, `Enterprise`
- **Use Cases**: `PersonalUse`, `BusinessUse`, `Educational`

### Behavior

- **Exclusive selection**: Only one persona can be active
- **Visual feedback**: Selected persona highlighted
- **Custom values**: Completely flexible persona definitions
- **Immediate effect**: Content reveals based on selection

### Example Usage

```
Belief Tag: UserRole
Prompt: "Which best describes your role?"
Targets: Developer, Manager, Designer, Student
```

When `UserRole=Developer` is set, content tagged for developers becomes visible throughout the site.

## Widget Implementation

### Technical Integration

**HTMX integration:**
All widgets use HTMX for seamless updates:

```html
hx-post="/api/v1/state" hx-trigger="change" hx-swap="none"
hx-vals='{"beliefId":"InterestLevel","beliefValue":"BELIEVES_YES"}'
```

**Session storage:**
Widget interactions update session beliefs:

```javascript
sessionBeliefs[sessionID][storyfragmentID]["InterestLevel"] = ["BELIEVES_YES"];
```

### Real-Time Updates

**Content revelation process:**

1. **Widget interaction** triggers belief update
2. **Backend processes** belief change
3. **Visibility evaluation** checks all pane requirements
4. **Content updates** hidden panes become visible
5. **Analytics tracking** records belief declaration

## Widget Placement Strategy

### Strategic Positioning

**Early engagement:**

- Place widgets early in content flow
- Enable personalization for rest of page
- Clear value proposition for sharing preferences

**Natural integration:**

- Embed widgets within content narrative
- Make belief declaration feel conversational
- Avoid interrupting reading flow

**Progressive profiling:**

- Start with simple widgets (toggle, yes/no)
- Advance to complex widgets (likert, personas)
- Build visitor profile gradually

### Content Context

**Relevant placement:**

- Position widgets where beliefs matter most
- Connect widget questions to surrounding content
- Show immediate value from belief declaration

**User experience:**

- Clear benefit explanation
- Immediate content adaptation
- Optional participation (never required)

## Analytics and Optimization

### Widget Performance

**Interaction tracking:**

- **Engagement rates**: How often visitors use widgets
- **Completion rates**: Percentage who declare beliefs
- **Drop-off analysis**: Where visitors abandon widgets

**Belief distribution:**

- **Popular beliefs**: Most common visitor preferences
- **Rare beliefs**: Underutilized belief options
- **Belief combinations**: Common preference patterns

### A/B Testing

**Widget optimization:**

- **Question wording**: Test different prompt variations
- **Placement testing**: Optimal widget positioning
- **Scale comparison**: Different scale effectiveness
- **Visual design**: Interface style impact

### Conversion Impact

**Personalization effectiveness:**

- **Engagement lift**: Increased interaction after belief declaration
- **Content consumption**: Deeper reading with personalized content
- **Goal completion**: Belief impact on conversions

---

_Effective widget implementation creates natural opportunities for visitors to share preferences, enabling increasingly personalized experiences that feel helpful rather than intrusive._
