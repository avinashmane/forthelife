<template>
    <hr />
    <div class="flex items-center bg-blue-300 justify-around mt-2 py-2">
        <div>

            {{ useHost().replace('default','') }}

            <a href="https://ForThe.life">For The Life, </a>
            <a :href="useBaseUrl()">Copyright @2024</a>
        </div>
        <NuxtLink href="/terms">Terms</NuxtLink>
        <NuxtLink href="/privacy">Privacy</NuxtLink>

    </div>
</template>