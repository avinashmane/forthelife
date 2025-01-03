<template>
  <!-- {{ raceStore.allRaces.map(x => x?.id) }} -->
  <!-- {{raceStore.filterById(pattern)}} -->

  <DataView :value="raceStore.filterById(pattern)" paginator :rows="10" class="w-full" :pt="{content:{ class: 'flex flex-wrap justify-around gap-2'}}">
    <!-- <template #header>
              :sortOrder="sortOrder" :sortField="sortField"
                <Select v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Date" @change="onSortChange($event)" />
            </template> -->

    <template #list="slotProps">

      <div class="flex flex-wrap justify-around bg-slate-100 my-2 gap-2 w-[80%] max-w-80 md:w-80"
          v-for="(r, index) in slotProps.items" :key="index">
          <RaceCard :key="index" :race="r" type="mini" />
      </div>
    </template>

    <template #empty>

      <div class="mx-auto text-center">Checking for data
        <ProgressSpinner></ProgressSpinner>
      </div>
    </template>
  </DataView>
</template>
  
<script setup>
defineProps([
  'pattern',
])
import { computed } from 'vue';
import RaceCard from "../../components/races/RaceCard.vue"
import { find, orderBy, filter, pick } from 'lodash-es'
const route = useRoute()
const raceStore = useRacesStore()
// const db = useFirestore()
// const { $racesRef } = useNuxtApp();
// const allRaces = useCollection($racesRef)//filter(,x=>!x?.status?.includes('nolist'))

// const isListable=(x)=>!x?.status?.includes('nolist')
// const races = computed(() => orderBy(
//   filter(allRaces.value, x => isListable(x)),
//   'Date', 'desc'))
debug('route.params', route.params,)
const ifRaceId = () => route.params?.id?.length
const currentRace = computed(() => find(raceStore.races, x => x.id == route.params.id))

useHead({
  title: ifRaceId() ? `Race - ${currentRace.value?.Name}` : 'Run-Pix Races',
  meta: [
    {
      name: ifRaceId() ? `RunPix Race - ${currentRace.value?.Name} held on ${currentRace.value?.Date} at ${currentRace.value?.Location}` : 'Run-Pix Races',
      content: 'Fast and AI driver sperts event management timings, certificate, photos'
    }
  ],
  bodyAttrs: {
    class: 'test'
  },
})


</script>