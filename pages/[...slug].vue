<template>
  <!-- <main> -->
    <!-- {{page}} -->
    <!-- {{surround}} -->
    <!-- {{navigation}} -->
    <!-- {{globals}} -->
    <Card class="rounded-lg shadow-lg mx-auto md:container">
      <template #content>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1 class="text-3xl">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>

      <template #not-found>
        <h1 class="text-xl my-4">Document not found</h1>
        <hr class="mt-20"/>
        Please check the url address.  Please check following links:
        <div class="flex flex-wrap gap-2 ">
          
          <div v-for="n in find(navigation,{title:'Remote'}).children" class="bg-blue-100 rounded-full px-2 py-1">
            <NuxtLink :to="n._path">{{ n.title }}</NuxtLink>
          </div>
        </div>
      </template>
    </ContentDoc>
    </template>
    </Card>
  <!-- </main> -->
</template>


<script setup>
import {find} from 'lodash-es'
const { navigation, page, surround, globals } = useContent()
</script>
