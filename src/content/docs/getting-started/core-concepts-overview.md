---
title: Core Concepts Overview
description: Essential TractStack concepts for new users
---

Understanding these core concepts will help you make the most of TractStack's adaptive content capabilities. Don't worry about memorizing everything - you'll learn through practice.

## Story Fragments (Web Pages)

Think of each webpage not as a self-contained unit, but as a **story fragment** - a piece of a larger narrative that visitors will encounter in their own unique sequence.

- Each story fragment has a **slug** which becomes its URL: `/slug`
- Story fragments contain multiple **panes** (content sections)
- Unlike traditional pages, they can adapt and reveal hidden content based on visitor interactions

## Panes (Content Sections)

Panes are the building blocks of your content. Each pane is a section of content that can:

- Be shown or hidden based on visitor beliefs
- Contain text, images, videos, or interactive widgets
- Have its own analytics tracking
- Trigger personalization rules

## Beliefs System

This is where the magic happens. **Beliefs** are visitor preferences that drive content personalization:

### How Beliefs Work

1. **Visitor declares a preference** through interactive widgets
2. **System stores their belief** (e.g., `IsInterested=BELIEVES_YES`)
3. **Hidden content reveals** automatically based on their declared beliefs
4. **No page refresh needed** - content unfolds in real-time

### Types of Belief Widgets

- **Belief Widget**: Dropdowns with scales (Yes/No, Agree/Disagree, 5-point Likert)
- **Toggle Belief Widget**: Simple binary choices
- **Identify As Widget**: Persona-based selection (Developer, Manager, Startup Founder)

## Magic Paths (Adaptive Content)

Magic paths are the content revelation rules that make your site adaptive:

### Held Beliefs (Show Conditions)

- `UseCase=Developer` → Shows developer-specific content
- `Interest=BELIEVES_YES` → Reveals detailed information

### Withheld Beliefs (Hide Conditions)

- `Experience=Beginner` → Hides advanced technical content
- `Budget=Limited` → Hides enterprise pricing

### Progressive Disclosure

Content unfolds naturally as visitors share more about themselves, creating personalized journeys without separate pages.

## Context Pages

Special pages for additional background information:

- URL pattern: `/context/slug`
- Perfect for detailed explanations, legal text, or supporting information
- Can be linked from anywhere without interrupting the main user flow

## StoryKeep (Content Management)

Your built-in CMS for managing everything:

- **Analytics**: Real-time engagement tracking
- **Content**: Create and edit pages, manage beliefs
- **Branding**: Configure visual identity
- **Advanced**: System settings (Admin only)

## Zero-Party Data

Unlike traditional tracking, TractStack uses **zero-party data** - information visitors voluntarily share:

- **Privacy-first**: No cookies or behavioral tracking
- **Explicit consent**: Visitors choose what to share
- **Session-based**: Preferences can be temporary or saved
- **Cross-browser sync**: Optional preference sharing across devices

## Impressions (Smart Notifications)

Contextual call-to-action notifications that appear based on content engagement:

- Triggered when visitors view specific panes
- Display as header notifications or overlay
- Multiple impressions can be active simultaneously
- Include analytics tracking for optimization

## Technical Foundation

Built on modern web standards:

- **Astro**: Content-focused web framework
- **HTMX**: Real-time content updates without JavaScript complexity
- **Go**: High-performance backend
- **SQLite**: Zero-configuration database (with Turso cloud option)

## Privacy & Performance

- **No external dependencies** for core functionality
- **Privacy-first analytics** built-in
- **SEO optimized** out of the box
- **Accessibility compliant** by default
- **Fast loading** with intelligent caching

## Key Differences from Traditional CMS

| Traditional CMS               | TractStack                   |
| ----------------------------- | ---------------------------- |
| Static pages for everyone     | Adaptive content per visitor |
| Behavioral tracking           | Declared preferences         |
| Complex personalization setup | Visual belief builder        |
| Separate analytics tools      | Built-in engagement tracking |
| One-size-fits-all content     | Progressive disclosure       |

## Getting Started Workflow

1. **Create content** with the StoryKeep CMS
2. **Add belief widgets** to capture visitor preferences
3. **Configure magic paths** for content revelation
4. **Monitor analytics** to optimize engagement
5. **Iterate and improve** based on visitor behavior

## What Makes This Special

Traditional websites are like McDonald's menus - everyone sees the same thing. TractStack websites are like conversations with expert consultants who reveal different options based on what you tell them you actually want.

The result: **genuine personalization** that respects privacy while delivering experiences that feel custom-tailored to each visitor.

---

_Ready to dive deeper? Start exploring the [User Guide](/user-guide/storykeep-dashboard/) or jump into [creating your first adaptive content](/user-guide/creating-content/story-fragments/)._
