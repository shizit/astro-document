export const SITE = {
  title: "🎨 Astro Design System",
  description: "Astro theme for design systems",
  defaultLanguage: "en_US",
  twitter: "@jordienr",
  github: "jordienr",
  linkedin: "jordienric",
};

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "@jordienr",
};

export const SIDEBAR = [
  { text: "Core", header: true },
  { text: "Introduction", link: "/core/introduction" },
  { text: "Colors", link: "/core/colors" },
  { text: "Typography", link: "/core/typography" },
  { text: "Shadows", link: "/core/shadows" },

  { text: "Components", header: true },
  { text: "Buttons", link: "/components/buttons" },
  { text: "Input", link: "/components/input" },
  { text: "Status pills", link: "/components/status-pill" },
  { text: "Table", link: "/components/table" },
];
