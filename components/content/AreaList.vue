<template>
  <Card :pt="{content:{class:'flex flex-wrap'}}">
    <template #content >
    <ContentList path="/areas">
      
      <template #default="{ list }">

        <div v-for="area in list[0].body" :key="area?._path" class="flex max-w-80 border rounded-lg m-2 p-2">
          <img :src="area.image" class="w-20 h-20 "/>
          <div class="p-2">
            <h2 class="text-xl flex justify-between">
              <span>{{ area.title }}</span>
              <NuxtLink :to=area.url class="bg-slate-300 rounded-lg px-1">Go</NuxtLink>
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
// queryContent('/areas').findOne().then(console.log)
</script>