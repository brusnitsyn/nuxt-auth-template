// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    cookie: "cookie"
  },
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-icon',
    '@hebilicious/authjs-nuxt'
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    authJs: {
      secret: process.env.AUTH_SECRET
    },
    yandex: {
      clientId: process.env.AUTH_YANDEX_CLIENT_ID,
      clientSecret: process.env.AUTH_YANDEX_CLIENT_SECRET
    },
    google: {
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET
    }
    // Discord, VK, GitHub etc... register Providers in server/api/auth/[...].ts
  }
})
