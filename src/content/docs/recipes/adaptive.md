---
title: Magic paths
description: Adaptive content pathways
---

The medium that carries your narrative should be as dynamic and engaging as the story itself.

**One webpage. Many visitors.**

With a traditional website, that page is already pre-rendered and served without context to each visitor.

What if your webpage read more like a choose-your-own-adventure? What if it could automagically reveal just the right offer to the right person at the right time?

This is what Tract Stack was designed for.

## Facilitate zero-party disclosure

This is a content-driven website for a particular audience.

If you'll tailor your message based on specifics of your audience, Tract Stack allows you to do this.

Drop-in yes | no or likert scale prompts throughout the reader experience and visitors can self-identify through engagement/interaction. The user journey can unlock content pathways and adaptive calls-to-action.

There are 3 types of widgets available:

### Belief widget

Specify a `Belief Slug` (no spaces, letters only), specify a `Question Prompt`, and select a scale from `yn = Yes or no`, `tf = True or false`, `interest = Interested or not interested`, `agreement = agrees or disagrees`, `likert = strongly agrees, agrees, neither agrees nor disagrees, disagrees, strongly disagrees`

Any user who engages with this widget will have their response tagged and recorded in a privacy-first manner.

### Toggle belief widget

Specify a `Belief Slug` (no spaces, letters only), specify a `Question Prompt`.

Any user who engages with this widget will have their response tagged and recorded in a privacy-first manner.

### Identify As widget

IdentifyAs is a special case. It operates as a `Belief widget` but instead of selecting a scale you set an `Identify As target`.

Specify a `Belief Tag`, `Question Prompt`, and `Identify As target` (no spaces, letters only).

For instance: you may have content for three different user personas. Write an identify as widget into the website content and invite disclosure through the narrative. Belief Tag = `UseCase` and Identify As target could be `PersonaA`.

Once `UseCase=PersonaA` is set, special calls-to-action and offers will now be revealed all throughout the website.

## Content pathways

A story fragment (e.g. web page in your Tract Stack) may have _hidden_ content panes. These will show only under specified conditions.

### Display on matching belief

Through the belief widgets, users can disclose zero-party attributes about themselves. For instance, to specify a preference for non-technical information.

In your Story Keep it's easy to specify these conditions using a `selector=value` simple match. E.g. `UseCase=PersonaA`, `UseCase=PersonaB,PersonaC`, or `UseCase=*` which remains hidden if UseCase is unset, otherwise show

### Exclude on matching belief

Similarly, you can exclude a pane based on a matching criteria. It will show by default unless a match is found.
