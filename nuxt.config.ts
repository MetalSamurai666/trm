// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  spaLoadingTemplate: './app-loading.html',
  modules: [ 
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  nitro: {
    compressPublicAssets: true
  },
  i18n: {
    detectBrowserLanguage: false,
    defaultLocale: 'uz',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: "uz",
        iso: "uz",
        name: "O`zb",
      },
      {
        code: "uzk",
        iso: "uzk",
        name: "Ўзб",
      },
      {
        code: "ru",
        iso: "ru",
        name: "Ру",
      },
      {
        code: "en",
        iso: "en",
        name: "Eng",
      },
    ],
  },
})
