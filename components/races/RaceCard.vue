<template>
    <Card :class="props.type=='mini'?'w-40':'w-full'">
        <template #header>

            <h1 class="text-lg mx-1 hover:text-clip">{{ race.Name }}</h1>
            <img :src="imgLink(race.coverPage)" class="object-cover h-48 mx-auto "/>
        </template>
        <template #content>
        <!-- mini -->
        <div v-if="props.type=='mini'" v-for="f in ['Date', 'Location']"
            class="text-sm">
            {{ race[f] }}
        </div>
        <!-- full -->
        <div v-else>
            <div v-for="v, f in omit(race,['id','coverPage'])" class="flex w-full justify-between">
                <span class="capitalize text-sm">{{ f }} :</span> 
                <span >
                    <a v-if="f.includes('link')" :href="linkify(v)" target="_blank" rel="noopener noreferrer">
                        🔗<i class="pi pi-external-link"></i></a>
                    <!-- {{ race }}  -->
                    {{ isArray(v) ? v.join(', ') : v}}
                </span>
            
            </div>

        </div>
        </template>
        <template #footer>
            <Button v-if="props.type=='mini'">
                <NuxtLink :to="`/races/${race.id}`">{{ race?.Name }} </NuxtLink>
            </Button>
            <Button v-else>
                <a :href="`http://run-pix.web.app/e/${race.id}`" target="_blank">
                    Edit </a>
            </Button>
            
        </template>
    </Card>
</template>

<script setup>
const props = defineProps({
    race: Object,
    type: String
})
import {omit,isArray,random} from 'lodash-es'

const imgLink=(x) => x ? `https://storage.googleapis.com/run-pix.appspot.com/processed/${race.id}/${x}`
                       : `/img/raceCover_${random(4)}.jpg`

const linkify=(x)=>`${x.includes('http') ? '' :'http://'}${x}`

const race = props.race
// console.log(race, random(4))
</script>