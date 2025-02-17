// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  components: true,
  runtimeConfig: {
    public: {
      twitchAuthorization: process.env.TWITCH_AUTHORIZATION,
      twitchClientId: process.env.TWITCH_CLIENT_ID,
      twitchDefaultApi: process.env.BASIC_TWITCH_API_URL,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:map"; @import "assets/styles/mixin.scss";',
        },
      },
    },
  },
  modules: ['@nuxt/image'],
  nitro: {
    preset: 'vercel',
  },
})
