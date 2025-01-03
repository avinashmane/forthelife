// vitest.config.ts
import { defineVitestConfig } from "file:///home/avinash/forthelife/node_modules/.pnpm/@nuxt+test-utils@3.15.1_@types+node@22.10.2_@vue+test-utils@2.4.6_happy-dom@16.2.6_magicast@0_pc5w3zitkozecz2ldswdiyx3kq/node_modules/@nuxt/test-utils/dist/config.mjs";
import "file:///home/avinash/forthelife/node_modules/.pnpm/vitest@2.1.8_@types+node@22.10.2_@vitest+browser@2.1.8_happy-dom@16.2.6_msw@2.7.0_@types+node_vdxihwfrwuge746wpm22gebowm/node_modules/vitest/dist/config.js";
var vitest_config_default = defineVitestConfig({
  // plugins: [vue()],
  // any custom Vitest config you require
  test: {
    include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)", "test/**/*.?(c|m)[jt]s?(x)"],
    environment: "nuxt"
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
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2F2aW5hc2gvZm9ydGhlbGlmZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYXZpbmFzaC9mb3J0aGVsaWZlL3ZpdGVzdC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYXZpbmFzaC9mb3J0aGVsaWZlL3ZpdGVzdC5jb25maWcudHNcIjtpbXBvcnQge2RlZmluZVZpdGVzdENvbmZpZ30gZnJvbSAnQG51eHQvdGVzdC11dGlscy9jb25maWcnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJ1xuLy8gaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVZpdGVzdENvbmZpZ1xuICAgICh7XG4gICAgICAgIC8vIHBsdWdpbnM6IFt2dWUoKV0sXG4gICAgICAgIC8vIGFueSBjdXN0b20gVml0ZXN0IGNvbmZpZyB5b3UgcmVxdWlyZVxuICAgICAgICB0ZXN0OiB7XG4gICAgICAgICAgICBpbmNsdWRlOiBbJyoqLyoue3Rlc3Qsc3BlY30uPyhjfG0pW2p0XXM/KHgpJywndGVzdC8qKi8qLj8oY3xtKVtqdF1zPyh4KSddLFxuICAgICAgICAgICAgZW52aXJvbm1lbnQgOiAnbnV4dCcsXG4gICAgICAgICAgICAvLyB5b3UgY2FuIG9wdGlvbmFsbHkgc2V0IE51eHQtc3BlY2lmaWMgZW52aXJvbm1lbnQgb3B0aW9uc1xuICAgICAgICAgICAgLy8gZW52aXJvbm1lbnRPcHRpb25zOiB7XG4gICAgICAgICAgICAvLyAgIG51eHQ6IHtcbiAgICAgICAgICAgIC8vICAgICByb290RGlyOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vcGxheWdyb3VuZCcsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgICAgLy8gICAgIGRvbUVudmlyb25tZW50OiAnaGFwcHktZG9tJywgLy8gJ2hhcHB5LWRvbScgKGRlZmF1bHQpIG9yICdqc2RvbSdcbiAgICAgICAgICAgIC8vICAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIG90aGVyIE51eHQgY29uZmlnIHlvdSB3YW50IHRvIHBhc3NcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gYnJvd3Nlcjoge1xuICAgICAgICAgICAgLy8gICAgIHByb3ZpZGVyOiAnd2ViZHJpdmVyaW8nLC8vJ3BsYXl3cmlnaHQnLCAvLyBvciAnd2ViZHJpdmVyaW8nXG4gICAgICAgICAgICAvLyAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAvLyAgICAgbmFtZTogJ2Nocm9taXVtJywgLy8gYnJvd3NlciBuYW1lIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgIH1cbiAgICB9KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFAsU0FBUSwwQkFBeUI7QUFDL1IsT0FBNkI7QUFHN0IsSUFBTyx3QkFBUSxtQkFDVjtBQUFBO0FBQUE7QUFBQSxFQUdHLE1BQU07QUFBQSxJQUNGLFNBQVMsQ0FBQyxvQ0FBbUMsMkJBQTJCO0FBQUEsSUFDeEUsYUFBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBaUJsQjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
