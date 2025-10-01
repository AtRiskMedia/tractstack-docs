---
title: What is TractStack?
description: Epistemic hypermedia platform for adaptive websites
---

TractStack is a new species of web 2.0 making it possible for millions of websites to adapt to each visitor instead of showing everyone the same thing. It's an **adaptive website builder** that creates fast, beautiful, SEO-ready, and accessible websites that respond intelligently to user behavior.

Built on [Astro](https://astro.build/) with [HTMX](https://htmx.org/) and a [Golang](https://go.dev/) backend, TractStack uses SQLite by default with optional [Turso](https://app.turso.tech/) cloud database support.

## What is Epistemic Hypermedia?

Epistemic hypermedia represents a fundamental shift from traditional web personalization. Instead of inferring user preferences through behavioral tracking, it enables visitors to directly declare their beliefs and interests, creating personalized experiences through **progressive disclosure**.

### The Core Concept

When a user visits a TractStack-powered page, they see the default version that everyone does. But hidden within that page are countless "folds" - content variants that only reveal themselves when someone signals specific beliefs or interests.

**Here's how it works:**

1. **User visits** a webpage with hidden content folds
2. **Cache warms** and prepares content for delivery
3. **User declares preferences** through UI interactions (zero-party data)
4. **System updates state** for their session, story fragment, and tenant
5. **Content unfolds** automatically via HTMX, revealing relevant sections
6. **Seamless experience** - no page refresh, just intelligent content revelation

This creates a **privacy-first, user data-driven journey** where personalization happens through explicit choice rather than surveillance.

## Why Epistemic Hypermedia Changes Everything

### The Problem with Traditional Personalization

Current web personalization is fundamentally broken because it's based on **behavior inference** - digital stalking disguised as customer service:

- Netflix thinks you like action movies because you watched one Jason Statham film
- Amazon recommends baby products because you bought a gift for your nephew
- LinkedIn serves AI startup ads because you read one ChatGPT article

### The Epistemic Solution

Instead of guessing what people want, **epistemic hypermedia just asks them**. This creates:

- **Authentic personalization** based on declared preferences
- **Privacy-first experiences** without tracking or cookies
- **Progressive disclosure** that reveals relevant content naturally
- **Belief-driven interactions** that respect user agency

## Key Features

### Story Keep Web Application

TractStack includes a complete content management system where you can:

- Log in to manage your TractStack installation
- Edit and create new web pages
- Configure content folds and personalization rules
- Monitor engagement analytics

### SEO-Friendly by Design

All SEO best practices are "pressed" in automatically:

- **Technical SEO** optimization
- **Semantic HTML** structure
- **Accessibility (A11y)** compliance
- **Next-gen image formats** for performance
- **Social sharing** optimization
- **Privacy-first analytics** built-in

### Engagement Analytics

TractStack monitors what holds your audience's attention as they interact with content. Each section of every page becomes a touchpoint for engagement and audience insights.

**Out-of-box tracking events:**

- `GLOSSED` - User briefly viewed content
- `READ` - User spent time reading content
- `CLICKED` - User interacted with elements
- `ENTERED` - User arrived at content
- `PAGEVIEWED` - User loaded the page
- `WATCHED` - User engaged with media content

### Conversion Rate Optimization Made Simple

Conversion means something different for every business - making sales, receiving donations, getting waitlist sign-ups, booking clients, or any goal you define.

With TractStack, you can add **magic paths** to better engage each visitor. Based on how they've interacted with your site, tailored calls-to-action appear at precisely the right moment.

## Common Pain Points Solved

- Serving diverse customers with one-size-fits-all experiences
- Low conversion rates despite heavy personalization investment
- Privacy compliance concerns with tracking-based systems
- Inability to deliver truly relevant content experiences

---

_TractStack: Where every webpage becomes a personalized conversation that respects privacy while delivering genuinely relevant experiences._
