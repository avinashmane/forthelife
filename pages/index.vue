<template>
    <!-- <DevOnly>
        <div class="absolute right-2 opacity-50 top-10 mx-5 mx-auto bg-blue-100">
            Dev Only: Home page for {{ useHost() }}  
        </div>
    </DevOnly> -->

    <!-- {{subDomain}} -->
    <div v-if="site == 'default'">
        <h1 class="text-2xl">Domains</h1>
        <SubDomain />
    </div>


    <iframe v-else-if="subDomain.type == 'forwardURL'" class="w-full h-screen" :src="subDomain.to"></iframe>
    <div v-else-if="subDomain.type == 'redirect'" v-on="navigateTo(subDomain.to)">Redirecting to {{ subDomain.to }}</div>
    
    <!-- <div v-else-if="subDomain.type == 'localContent'" class="m-4">
        {{ site }}
        <ContentDoc :path="`/remote/subdomains/${site}`">

            <template #default="{ doc }">
                ss
                <ContentRenderer :value="doc" />
            </template>

            <template #not-found>
                {{ site }}sdsd
            </template>
        </ContentDoc>
    </div> -->
    <div v-else class="container m-1 p-1 md:m-4 md:p-4 min-h-screen " >
        <ContentDoc :path="`${subDomain.to}`">

            <template #default="{ doc }">
                <ContentRenderer :value="doc" />
            </template>

            <template #not-found>
                <!-- {{ subDomain }} -->
                <h2>{{ subDomain.to }} document not found for {{ useRequestURL() }}</h2>
            </template>
        </ContentDoc>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import config from '../config';
const site = ref(useHost())
const subDomain = ref(config.subDomains[site.value] || { type: 'content' })
// import _subDomains from '~/config/subdomains.yaml'
const subDomains = ref(config.subDomains)
// const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
// debug(config.subDomains,useHost())
// console.log(`${JSON.stringify(subDomain.value)} Directing to ${subDomain.value.to}`)
if (subDomain.value.type == 'redirect') {
    
    navigateTo(subDomain.value.to)
}


useHead({
    title: subDomain.value.title,
    meta: [
        { name: 'description', content: subDomain.value.description },
        { name: "google-site-verification", content: "Av7j1M46bxy_jgJ35Fe5r6ANfgFBkycLBSNkL5Pvom8" },
        { name: "keywords", content: subDomain.value.keywords || subDomains.value['default'].keywords }
    ],

})

useSeoMeta
    ({
        title: subDomain.value.title,
        ogTitle: subDomain.value.title,
        description: subDomain.value.description,
        ogDescription: subDomain.value.description,
        ogImage: subDomain.value.image,
        //   twitterCard
        // : 'summary_large_image',
    })

</script>