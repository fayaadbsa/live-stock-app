// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "@sidebase/nuxt-auth"],
  auth: {
    origin: process.env.NUXT_PUBLIC_ROOT_API ?? "",
    enableGlobalAppMiddleware: true,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    googleClientId: process.env.NUXT_GOOGLE_CLIENT_ID ?? "",
    googleClientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET ?? "",
    authSecret: process.env.NUXT_AUTH_SECRET ?? "",
    public: {
      rootApi: process.env.NUXT_PUBLIC_ROOT_API ?? "",
    },
  },
});
