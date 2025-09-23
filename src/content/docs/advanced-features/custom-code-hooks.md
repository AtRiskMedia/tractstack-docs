---
title: Custom Code Hooks
description: Learn how to create and use custom code hooks in TractStack
---

# Custom Code Hooks

Custom code hooks allow you to inject custom components and functionality into your TractStack content panes. This powerful feature enables you to extend the basic content types with interactive elements, external integrations, and custom UI components.

## How Code Hooks Work

Code hooks are defined in your Astro components and can be triggered from within content panes. The system uses a component mapping approach where:

1. Component Registration: Define available components in your CodeHook component
2. Content Triggering: Use special syntax in content to invoke code hooks
3. Runtime Rendering: Components are rendered with access to content context and options

## Component Registration

In your CodeHook component register available components:

```javascript
export const components = {
  "custom-hero": true,
  "featured-content": true,
  "list-content": true,
  "bunny-video": import.meta.env.PUBLIC_ENABLE_BUNNY === "true",
  epinet: true,
};
```

## Available Built-in Components

### Featured Content

Displays content in a featured layout with enhanced styling and prominence.

Usage options:

- limit: Number of items to display
- category: Filter by content category
- layout: Display layout option

### List Content

Renders content in list format with configurable styling and filtering.

Usage options:

- format: List formatting style
- sortBy: Sorting criteria
- filterBy: Content filtering options

### Video Player

Integrates Bunny CDN video player when enabled.

Prerequisites:

- PUBLIC_ENABLE_BUNNY=true in environment
- Bunny CDN configuration

Usage options:

- videoId: Bunny video identifier
- autoplay: Auto-play behavior
- controls: Player control visibility

### Epinet Integration

Connects with Epinet services for enhanced functionality.

Usage options:

- mode: Integration mode
- dataSource: External data connection

## Creating Custom Components

### 1. Create Component File

Create your custom component in src/custom/:

```astro
---
export interface Props {
  options?: {
    params?: {
      options?: string;
    };
  };
}

const { options } = Astro.props;
---

<div class="flex h-80 items-center justify-center bg-yellow-300">
  <div class="text-center">
    <h1 class="mb-4 text-4xl font-bold text-gray-900">Custom Hero Component</h1>
    <p class="text-lg text-gray-700">This is an example CodeHook component</p>
  </div>
</div>
```

### 2. Register in CodeHook Component

Add your component to the registration and rendering logic:

```astro
---
import CustomHero from "./CustomHero.astro";

export const components = {
  "custom-hero": true,
  "featured-content": true,
  "list-content": true,
};
---

{
  target === "custom-hero" ? (
    <CustomHero options={options} />
  ) : target === "featured-content" ? (
    <FeaturedContent options={options} contentMap={fullContentMap} />
  ) : target === "list-content" ? (
    <ListContent options={options} contentMap={fullContentMap} />
  ) : (
    <div class="rounded-lg bg-gray-50 p-8 text-center">
      <p class="text-gray-600">Component not found</p>
    </div>
  )
}
```

### 3. Use in Content

Trigger your component from content panes using the code hook syntax defined in your content management system.

## Advanced Features

### Context Access

Components receive access to:

- Content Map: Full site content structure
- Resources Payload: External data and resources
- Options: Configuration parameters from content

### Environment Integration

Components can access environment variables:

```javascript
const isProduction = import.meta.env.PROD;
const apiEndpoint = import.meta.env.PUBLIC_API_ENDPOINT;
```

### Conditional Rendering

Use environment flags for feature toggles:

```javascript
export const components = {
  "premium-feature": import.meta.env.PUBLIC_PREMIUM_ENABLED === "true",
  "beta-component": import.meta.env.NODE_ENV === "development",
};
```

## Best Practices

### Performance

- Lazy Loading: Use client:only directive for heavy components
- Conditional Imports: Only import components when needed
- Resource Optimization: Minimize external dependencies

### Maintainability

- Clear Naming: Use descriptive component names
- Documentation: Comment component purpose and options
- Type Safety: Define proper TypeScript interfaces

### Security

- Input Validation: Validate all options and parameters
- Environment Variables: Use proper environment variable patterns
- Error Handling: Implement graceful failure modes

## Troubleshooting

### Component Not Found

Ensure component is:

1. Properly imported in CodeHook component
2. Added to components export object
3. Included in rendering conditions

### Environment Issues

Check that required environment variables are:

- Defined in .env files
- Properly prefixed (PUBLIC\_ for client-side)
- Available at build time

### Build Errors

Common issues:

- Import path errors
- Missing dependencies
- TypeScript type mismatches
- Syntax errors in component files
