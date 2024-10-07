---
title: Content engagements
description: Where authenticity gains traction
---

Tract Stack is made for content-driven websites. Where authenticity gains traction.

Out-of-the-box it's watching where everyone places their attention. It's learning as readers engage with your site.

## Event types

There are a variety of event types.

#### GLOSSED / READ

Each section of every page is a touch point in each visitors' journey. In a privacy-first manner, we'll monitor which content is being glossed over `on screen for 7+ seconds` vs. read `on screen for 42+ seconds`

#### CLICKED

In a privacy-first manner, we'll monitor which buttons get clicked on.

#### PAGEVIEWED

In a privacy-first manner, we'll monitor which pages get visited.

#### ENTERED

In a privacy-first manner, we'll monitor where traffic arrives from. If it's tagged with [utm params](https://en.wikipedia.org/wiki/UTM_parameters) we'll tag the ensuing visit accordingly.

## Privacy-first analytics

Tract Stack will log the [HTTP referer](https://en.wikipedia.org/wiki/HTTP_referer) and any [UTM](https://en.wikipedia.org/wiki/UTM_parameters). It also uses a tiny amount of localStorage to maintain application state.

There's a lighting bolt icon in the menu header of every Tract Stack. By default it is crossed out. Under the default scenario, all necessary localStorage data is used during the current session only. If localStorage data exists on a subsequent (e.g. hence 1 hr) visit, it is deleted and not accessed.

A user may elect to toggle on `session memory`. This allows the localStorage to be re-accessed on subsequent visits. All preferences and beliefs are thereby retained for an uninterrupted content experience.

**Note: Google Analytics can be activated if desired.**
