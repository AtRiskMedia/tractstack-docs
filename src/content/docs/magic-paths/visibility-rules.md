---
title: Visibility Rules
description: Configure content display based on visitor beliefs
---

Visibility rules control when content appears or disappears based on visitor beliefs. TractStack evaluates these rules in real-time to create adaptive content experiences.

## Rule Types

### Held Beliefs (Show Conditions)

Content with held belief rules only appears when visitors possess the specified beliefs.

**Simple belief matching:**

- `Interest=BELIEVES_YES` → Shows content to interested visitors
- `UseCase=Developer` → Shows developer-specific content
- `Experience=Advanced` → Shows advanced content

**Multiple value matching:**

- `UseCase=Developer,Manager` → Shows content for either developers OR managers
- `Experience=Intermediate,Advanced` → Shows content for intermediate OR advanced users

**Wildcard matching:**

- `UseCase=*` → Shows content if ANY UseCase value is set
- Useful for distinguishing personalized vs default content

### Withheld Beliefs (Hide Conditions)

Content with withheld belief rules hides when visitors possess the specified beliefs.

**Exclusion rules:**

- `Experience=Beginner` → Hides advanced content from beginners
- `Budget=Limited` → Hides premium pricing from budget-conscious visitors
- `Interest=BELIEVES_NO` → Hides detailed content from uninterested visitors

**Negative filtering:**

- `UseCase=Student` → Hides enterprise features from students
- `TechnicalLevel=Basic` → Hides technical documentation

## Advanced Logic

### Match-Across (OR Logic)

Regular beliefs use AND logic (all conditions must match). Match-across beliefs use OR logic (any condition can match).

**Standard AND logic:**

- Held: `Interest=BELIEVES_YES` AND `Experience=Advanced`
- Both conditions must be true

**Match-Across OR logic:**

- Match-Across: `Role=Admin,Developer,Manager`
- Any one of these roles satisfies the condition

**Complex combinations:**

- Held: `Interest=BELIEVES_YES` AND `Experience=Advanced`
- Match-Across: `Role=Admin,Developer`
- Shows content if visitor is interested AND advanced AND (admin OR developer)

### Linked Beliefs (Cascade Effects)

Linked beliefs automatically trigger related belief changes to maintain content consistency.

**Cascade examples:**

- Setting `UseCase=Developer` might automatically set `TechnicalLevel=Advanced`
- Selecting `Company=Enterprise` might set `Budget=Flexible`
- Choosing `Experience=Beginner` might set `PreferSimpleExplanations=BELIEVES_YES`

**Consistency maintenance:**

- Ensures coherent visitor experience across the site
- Prevents conflicting belief combinations
- Reduces visitor effort in declaring related preferences

## Visibility Evaluation

### Real-Time Processing

**Evaluation sequence:**

1. **Visitor declares belief** through widget interaction
2. **System updates session storage** with new belief
3. **Visibility engine evaluates** all pane requirements
4. **Content reveals/hides** based on updated belief state
5. **Page updates** without refresh using HTMX

### Evaluation Logic

**For each pane with visibility rules:**

1. **Check held beliefs**: Do visitor's beliefs match required beliefs?
2. **Check withheld beliefs**: Do visitor's beliefs conflict with restrictions?
3. **Apply match-across logic**: Evaluate OR conditions
4. **Final visibility**: Show if held conditions met AND withheld conditions avoided

**Example evaluation:**

```
Pane requirements:
- Held: Interest=BELIEVES_YES, Experience=Advanced
- Withheld: Budget=Limited

Visitor beliefs:
- Interest=BELIEVES_YES ✓
- Experience=Advanced ✓
- Budget=Moderate ✓ (not Limited)

Result: VISIBLE
```

## Configuration in StoryKeep

### Setting Visibility Rules

**Pane configuration process:**

1. **Edit story fragment** containing the pane
2. **Select pane** to configure
3. **Set belief requirements** in pane settings
4. **Configure held beliefs** (show conditions)
5. **Configure withheld beliefs** (hide conditions)
6. **Test visibility** with different belief combinations

### Magic Path Builder Interface

**Visual configuration:**

- **Drag-and-drop belief selection**
- **Visual logic builder** for complex conditions
- **Real-time preview** of visibility rules
- **Testing interface** with different belief scenarios

## Testing and Preview

### Belief Testing

**Preview capabilities:**

- **Test different belief combinations** to see content changes
- **Preview as anonymous visitor** (default state)
- **Simulate belief declarations** without affecting live site
- **Validate rule logic** before publishing

### Quality Assurance

**Rule verification:**

- **Logic validation**: Ensure rules work as intended
- **Content completeness**: Verify all belief scenarios have appropriate content
- **User experience testing**: Smooth transitions between visibility states
- **Analytics verification**: Confirm tracking works with visibility changes

## Common Patterns

### Progressive Disclosure

**Layered content revelation:**

1. **Default content**: Visible to all visitors
2. **Basic personalization**: Simple belief-driven content
3. **Deep personalization**: Multiple belief requirements
4. **Expert content**: Advanced belief combinations

**Example progression:**

- Default: Basic product information
- Interest=YES: Detailed features and benefits
- Interest=YES + UseCase=Developer: Technical specifications
- Interest=YES + UseCase=Developer + Experience=Advanced: API documentation

### Persona-Based Content

**Role-specific information:**

- `UseCase=Developer` → Technical documentation, code examples
- `UseCase=Manager` → ROI information, team collaboration features
- `UseCase=Student` → Educational pricing, learning resources

**Experience-based adaptation:**

- `Experience=Beginner` → Step-by-step guides, basic concepts
- `Experience=Advanced` → Advanced techniques, customization options

### Contextual Adaptation

**Situational content:**

- `Budget=Limited` → Focus on cost-effective solutions
- `Budget=Flexible` → Premium options and advanced features
- `Company=Startup` → Scaling information, growth strategies
- `Company=Enterprise` → Compliance, security, integration features

## Performance Considerations

### Caching Strategy

**Belief-aware caching:**

- **Anonymous visitors**: Fully cached default content
- **Belief holders**: Dynamic content generation with selective caching
- **Session-based**: Cache personalized content per session
- **Invalidation**: Clear cache when beliefs change

### Optimization Techniques

**Efficient evaluation:**

- **Pre-computed visibility**: Calculate common belief combinations
- **Incremental updates**: Only recalculate affected panes
- **Lazy evaluation**: Evaluate visibility on demand
- **Batch processing**: Group visibility updates for performance

---

_Visibility rules create the foundation for adaptive content experiences. Well-designed rules provide meaningful personalization while maintaining good performance and user experience._
