---
title: Menus & Navigation
description: Directing the flow of the narrative
---

A static website gives you a map of the entire world (Home, About, Services, Contact, Blog, FAQ...). It overwhelms the user before they’ve taken a single step.

In **Tract Stack**, we treat Menus as a Compass. They are simple, directional, and designed to keep the user inside the narrative, not looking for the exit.

## The Philosophy: The Compass, Not the Map

The "Old Web" relies on Mega-Menus - cluttered dropdowns that scream desperation.
The **Free Web** relies on **Signal Continuity**.

Your Main Menu should not list everything you have. It should list the **Primary Threads** of your Brand Universe.

- **The Main Menu:** The "Action" paths (e.g., "Build," "Learn," "Pricing").
- **The Footer:** The "Context" paths (e.g., "Privacy," "Terms," "Manifesto").

## Configuring Menus (The "Has Menu" Toggle)

We removed the complex "Menu Builders" of legacy CMS tools. You don't need a separate drag-and-drop interface to build a list.

In Tract Stack, navigation is a property of the Story Fragment itself.

### How to Add a Page to the Menu

1. **Open** the Story Fragment in the Editor.
2. **Locate** the "Has Menu" checkbox in the properties panel.
3. **Check it.**

**The Logic:**

- If `Has Menu` is checked, the page appears in the **Main Navigation**.
- The text used in the menu is the Page Title (or a shorter "Menu Title" if configured).
- The order is determined by the `Order` property or alphabetical default.

## Adaptive Navigation

Because Tract Stack is a **Adaptive Engine**, your navigation is not set in stone.

**Scenario:**
You have a "Wholesale DXP" offering that only applies to Agencies.

- **Default View:** The "Agencies" link is hidden to keep the menu clean for regular users.
- **The Handshake:** A user identifies as an "Agency Owner" via a Belief Widget.
- **The Reveal:** The Logic Engine refreshes the state, and the "Agency Portal" link appears in the Main Menu instantly.

This is **Smart Triage** applied to navigation. You only show the door when the user is ready to walk through it.

## Best Practices

### 1. Keep the Main Stage Clean

Your top navigation bar is prime real estate. Do not clutter it with "Context Pages."

- **Good:** Story Fragments (Narrative threads).
- **Bad:** Terms of Service (Put this in the Footer).

### 2. The "Magic Path" Button

Often, the most important link isn't a text link - it's an Action.
In your site configuration, you can define a **Primary Action** (e.g., "Start the Handshake" or "Get Started"). This stands apart from the menu as the clear next step.

### 3. Footer Strategy

The footer is where you put the "Library." Use it for:

- Context Pages (Privacy, Legal).
- Deep links to specific "Hidden Doors" for power users.
- Social signals.

---

_The "Free Web" Press by At Risk Media_
