// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  srcDir: 'app',
  app: {
    head: {
      title: 'Reuben Limbu - Portfolio',
      meta: [
        { name: 'description', content: 'Portfolio of Reuben Limbu, UX Designer.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
