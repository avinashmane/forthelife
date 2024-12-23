<template>
    <hr />
    <div class="flex items-center bg-blue-300 justify-around mt-2 py-2">
        <div>

            {{ useHost().replace('default','') }}

            <a ref="https://ForThe.life">For The Life, </a>
            <a href="http://localhost:3000">Copyright @2024</a>
        </div>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>

    </div>
</template>