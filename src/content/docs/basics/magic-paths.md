---
title: Magic unfolding paths
description: Adaptive content pathways
---

## The Core Philosophy

> The medium that carries your narrative should be as dynamic and engaging as the story itself.

One webpage. Many visitors. With traditional websites, pages are pre-rendered and served without context to each visitor. TractStack transforms this paradigm by making webpages read like choose-your-own-adventures that automagically reveal the right content to the right person at the right time.

## Zero-Party Data Disclosure

TractStack facilitates **zero-party disclosure** - where visitors voluntarily share information about themselves through natural interactions with your content. This privacy-first approach enables authentic personalization without surveillance or tracking.

### The Belief System

Beliefs are the foundation of magic paths. They capture visitor preferences, interests, and characteristics through three types of interactive widgets:

#### 1. Belief Widget

- **Purpose**: Capture opinions, preferences, or attitudes on predefined scales
- **Configuration**:
  - Belief Slug (letters only, no spaces)
  - Question Prompt
  - Scale options:
    - `yn` = Yes or No
    - `tf` = True or False
    - `interest` = Interested or Not Interested
    - `agreement` = Agrees or Disagrees
    - `likert` = 5-point scale (Strongly Agree → Strongly Disagree)
- **Example**: "Are you interested in technical documentation?" with Interest scale

#### 2. Toggle Belief Widget

- **Purpose**: Simple binary choices for quick preference capture
- **Configuration**:
  - Belief Slug (letters only, no spaces)
  - Question Prompt
  - Automatic Yes/No or True/False toggle
- **Example**: "Show me advanced features" with toggle interaction

#### 3. Identify As Widget

- **Purpose**: Persona-based content personalization
- **Configuration**:
  - Belief Tag (letters only, no spaces)
  - Question Prompt
  - Custom target values (persona identifiers)
- **Example**:
  - Belief Tag: `UseCase`
  - Targets: `PersonaA`, `PersonaB`, `PersonaC`
  - Once `UseCase=PersonaA` is set, PersonaA-specific content reveals throughout the site

## Content Pathways

### Belief-Driven Visibility

Story fragments (web pages) contain **hidden content panes** that reveal based on visitor beliefs. The system supports four visibility modes:

#### 1. Held Beliefs (Show Conditions)

Panes appear when visitors possess specific beliefs:

- **Simple match**: `UseCase=PersonaA` (shows for PersonaA users)
- **Multiple values**: `UseCase=PersonaA,PersonaB` (shows for either persona)
- **Wildcard**: `UseCase=*` (shows if UseCase is set to any value)

#### 2. Withheld Beliefs (Hide Conditions)

Panes hide when visitors possess specific beliefs:

- **Exclusion**: `TechnicalLevel=Beginner` (hides advanced content)
- **Multiple exclusions**: Content hidden from multiple personas

#### 3. Match-Across Logic (OR Conditions)

For complex scenarios with multiple beliefs:

- **Regular beliefs**: ALL must match (AND logic)
- **Match-across beliefs**: ANY can match (OR logic)
- **Example**: Show content if `(Interest=Yes AND Experience=Advanced) OR (Role=Admin OR Role=Developer)`

#### 4. Linked Beliefs (Cascade Effects)

Beliefs that automatically trigger related belief changes:

- **Use case**: Selecting PersonaA might automatically set related preferences
- **Content consistency**: Ensures coherent experience across the site

### Technical Implementation

#### Belief Registry System

Each story fragment maintains a **BeliefRegistry** that tracks:

- **Pane belief requirements**: Which beliefs control pane visibility
- **Widget belief mappings**: Which panes contain belief widgets
- **Dependency tracking**: How beliefs interconnect

#### Visibility Evaluation Engine

The `BeliefEvaluationService` processes visibility in real-time:

```typescript
// Simplified evaluation logic
function evaluatePaneVisibility(paneBeliefs, userBeliefs) {
  const heldResult = processHeldBeliefs(paneBeliefs, userBeliefs);
  const withheldResult = processWithheldBeliefs(paneBeliefs, userBeliefs);

  return heldResult && withheldResult ? "visible" : "hidden";
}
```

#### Magic Path Builder Interface

StoryKeep provides a visual interface for creating belief-driven content:

- **Drag-and-drop belief selection**
- **Visual logic builder** for complex conditions
- **Real-time preview** of visibility rules
- **Custom value management** for persona-based beliefs

## Adaptive Call-to-Actions

Magic paths extend beyond content visibility to dynamic interactions:

### Context-Aware CTAs

- **Belief-triggered buttons**: Different actions based on visitor beliefs
- **Progressive offers**: More relevant offers as beliefs are captured
- **Personalized messaging**: CTAs adapt language and positioning

### Impression System Integration

Impressions (contextual notifications) work with beliefs:

- **Triggered by content engagement**: Appear when visitors view specific panes
- **Belief-aware targeting**: Different impressions for different personas
- **Progressive disclosure**: Build on previously captured beliefs

## Privacy-First Architecture

TractStack's approach respects visitor privacy:

### Session-Based Storage

- **No permanent tracking**: Beliefs stored in session only
- **User control**: Visitors can opt-in to preference memory
- **Transparent data use**: Clear indication of how beliefs are used

### Consent Management

- **Explicit opt-in**: Visitors choose whether to enable personalization
- **Granular control**: Can disable belief tracking anytime
- **Local storage only**: No server-side personal data retention without consent

## Implementation Workflow

### 1. Design Belief Structure

- Identify visitor personas and characteristics
- Create belief slugs for key differentiators
- Plan belief interdependencies

### 2. Create Interactive Widgets

- Add belief widgets to strategic content locations
- Use natural language prompts that feel conversational
- Test widget placement for optimal engagement

### 3. Configure Content Pathways

- Set up pane visibility rules using Magic Path Builder
- Create persona-specific content variants
- Plan progressive disclosure sequences

### 4. Test Adaptive Behavior

- Preview different belief combinations
- Verify content reveals work as expected
- Optimize based on visitor engagement patterns

## Best Practices

### Content Strategy

- **Start simple**: Begin with 2-3 key beliefs
- **Natural integration**: Embed widgets in content flow naturally
- **Progressive complexity**: Add more sophisticated logic over time

### User Experience

- **Clear value exchange**: Explain why visitors should share preferences
- **Immediate feedback**: Show content changes right after belief capture
- **Escape hatches**: Provide ways to modify or clear beliefs

### Technical Considerations

- **Performance**: Belief evaluation happens in real-time
- **Caching**: System optimizes for belief-aware content delivery
- **Analytics**: Track belief adoption and content engagement

Magic paths transform static websites into adaptive experiences that grow more relevant with each visitor interaction, creating the foundation for truly epistemic hypermedia that learns and evolves based on collective visitor wisdom.

---

_Configure magic paths through StoryKeep's visual belief builder to create adaptive content experiences that feel personal without compromising privacy._
