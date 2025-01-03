// https://nuxt.com/docs/api/configuration/nuxt-config
// import PrimeVue from 'primevue/config';
import {MyPreset} from './myTheme'
import ViteYaml from '@modyfi/vite-plugin-yaml';
import {firebaseConfig} from './firebaseConfig'
// https://nuxt.com/docs/api/configuration/nuxt-config
// import path from 'node:path'

export default defineNuxtConfig({
  runtimeConfig: {avinash:'mane'},
  vite:{
    plugins: [
      ViteYaml(), // you may configure the plugin by passing in an object with the options listed below
    ],},
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/content',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    'nuxt-vuefire',
    'nuxt-auth-utils',
    '@pinia/nuxt',
    '@nuxtjs/leaflet',
    '@nuxt/test-utils/module'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  // plugins: [
  //   ViteYaml(), // you may configure the plugin by passing in an object with the options listed below
  // ],
  routeRules: {
    '/': { prerender: false }
  },
  rules: [
    {
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    }
  ],
  content: {
    sources: {
      // blog: {
      //   driver: "fs",
      //   prefix: "/blog",
      //   base: path.resolve(__dirname, "articles")
      // },
      // github: {
      //   driver: "github",
      //   prefix: "/notes/",
      //   repo: "oneminch/notes",
      //   branch: "main",
      //   dir: "Glossary"
      // },
      github1: {
        driver: "github",
        prefix: "/remote",
        repo: "avinashmane/forthelife-content",
        branch: "master",
        dir: "/"
      }
    },
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
  hooks: {
    "content:file:beforeInsert": (document) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text)

        document.readingTime = time
      }
    }
  },
  primevue: {
    options: {
        theme: {
            preset: MyPreset
        }
    },
  },

  vuefire: {
    // auth: true,
    config: firebaseConfig,
    avinash:'mane',
  },
  css: [],
  compatibilityDate: '2024-11-08'
})

// 'primevue/resources/themes/aura-light-green/theme.css'