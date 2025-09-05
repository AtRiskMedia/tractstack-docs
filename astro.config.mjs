import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tractstack.org",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: "Tract Stack | Build recipes + docs",
      description: "free web press by At Risk Media",
      logo: {
        light: "./src/assets/tractstack.svg",
        dark: "./src/assets/tractstack-dark.svg",
        replacesTitle: true,
      },
      // Social links in array format
      social: [
        {
          label: "GitHub",
          href: "https://github.com/AtRiskMedia/tractstack-docs",
          icon: "github",
        },
      ],
      customCss: ["./src/styles/custom.css", "./src/styles/tailwind.css"],
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://tractstack.org/og.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:logo",
            content: "https://tractstack.org/oglogo.png",
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
        //{
        //  label: "Examples",
        //  items: [
        //    {
        //      label: "Sites built with Tract Stack",
        //      link: "/examples/",
        //    },
        //    {
        //      label: "Making Sneakypedia",
        //      link: "/examples/sneakypedia",
        //    },
        //  ],
        //  collapsed: true,
        //},
        {
          label: "Core Concepts",
          items: [
            { label: "Pressed by Tract Stack", link: "/concepts/tractstack/" },
            {
              label: "The best web stack",
              link: "/concepts/astro/",
            },
          ],
          collapsed: true,
        },
        {
          label: "Basics",
          items: [
            { label: "Project structure", link: "/basics/structure/" },
            { label: "Story Keep", link: "/basics/storykeep/" },
            { label: "Unfolding magic paths", link: "/basics/magic-paths/" },
            { label: "Story Fragments", link: "/basics/story-fragments/" },
            { label: "Context Pages", link: "/basics/context-pages/" },
            { label: "Impressions", link: "/basics/impressions/" },
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
      ],
    }),
  ],
});
