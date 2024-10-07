import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://tractstack.org",
  integrations: [
    starlight({
      title: "Tract Stack | Build recipes + docs",
      description:
        "the SEO-friendly builder for content-driven websites | conversion rate optimization made easy for YouTubers, evangelists, and influencers",
      logo: {
        light: "./src/assets/tractstack.svg",
        dark: "./src/assets/tractstack-dark.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/AtRiskMedia/tractstack-docs",
      },
      customCss: ["./src/styles/custom.css", "./src/styles/tailwind.css"],
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:title",
            content: "Tract Stack | Build recipes + docs",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content:
              "the SEO-friendly builder for content-driven websites | conversion rate optimization made easy for YouTubers, evangelists, and influencers",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://tractstack.org/og-tractstack-docs.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:logo",
            content: "https://tractstack.org/logo.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
        {
          tag: "script",
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=G-ZCLW23EDJR`,
            async: true,
          },
        },
        {
          tag: "script",
          content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZCLW23EDJR');
      `,
        },
      ],
      sidebar: [
        {
          label: "Start here",
          items: [
            {
              label: "Getting Started",
              link: "/",
            },
            { label: "Installation", link: "/start/installation/" },
            { label: "License", link: "/start/license/" },
          ],
        },
        {
          label: "Core Concepts",
          items: [
            {
              label: "Make a website that converts",
              link: "/concepts/astro/",
            },
            { label: "Pressed by Tract Stack", link: "/concepts/tractstack/" },
          ],
          collapsed: true,
        },
        {
          label: "Basics",
          items: [
            { label: "Project structure", link: "/basics/structure/" },
            { label: "Your story keep", link: "/basics/storykeep/" },
            { label: "Story fragments", link: "/basics/story-fragments/" },
            { label: "Panes", link: "/basics/panes/" },
            {
              label: "Content engagements",
              link: "/basics/content-engagements/",
            },
          ],
          collapsed: true,
        },
        {
          label: "Recipes",
          autogenerate: {
            directory: "recipes",
          },
          collapsed: true,
        },
        {
          label: "Integrations",
          autogenerate: {
            directory: "integrations",
          },
          collapsed: true,
        },
        {
          label: "Configuration",
          items: [{ label: "Env Settings", link: "/configuration/env/" }],
          collapsed: true,
        },
      ],
      social: {
        github: "https://github.com/AtRiskMedia/tractstack-docs",
        "x.com": "https://x.com/AtRiskMedia",
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
