<template>
  <Card :pt="{ content: { class: 'flex flex-wrap' } }">
    <template #content>
      <ContentList path="/areas">

        <template #default="{ list }">

          <div v-for="area in list[0].body" :key="area?._path" class="flex max-w-80 border rounded-lg m-2 p-2">
            <img :src="area.image" class="w-20 h-20 " />
            <div class="p-2">
              <h2 class="text-xl flex justify-between">
                <span>{{ area.title }}</span>
                  <a :href="getPrefixedHost(area.url)" class="bg-slate-300 rounded-lg px-1">Go</a>
                  <!-- <NuxtLink :to="getPrefixedHost(area.url)" class="bg-slate-300 rounded-lg px-1">Go</NuxtLink> -->
                
              </h2>
              <p>

                {{ area.description }}

              </p>
            </div>
          </div>
        </template>

        <template #not-found>
          <h1>No areas found</h1>
        </template>

      </ContentList>
    </template>
  </Card>
</template>

<script setup>
import { cloneDeep } from 'lodash-es'
// queryContent('/areas').findOne().then(console.log)
function getPrefixedHost(x) {
  const validHosts=['localhost', 'forthe.life']
  let newLocation = useRequestURL()
  debugger
  // // if prefixing hostname required
  for(const baseHost of validHosts ) {
    if (newLocation.hostname.includes(baseHost)) {
      newLocation.hostname=`${x.split('/').at(-1)}.${baseHost}${newLocation.hostname.split(baseHost)[1]}`
      // console.log(x,baseHost,newLocation.href)
      return newLocation.href
    }
  } 
  // not
  newLocation.pathname = x
  // console.log(newLocation)
  return newLocation.href
}
</script>