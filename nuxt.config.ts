// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true,
  },

  modules: ["@nuxt/eslint"],

  eslint: {
    config: {
      standalone: false,
    },
  },

  nitro: {
    preset: "vercel",
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  hooks: {
    "build:before": function () {
      console.log("🔧 Nuxt build starting...");
    },
  },
});
