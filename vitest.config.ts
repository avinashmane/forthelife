import {defineVitestConfig} from '@nuxt/test-utils/config'
import { defineConfig } from 'vitest/config'
// import vue from '@vitejs/plugin-vue'

export default defineVitestConfig
    ({
        // plugins: [vue()],
        // any custom Vitest config you require
        test: {
            include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)','test/**/*.?(c|m)[jt]s?(x)'],
            environment : 'nuxt',
            // you can optionally set Nuxt-specific environment options
            // environmentOptions: {
            //   nuxt: {
            //     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
            //     domEnvironment: 'happy-dom', // 'happy-dom' (default) or 'jsdom'
            //     overrides: {
            //       // other Nuxt config you want to pass
            //     }
            //   }
            // }

            // browser: {
            //     provider: 'webdriverio',//'playwright', // or 'webdriverio'
            //     enabled: false,
            //     name: 'chromium', // browser name is required
            //   },
        }
    })