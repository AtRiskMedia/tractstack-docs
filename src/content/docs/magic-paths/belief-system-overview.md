---
title: The Belief System
description: Privacy-first personalization via voluntary disclosure
---

The "Old Web" relies on Surveillance (Cookies, Pixels, Tracking). It guesses who the user is by spying on them.
**Tract Stack** relies on **Conversation**.

The Belief System is the core technology that powers our **Adaptive Engine**. It allows visitors to voluntarily declare who they are and what they want. In exchange, the site adapts instantly to match their needs.

## The Philosophy: Ask, Don't Steal

We facilitate **Zero-Party Disclosure**.
Instead of stealing data from the user's browser history, we simply ask them a question.

1. **The Ask:** The user sees a **Belief Widget** (e.g., "Are you a Developer or a Marketer?").
2. **The Handshake:** The user answers.
3. **The Memory:** The system stores this "Belief" in a private, temporary session.
4. **The Reveal:** The content adapts immediately—without a page reload—revealing the "Hidden Doors" relevant to that user.

**The Result:** Authentic personalization without the creepiness of surveillance.

## How Beliefs Work

A "Belief" is simply a piece of data attached to the user's current session. It is temporary by default.

### 1. Identity Beliefs (Who are you?)

Used to sort the audience into roles.

- **The Widget:** "Identify As"
- **The Data:** `UseCase=Developer`, `UseCase=Agency_Owner`, `Budget=Enterprise`.
- **The Adaptation:** A Developer sees API docs. An Agency Owner sees ROI charts.

### 2. Scalar Beliefs (How do you feel?)

Used to measure the temperature of the room.

- **Yes/No (`yn`):** Simple binary choices. ("Do you want to see technical specs?")
- **Interest (`interest`):** Engagement measurement. ("Are you interested in Wholesale Pricing?")
- **Likert Scale (`likert`):** Nuanced opinion. ("Strongly Agree" to "Strongly Disagree").

## Visibility Rules (The Velvet Rope)

You don't write code to personalize the page. You just set the rules on your **Panes**.

### Held Beliefs (The Ticket In)

"Show this content ONLY IF the user believes X."

- **Rule:** `UseCase=Developer`
- **Result:** The "API Reference" pane becomes visible.
- **Wildcards:** `UseCase=*` (Show if they have told us _any_ role).

### Withheld Beliefs (The Bouncer)

"Hide this content IF the user believes Y."

- **Rule:** `Experience=Beginner`
- **Result:** The "Advanced Configuration" pane is hidden to prevent confusion.

### The Match-Across Logic

Real life is complex. Sometimes you need to check multiple IDs.

- **AND Logic:** `Role=Dev AND Experience=Senior` (Must match both).
- **OR Logic:** `Role=Dev OR Role=CTO` (Matches either).

## The Widgets (The Interface)

How does the user tell you what they believe? Through **Belief Widgets**.
These are not boring form fields. They are interactive elements placed inside the narrative flow.

- **The Toggle:** A quick switch. (e.g., "Show Technical Details").
- **The Dropdown:** A scale of preference. (e.g., "How large is your team?").
- **The Identifier:** A button group. (e.g., "I am a: Student | Professional | Hobbyist").

## The Physics (HTMX & Real-Time)

This is where the magic happens.
In a traditional CMS, if you fill out a form, the page reloads. The spell is broken.

Tract Stack uses **HTMX** to handle the negotiation in the background.

1. User clicks "I am a Developer."
2. The browser whispers to the server (POST).
3. The server updates the session.
4. The server instantly repaints _only_ the parts of the page that need to change.

It is seamless. It is fast. It feels like a living application, not a static document.

## Privacy & Persistence

- **Session-Based:** By default, beliefs live only as long as the visit. When they close the tab, the slate is wiped clean.
- **Voluntary Sync:** We offer an optional, fingerprint-based sync that allows beliefs to travel across tabs or devices, but _only_ if you configure it.

We do not sell this data. We do not aggregate it. It belongs to the session, and the session belongs to the user.

---

_The "Free Web" Press by At Risk Media_
