// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [ 
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  nitro: {
    compressPublicAssets: true
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: "uz",
        iso: "uz",
        name: "O`zb",
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
    defaultLocale: "uz"
  },
})
