// tests/components/SomeComponents.nuxt.spec.ts
import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { Footer } from '#components'

it('can mount some component', async () => {
    const component = await mountSuspended(Footer)
    expect(component.text()).toMatchInlineSnapshot(`"For The Life, Copyright @2024TermsPrivacy"`    )
})