---
title: The Impressions System
description: Contextual CTAs. The tap on the shoulder.
---

A Pop-Up is a salesman who kicks down your front door.
An **Impression** is a waiter who catches your eye just as you finish your drink.

In **Tract Stack**, we don't assault the user. We wait for them.

## The Philosophy: Reading the Room

Most websites are blind. They show the same "Sign Up for Our Newsletter" modal whether the user is reading about your pricing or your history.

**Impressions are bound to Panes.**
They are dormant until the user scrolls to a specific part of the story.

1. **The Scroll:** The user reads a Pane about "High-Performance APIs."
2. **The Trigger:** The system sees them reading.
3. **The Signal:** A small, red notification badge animates in the header.

It doesn't block their view. It just lets them know: _"I have something relevant to say about what you're reading right now."_

## The Mechanics: Polite Persistence

### 1. The Header Icon (The "Unread Message")

When an Impression triggers, we don't cover the content. We light up the **Header Icon**.

- **The Bounce:** A subtle animation to draw the eye.
- **The Badge:** A number count (e.g., "2") showing how many relevant offers they’ve unlocked.
- **The Psychology:** It feels like a notification, not an ad. People hate ads. They _love_ checking notifications.

### 2. The Overlay (The Conversation)

When the user clicks the icon, the **Overlay** slides in.

- **The Pitch:** Title, Body, and Button.
- **The Cycle:** If they triggered multiple Impressions (e.g., they read about "API" and "Pricing"), the overlay auto-cycles through them like a deck of cards.
- **The Dismissal:** A clear "X". If they aren't interested, we let them go. We don't nag.

## The Anatomy of the Ask

Every Impression is a structured offer.

- **Title:** The Hook.
- **Body:** The Value Proposition.
- **Action:** The Destination.

### ActionLisp (The Navigation Brain)

We don't just use dumb URL links. We use **ActionLisp** to ensure the navigation is fluid and precise.

- **Go to a scene:** `(goto (storyfragment "pricing"))`
- **Open a reference:** `(goto (context "security-policy"))`
- **Leave the site:** `(goto (url "https://cal.com/book-meeting"))`

## Analytics: Measuring the Spark

A click on a navigation link tells you they want to move.
A click on an **Impression** tells you they were _persuaded_.

When a user clicks an Impression, we track it as a high-value event (`Impression: CLICKED`). We record exactly which Pane triggered it.

- _Insight:_ "They read the 'Enterprise Security' pane, saw the 'Book a Demo' impression, and clicked."
- _Result:_ You know exactly which paragraph of your copy is closing the deal.

## Best Practices

**Don't Spam.**
Just because you _can_ attach an Impression to every Pane doesn't mean you should.

**Be Contextual.**

- **Bad:** Showing a "Contact Us" impression on every page.
- **Good:** Showing a "Download the Specs" impression only when they scroll to the "Technical Architecture" pane.

**The Golden Rule:**
Only tap them on the shoulder if you have something to give them.

---

_The "Free Web" Press by At Risk Media_
