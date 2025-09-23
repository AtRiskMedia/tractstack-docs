---
title: Belief System Overview
description: Understanding TractStack's adaptive content foundation
---

The belief system is the core technology that enables TractStack's adaptive content capabilities. It allows visitors to declare their preferences and interests, which then drives personalized content revelation without tracking or surveillance.

## Core Concept

### Zero-Party Data Disclosure

TractStack facilitates **zero-party disclosure** - where visitors voluntarily share information about themselves through natural interactions with your content. This privacy-first approach enables authentic personalization without surveillance or tracking.

**How it works:**

1. **Visitor encounters belief widget** on a page
2. **Declares preference** through interaction (dropdown, button, toggle)
3. **System stores belief** for their session (e.g., `IsInterested=BELIEVES_YES`)
4. **Content adapts immediately** based on declared beliefs
5. **Personalized experience** unfolds without page refresh

### Privacy-First Foundation

**Key principles:**

- **Voluntary declaration**: Visitors choose what to share
- **Session-based storage**: Temporary by default
- **No behavioral tracking**: Direct preference declaration instead of inference
- **User control**: Visitors can modify or clear their beliefs
- **Transparent usage**: Clear indication of how beliefs affect content

## Belief Storage and Management

### Session-Based Beliefs

**Default behavior:**

- Beliefs stored in visitor's session
- Persist across pages during visit
- Clear when session ends or browser closes
- No permanent tracking without consent

### Cross-Browser Synchronization

**Fingerprint-based sync:**

- Optional preference sharing across browser tabs/devices
- Uses device fingerprinting for anonymous synchronization
- Maintains privacy while enabling consistent experience
- User can opt-out of sync functionality

### Belief Structure

**Technical format:**

```javascript
// Session belief storage
sessionBeliefs[sessionID][storyfragmentID]["BeliefSlug"] = ["BELIEF_VALUE"];

// Example
sessionBeliefs["abc123"]["homepage"]["Interest"] = ["BELIEVES_YES"];
sessionBeliefs["abc123"]["homepage"]["UseCase"] = ["Developer"];
```

## Belief Categories and Types

### Scalar Beliefs

**Predefined scales for common preference types:**

**Yes/No (`yn`)**:

- `BELIEVES_YES` / `BELIEVES_NO`
- Simple binary choices
- Example: "Are you interested in technical documentation?"

**True/False (`tf`)**:

- `BELIEVES_TRUE` / `BELIEVES_FALSE`
- Factual or opinion-based statements
- Example: "I prefer detailed explanations over summaries"

**Interest Scale (`interest`)**:

- `BELIEVES_INTERESTED` / `BELIEVES_NOT_INTERESTED`
- Preference and engagement measurement
- Example: "Are you interested in advanced features?"

**Agreement Scale (`agreement`)**:

- `BELIEVES_AGREES` / `BELIEVES_DISAGREES`
- Opinion and position measurement
- Example: "Do you agree that privacy is more important than convenience?"

**Likert Scale (`likert`)**:

- 5-point scale from `STRONGLY_AGREES` to `STRONGLY_DISAGREES`
- Nuanced opinion measurement
- Example: "Rate your agreement with this statement"

### Identity-Based Beliefs

**Persona identification:**

- Custom values like `Developer`, `Manager`, `Student`
- Role-based content personalization
- Example: `UseCase=Developer` shows technical content

**Demographic beliefs:**

- Experience level: `Beginner`, `Intermediate`, `Advanced`
- Company size: `Startup`, `SMB`, `Enterprise`
- Budget range: `Limited`, `Moderate`, `Flexible`

## Content Visibility Rules

### Held Beliefs (Show Conditions)

Content appears when visitors possess specific beliefs:

**Simple matching:**

- `Interest=BELIEVES_YES` → Show detailed information
- `UseCase=Developer` → Show technical documentation

**Multiple value matching:**

- `UseCase=Developer,Manager` → Show content for either role
- `Experience=Intermediate,Advanced` → Hide beginner content

**Wildcard matching:**

- `UseCase=*` → Show if any UseCase value is set
- Useful for "personalized" vs "default" content

### Withheld Beliefs (Hide Conditions)

Content hides when visitors possess specific beliefs:

**Exclusion rules:**

- `Experience=Beginner` → Hide advanced technical content
- `Budget=Limited` → Hide premium pricing information

**Multi-condition hiding:**

- `UseCase=Student AND Budget=Limited` → Hide enterprise features

### Advanced Logic

**Match-Across (OR Logic):**

- Regular beliefs use AND logic (all must match)
- Match-across beliefs use OR logic (any can match)
- Example: Show content if `(Interest=Yes AND Experience=Advanced) OR (Role=Admin OR Role=Developer)`

**Linked Beliefs (Cascade Effects):**

- Setting one belief automatically triggers related beliefs
- Example: Selecting `UseCase=Developer` might set `TechnicalLevel=Advanced`
- Ensures content consistency across the site

## Belief Widgets

### Widget Types

**Belief Widget (Dropdown):**

- Dropdown selection with predefined scales
- Question prompt with clear options
- Slug configuration for belief storage

**Toggle Belief Widget:**

- Simple binary toggle interface
- Quick preference capture
- Automatic Yes/No or True/False values

**Identify As Widget:**

- Button group for persona selection
- Exclusive choice among custom options
- Visual feedback for selected option

### Widget Configuration

**Required parameters:**

- **Belief Slug**: Letters only, no spaces (e.g., `InterestLevel`)
- **Question Prompt**: Clear, conversational text
- **Scale/Options**: Predefined scale or custom values

**Example configuration:**

```
Belief Slug: TechnicalLevel
Prompt: "What's your technical background?"
Scale: Custom values (Beginner, Intermediate, Advanced)
```

## Implementation in Content

### Pane Visibility Configuration

**Setting visibility rules:**

1. **Edit pane** in story fragment
2. **Configure belief requirements** in pane settings
3. **Set held/withheld conditions**
4. **Test visibility** with different belief combinations

**Example visibility configuration:**

- **Held Beliefs**: `TechnicalLevel=Advanced`
- **Withheld Beliefs**: `Interest=BELIEVES_NO`
- **Result**: Shows only to advanced users who are interested

### Progressive Disclosure Strategy

**Content layering:**

1. **Default content**: Visible to all visitors
2. **First-level personalization**: Basic belief-driven content
3. **Deep personalization**: Multiple belief combinations
4. **Expert content**: Advanced belief-specific information

## Real-Time Content Updates

### HTMX Integration

**Seamless updates:**

- Belief declaration triggers HTMX POST to `/api/v1/state`
- Backend updates session belief storage
- Content visibility recalculated immediately
- Page sections reveal/hide without refresh

**Technical flow:**

1. **Widget interaction** → HTMX POST with belief data
2. **Backend processing** → Session belief update
3. **Visibility evaluation** → Check all pane requirements
4. **Broadcast update** → SSE notification to browser
5. **Content revelation** → Hidden content becomes visible

### Cross-Page Persistence

**Session continuity:**

- Beliefs persist across page navigation
- Content adapts consistently throughout site
- Visitor journey becomes increasingly personalized
- Analytics track belief-driven engagement patterns

---

_The belief system transforms static websites into adaptive experiences that learn about visitors through voluntary disclosure rather than surveillance, creating genuinely personalized content while respecting privacy._
