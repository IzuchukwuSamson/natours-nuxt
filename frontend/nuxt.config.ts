// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },
  app: {
    head: {
      title: "Natours | Explore The World",
      meta: [
        { name: "description", content: "Discover What Nature has to offer" },
        // <link />
      ],
      link: [
        {
          rel: "shortcut icon",
          type: "image/png",
          href: "@/assets/img/favicon.png",
        },
      ],
      // script: [{ src: "../assets/js/script.js" }],
    },
    // pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["@/assets/css/style.css"],

  modules: ["@pinia/nuxt"],
});
