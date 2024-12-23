<template>
    <!-- <DevOnly>
        <div class="absolute right-2 opacity-50 top-10 mx-5 mx-auto bg-blue-100">
            Dev Only: Home page for {{ useHost() }}  
        </div>
    </DevOnly> -->

    <!-- {{subDomain}} -->
    <SubDomain v-if="site=='default'" />

    <iframe v-else-if="subDomains[site].type=='forwardURL'" class="w-full h-screen" :src="subDomains[site]?.to"></iframe>
        
    <div v-else class="m-4">
        <!-- {{ navigation }} -->
        <ContentDoc :path="`/remote/subdomains/${site}`" >
    
            <template #default="{ doc }">
                <ContentRenderer :value="doc" />
            </template>
            <template #not-found>

                <ContentDoc :path="`/subdomains/${useHost()}`" >
                    <template #default="{ doc }">
                        <ContentRenderer :value="doc" />
                    </template>

                    <template #not-found>
                        <h1>{{ `/remote/subdomains/${useHost()}` }} document not found</h1>
                    </template>
                </ContentDoc>        
            </template>
        </ContentDoc>
    </div>
    <div>
    </div>

</template>

<script setup>
import {ref} from 'vue'
import config from '../config';
const site=ref(useHost())
const subDomain=ref(config.subDomains[site.value]||{type:'content'})
// import _subDomains from '~/config/subdomains.yaml'
const subDomains=ref(config.subDomains)
// const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
debug(config.subDomains,useHost())

</script>