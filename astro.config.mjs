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
          label: "Getting Started",
          items: [
            {
              label: "Getting Started",
              link: "/",
            },
            {
              label: "What is TractStack?",
              link: "/getting-started/what-is-tractstack/",
            },
            { label: "Quick Start", link: "/getting-started/quick-start/" },
            {
              label: "Core Concepts Overview",
              link: "/getting-started/core-concepts-overview/",
            },
            {
              label: "License & Pricing",
              link: "/getting-started/license-pricing/",
            },
          ],
        },
        {
          label: "Installation",
          items: [
            { label: "Prerequisites", link: "/installation/prerequisites/" },
            {
              label: "Development Setup",
              link: "/installation/development-setup/",
            },
            {
              label: "Production Deployment",
              link: "/installation/production-deployment/",
            },
            {
              label: "SSL Configuration",
              link: "/installation/ssl-configuration/",
            },
          ],
        },
        {
          label: "Configuration",
          items: [
            { label: "Initial Setup", link: "/configuration/initial-setup/" },
            {
              label: "Environment Variables",
              link: "/configuration/environment-variables/",
            },
            {
              label: "Database Options",
              link: "/configuration/database-options/",
            },
            { label: "Domain & DNS", link: "/configuration/domain-dns/" },
          ],
        },
        {
          label: "User Guide",
          items: [
            {
              label: "StoryKeep Dashboard",
              link: "/user-guide/storykeep-dashboard/",
            },
            { label: "Analytics", link: "/user-guide/analytics/" },
            {
              label: "Content Management",
              link: "/user-guide/content-management/",
            },
            { label: "Branding", link: "/user-guide/branding/" },
            { label: "User Roles", link: "/user-guide/user-roles/" },
          ],
        },
        {
          label: "Creating Content",
          items: [
            {
              label: "Story Fragments",
              link: "/creating-content/story-fragments/",
            },
            {
              label: "Context Pages",
              link: "/creating-content/context-pages/",
            },
            {
              label: "Menus & Navigation",
              link: "/creating-content/menus-navigation/",
            },
            {
              label: "Media Management",
              link: "/creating-content/media-management/",
            },
          ],
        },
        {
          label: "Magic Paths",
          items: [
            {
              label: "Belief System Overview",
              link: "/magic-paths/belief-system-overview/",
            },
            { label: "Widget Types", link: "/magic-paths/widget-types/" },
            {
              label: "Visibility Rules",
              link: "/magic-paths/visibility-rules/",
            },
            {
              label: "Progressive Disclosure",
              link: "/magic-paths/progressive-disclosure/",
            },
          ],
        },
        {
          label: "Advanced Features",
          items: [
            {
              label: "Custom Code Hooks",
              link: "/advanced-features/custom-code-hooks/",
            },
            {
              label: "Impressions System",
              link: "/advanced-features/impressions-system/",
            },
            {
              label: "Analytics & Tracking",
              link: "/advanced-features/analytics-tracking/",
            },
            {
              label: "Multi-Tenant Management",
              link: "/advanced-features/multi-tenant-management/",
            },
          ],
        },
        {
          label: "Integrations",
          items: [
            {
              label: "Google Analytics",
              link: "/integrations/google-analytics/",
            },
            { label: "Assembly AI", link: "/integrations/assembly-ai/" },
            { label: "Resend Email", link: "/integrations/resend-email/" },
            { label: "Bunny CDN", link: "/integrations/bunny-cdn/" },
          ],
        },
        {
          label: "Operations",
          items: [
            {
              label: "Service Management",
              link: "/operations/service-management/",
            },
            { label: "Build System", link: "/operations/build-system/" },
            {
              label: "Monitoring & Logs",
              link: "/operations/monitoring-logs/",
            },
            { label: "Troubleshooting", link: "/operations/troubleshooting/" },
          ],
        },
      ],
    }),
  ],
});
