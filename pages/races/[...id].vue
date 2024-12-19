<template>
  <!-- id raceId is mentioned -->
  
  <div v-if="ifRaceId()" class="mx-auto w-[80%]">

    <!-- {{ currentRace }} -->
    <RaceCard :race="currentRace" type="full"></RaceCard>
    <hr/>
    <Button><NuxtLink :to="`/races`" > Back </NuxtLink></Button>
  </div>

  <!-- list of races -->
  <div v-else class="flex flex-wrap justify-around bg-slate-100 my-2 gap-2">
    <!-- {{ races }} -->
    <RaceCard v-for="r in races" 
      :key="r.id" 
      :race="r" 
      type="mini"/>

  </div>

  <!-- {{  races }} -->
</template>

<script setup>
import {computed} from 'vue';
import RaceCard from "../../components/races/RaceCard.vue"
import {find,orderBy,filter} from 'lodash-es'
const route = useRoute()

// const db = useFirestore()
const { $racesRef } = useNuxtApp();
const allRaces = useCollection($racesRef)//filter(,x=>!x?.status?.includes('nolist'))
const races = computed(()=>orderBy(
                    filter(allRaces.value,x=>!x?.status?.includes('nolist')),
                    'Date','desc'))
console.log('route.params', route.params,)
const ifRaceId=()=>route.params?.id?.length
const currentRace = computed(() => find(races.value,x=>x.id==route.params.id))

useHead({
  title: ifRaceId()? `Race - ${currentRace.value?.Name}`:'Run-Pix Races',
  meta: [
    { 
      name: ifRaceId()? `RunPix Race - ${currentRace.value?.Name} held on ${currentRace.value?.Date} at ${currentRace.value?.Location}`:'Run-Pix Races', 
      content: 'Fast and AI driver sperts event management timings, certificate, photos' 
    }
  ],
  bodyAttrs: {
    class: 'test'
  },
})
</script>