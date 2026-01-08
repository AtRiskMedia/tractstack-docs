---
title: Context Pages
description: The "Deep Dive" without the distraction
---

The main stage is for action. The Context Page is for the details.

In a linear website, if a user wants to read your Privacy Policy or Technical Specs, they have to click away—leaving the narrative and breaking the flow.

In **TractStack**, we use **Context Pages**. These are specialized containers for supporting information. They allow you to "put a pin" in a complex topic, offering a deep dive for the 1% who want it, without cluttering the journey for the 99% who don't.

## The Philosophy: Safe Detours

Think of your **Story Fragments** as the conversation (The Handshake).
Think of your **Context Pages** as the reference material in your briefcase.

When you link to a Context Page, you aren't sending the user away; you are offering a **Safe Detour**.

- **The URI:** Follows the pattern `/context/slug`.
- **The UX:** Designed to be referenced and closed, dropping the user right back into the main flow where they left off.

## Use Cases: When to "Put a Pin in It"

Use Context Pages for high-density information that creates friction in a narrative flow:

- **The Fine Print:** Terms of Service, Privacy Policies, Disclaimers.
- **The Weeds:** Technical specifications, methodologies, academic citations.
- **The Backstory:** Detailed company history or team bios that would slow down a landing page.

**The Rule of Thumb:** If it explains _how_ or _why_, but stops the user from doing _what_ they came for, put it in a Context Page.

## Creating a Context Page

1. **Navigate:** Content → "Create New" → "Context Page".
2. **Define:**
   - **Title:** The Reference Name (e.g., "Privacy Policy").
   - **Slug:** The handle (e.g., `/context/privacy`).
   - **Description:** For SEO snippet generation.
3. **Build:** Use the same **Pane System** as Story Fragments. You have full design control—text, images, and interactive widgets.

## Linking Strategy (The "Aside")

Context Pages are designed to be linked from within the flow of a Story Fragment.

- **Inline:** "Our adaptive engine is secure (see [Security Specs](/context/security))."
- **Footer:** The standard home for Legal and Compliance.
- **Navigation:** Utility links for "About" or "Contact."

**Pro Tip:** Because TractStack handles state on the server, a user can visit a Context Page to check a detail and return to the Story Fragment without losing their place in the "Handshake" (e.g., a half-filled form or a specific revealed Hidden Door).

## SEO & Analytics

Context Pages are **Backstage**, not invisible.

- **Fully Indexed:** Search engines crawl them. This is excellent for capturing long-tail traffic (e.g., "TractStack Security Specs").
- **Analytics:** We track engagement here too.
  - _Insight:_ If a user spends 5 minutes reading your "Pricing Methodology" Context Page, that is a **High-Intent Signal**. They are doing due diligence. That is a lead you should be watching.

## Multi-Tenant Strategy

For Agency Partners running a "Wholesale DXP" or Empire Builders with multiple sites:

Context Pages support **Inheritance**.
You can create a **Global Context Page** (e.g., a standard Privacy Policy) and deploy it across all your tenant sites instantly. Update it once; protect the entire empire.

---

_The "Free Web" Press by At Risk Media_
