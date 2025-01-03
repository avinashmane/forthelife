import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  // If you want to keep running your existing tests in Node.js, uncomment the next line.
  // 'vitest.config.ts',
  {
    extends: 'vitest.config.ts',
    test: {
      include: [
        'test/**/*.?(c|m)[jt]s?(x)',
        'test/**/*.[jt]s',
        'test/**/*.unit.{test,spec}.ts',
      ],
      // browser: {
      //   enabled: true,
      //   name: 'chrome',
      //   provider: 'webdriverio',
      //   // https://webdriver.io
      //   providerOptions: {},
      // },
    },
  },
])
