<template>
    <hr/>
    <div class="flex items-center bg-blue-300 justify-around mt-2 py-2">
        <div>
            <a ref="https://ForThe.life">For The Life</a> 
            Copyright @2024
        </div>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>

        <ClientOnly>
            <DevOnly>
                {{ useHost() }}
            </DevOnly>
        </ClientOnly>
    </div>
</template>