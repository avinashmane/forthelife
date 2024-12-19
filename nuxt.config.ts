// https://nuxt.com/docs/api/configuration/nuxt-config
// import PrimeVue from 'primevue/config';
const {MyPreset} from './myTheme'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content', 
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  primevue: {
    options: {
        theme: {
            preset: MyPreset
        }
    }
  },
  css: [],
  compatibilityDate: '2024-11-08'
})

'primevue/resources/themes/aura-light-green/theme.css'
