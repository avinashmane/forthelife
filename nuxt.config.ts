// https://nuxt.com/docs/api/configuration/nuxt-config
// import PrimeVue from 'primevue/config';
import {MyPreset} from './myTheme'

import {firebaseConfig} from './firebaseConfig'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  devtools: { enabled: true },
  
  modules: [
    '@nuxt/content',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    'nuxt-vuefire',
    'nuxt-auth-utils'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  content: {
    api: {
      baseURL: '/api/_my_content'
    },
    documentDriven: {
      // Will fetch navigation, page and surround.
      navigation: true,
      page: true,
      surround: true,
      // Will fetch `content/_theme.yml` and put it in `globals.theme` if present.
      globals: {
        theme: {
          where: {
            _id: 'content:_theme.yml'
          },
          without: ['_']
        }
      },
      // Will use `theme` global to search for a fallback `layout` key.
      layoutFallbacks: ['theme'],
      // Will inject `[...slug].vue` as the root page.
      injectPage: true
    },
    markdown:{
      anchorLinks: true
    }
    
  },
  
  primevue: {
    options: {
        theme: {
            preset: MyPreset
        }
    }
  },

  vuefire: {
    // auth: true,
    config: firebaseConfig
  },

  css: [],
  compatibilityDate: '2024-11-08'
})

'primevue/resources/themes/aura-light-green/theme.css'