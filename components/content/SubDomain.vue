<template>
  <Card :pt="{ content: { class: 'flex flex-wrap' } }" class="listsubdomains">
    <template #content>

      <!-- <ContentList path="/subdomains" > -->

        <!-- <template #default="{ list }"> -->

          <div v-for="(subDomain,key) in subDomains" :key="subDomain?._path" class="flex max-w-80 border rounded-lg m-2 p-2">
          <!-- <div v-for="subDomain in list" :key="subDomain?._path" class="flex max-w-80 border rounded-lg m-2 p-2"> -->

            <img :src="subDomain.image" class="w-20 h-20 " />
            <!-- {{ subDomain.to }} -->
            <div class="p-2">

              <h2 class="text-xl flex justify-between">
                <span>{{ subDomain.title }}</span>
                <a :href="getPrefixedHost(key)" class="bg-slate-300 rounded-lg px-1">Go</a>
  
              </h2>

              <p class="w-full text-sm">{{ subDomain.description }}</p>
            </div>
          </div>
        <!-- </template> -->

        <!-- <template #not-found>
          <h1>No areas found</h1>
        </template>

      </ContentList> -->

    </template>
  </Card>
</template>

<script setup>
import { cloneDeep, omit } from 'lodash-es'
import {subDomains} from '~/config';
// log(">>",subDomains)

function getPrefixedHost(x) {
  const validHosts = ['localhost', 'forthe.life']
  let newLocation = useRequestURL()
  debug('getPrefixedHost',x)
  // // if prefixing hostname required
  for (const baseHost of validHosts) {
    if (newLocation.hostname.includes(baseHost)) {
      const firstInDomain=(x)=>x?.split(/[\/:\.]/)[0]
      newLocation.hostname = `${x}.${baseHost}${(newLocation.hostname.split(baseHost)?.[1]) || ''}`
      // newLocation.hostname = `${firstInDomain(x?.split('/').at(-1))}.${baseHost}${(newLocation.hostname.split(baseHost)?.[1]) || ''}`
      // debug(x, baseHost, newLocation.href)
      return newLocation.href
    }
  }
  // not
  newLocation.pathname = x
  // console.log(newLocation)
  return newLocation.href
}
</script>
