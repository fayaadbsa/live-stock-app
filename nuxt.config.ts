// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxthq/ui",
    // "@nuxtjs/axios",
    // "@nuxtjs/auth-next",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
  ],
  // auth: {
  //   // Options
  // },
  imports: {
    dirs: ["stores"],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      rootApi: "http://localhost:3000",
    },
  },
});
