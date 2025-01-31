---
title: Custom code hooks
description: Customize your Tract Stack
---

Tract Stack is a content-first experience and intended to require no-code. However, there are scenarios where you may need code! A pricing table or custom hero section may warrant a special touch.

A story fragment (e.g. web page in your Tract Stack) may include a custom component.

## Custom set-up

This will require server access.

### Wire up a new code hook

Your Tract Stack [project](/basics/structure/) has a `~/src/tractstack-storykeep/src/custom` folder.

- edit the `CodeHook.astro` file

```js
---
import type { ResourceDatum } from "@/types";
import CustomHero from "./CustomHero.astro";

export interface Props {
  target: string;
  resources?: ResourceDatum[] | null;
  options?: string | null;
}

const { target /* resources, options */ } = Astro.props;

export const components = {
  "custom-hero": true,
};
---

{target === "custom-hero" ? <CustomHero /> : <div>Code hook not found</div>}
```
