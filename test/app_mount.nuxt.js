import { it, expect } from 'vitest'
// ---cut---
// tests/components/SomeComponents.nuxt.spec.ts
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '~/app.vue'

// tests/App.nuxt.spec.ts
it('can also mount an app', async () => {
    const component = await mountSuspended(App, { route: '/test' })
    expect(component.html()).include.toMatchInlineSnapshot(`
    <div class="flex items-center bg-blue-300 justify-around mt-2 py-2" data-v-inspector="components/Footer.vue:3:5">
        <div data-v-inspector="components/Footer.vue:4:9"> 
            <a data-v-inspector="components/Footer.vue:8:13">For The Life, </a>
            <a href="http://localhost:3000" data-v-inspector="components/Footer.vue:9:13">
                Copyright @2024
            </a>
        </div>
        <a href="/terms" data-v-inspector="components/Footer.vue:11:9">Terms</a>
        <a href="/privacy" data-v-inspector="components/Footer.vue:12:9">Privacy</a>
    </div>
    `)
})
