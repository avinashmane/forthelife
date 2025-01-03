import { find, orderBy, filter, isObject } from 'lodash-es'
const isListable=(x)=>!x?.status?.includes('nolist')
  
export const useRacesStore = defineStore('races', () => {
    const { $racesRef } = useNuxtApp();
    const allRaces = useCollection($racesRef)
    
    const count = ref(10)
    const races = computed(() => orderBy(
        filter(allRaces.value, x => isListable(x) ),
        'Date', 'desc'))

    const doubleCount = computed(() => count.value * 2)

    function filterById(pattern) {
    //   debug(this.races)
      return filter(this.races, x=>RegExp(pattern).test(x?.id))
    }
  
    return { count, races, allRaces, doubleCount, 
             filterById }
  })