---
title: Story Fragments
description: Building the non-linear narrative in Tract Stack
---

Story Fragments are the atoms of your Brand Universe.

In the "Old Web", you built static **Pages** - rigid documents that looked the same to everyone. In Tract Stack, you build **Story Fragments** - adaptive scenes that listen, react, and change based on who is watching.

## The Philosophy: The Non-Linear Web

Your users do not read your site like a book (Page 1 → Page 2). They jump. They skim. They arrive from a Google search, a tweet, or a dark social link.

**A Story Fragment is a self-contained beat of your narrative.** It is designed to be encountered in any order, yet smart enough to know where the user came from and what they believe.

### The URL (The Hook)

Every Story Fragment has a `slug` (e.g., `/pricing` or `/mission`). While the experience is fluid, the address is concrete. This ensures that your "fluid" narrative still has a solid anchor for SEO and sharing.

## Creating a Fragment (The Director's Chair)

When you create a Story Fragment, you are not writing a document. You are staging a scene.

1. **Access Creation**: Navigate to Content → "Create New" → "Web Page (Story Fragment)".
2. **The Metadata**:
   - **Title**: The headline of the scene.
   - **Slug**: The entry point (auto-generated but editable).
   - **Description**: The "trailer" for search engines (SEO).
3. **The Staging**: Add **Panes** to build the flow.

### The Anatomy of a Fragment: Panes

A Fragment is composed of **Panes**.
Think of a Pane not just as a "block of text," but as a **Sensor**.

- **Text Panes**: The dialogue.
- **Media Panes**: The visual context.
- **Interactive Panes**: The "Handshake" (Buttons, Forms, Belief Widgets).
- **Code Hooks**: Custom functionality for the bespoke builder.

**Pro Tip:** Don't build wall-to-wall text. Build one Pane at a time. Each Pane acts as a distinct listening device for our Signal Analytics.

## Hidden Doors (Belief-Driven Content)

This is the engine of the **Mass-Produced Handshake**.
You can configure any Pane to act as a **Hidden Door** - content that is invisible by default and only reveals itself when the user signals intent.

### Visibility Rules

You don't need code to do this. You simply set the conditions:

**1. The Invite (Show Conditions)**

- `Interest=BELIEVES_YES` → The user admitted they are interested. **Open the door.**
- `Role=Developer` → The user identified as technical. **Show the API docs.**

**2. The Filter (Hide Conditions)**

- `Experience=Beginner` → **Hide** the complex jargon.
- `Budget=Student` → **Hide** the Enterprise pricing plan.

### Progressive Disclosure

This allows you to pack a single Story Fragment with deep value without overwhelming the visitor. The page grows as the relationship deepens.

1. **The Visit**: User sees the "Lobby" (Default content).
2. **The Signal**: User interacts with a widget.
3. **The Reveal**: The Fragment adapts instantly via HTMX, opening the Hidden Door.

## Signal Analytics (Listening)

Because Tract Stack is server-side, we don't just track "Hits." We track **Attention**.
Every Story Fragment automatically captures the pulse of the reader:

- `PAGEVIEWED`: They entered the room.
- `ENTERED`: They scrolled to a specific Pane.
- `READ`: They stopped to listen (High dwell time).
- `CLICKED`: They shook your hand (Interaction).
- `GLOSSED`: They ignored it. (This tells you to rewrite the scene).

## SEO: Concrete in a Fluid World

You might worry: _If the content is dynamic, can Google see it?_
**Yes.**

Tract Stack uses **Semantic Integrity**. Even though the experience is adaptive for the human, the underlying structure is extracted as clean, concrete Markdown for the bot.

- **Meta Tags**: Auto-generated or custom-defined.
- **Open Graph**: Optimized for social sharing (Twitter/LinkedIn).
- **Schema**: Structured data baked in.

## Content Strategy: Designing the Journey

Don't just fill boxes. **Design the Signal.**

### The "Ask" (Widget Placement)

Where do you put the **Belief Widget**?

- **The Hook**: Place it early to let them define their journey immediately.
- **The Bridge**:
