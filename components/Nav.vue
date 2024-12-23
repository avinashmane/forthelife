
<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <ClientOnly>
                    <img :src="getSiteLogo()" class="h-8"/>
                </ClientOnly>
                <DevOnly>
                    <a href="localhost:3000/">🏠</a>
                </DevOnly>
                
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <NuxtLink :to="item.to"
                     v-ripple class="flex items-center" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                </NuxtLink>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <!-- <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" /> -->
                    <Avatar :image="auth?.currentUser?.photoURL || '/img/for-the-life.png' " shape="circle" alt="Profile"/>  
                    <!-- https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" -->
                </div>
            </template>
        </Menubar>
    </div>
    <!-- <pre>{{ navigation }}</pre> -->
</template>

<script setup>
import { ref } from "vue";
import { getAuth } from 'firebase/auth'
import {mapKeys,find,keys} from 'lodash-es'

const contentNavToMenuMap={
    '_path':'to',
    'title':'label'
}
const contentNavToMenu=(x,path=null)=>{
    if (path) { //"_path": "/org",
        return find(x,{_path:path})?.children?.map(entry=>mapKeys(entry,(v,k)=>(contentNavToMenuMap?.[k] || k)))
    } else 
        return x?.map(entry=>mapKeys(entry,(v,k)=>(contentNavToMenuMap?.[k] || k)))
}
const auth = ref(getAuth())



const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())


const items = computed(()=>[
    {
        label: 'Home',
        icon: 'pi pi-home',
        to: '/'
    },
    {
        label: 'Races',
        icon: 'pi pi-flag',
        to: '/races',
        forSite: 'pcmcrunners'
    },
    {
        label: 'Domains',
        icon: 'pi pi-document',
        badge: 2,
        items: contentNavToMenu(navigation.value,'/subdomains'),
        forSite: 'default'
    },
    {
        label: 'About',
        items: [
            {
                label: 'About',
                icon: 'pi pi-info',
                to: '/about'
            },
            {
                separator: true
            },
            {
                label: 'Terms of use',
                icon: 'pi pi-info',
                to: '/terms'
            },
            {
                label: 'Privacy',
                icon: 'pi pi-lock',
                to: '/privacy'
            },
        ]
    }
].filter(x=>!x.hasOwnProperty('forSite')||x.forSite==useHost()));

</script>
