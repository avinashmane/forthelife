<template>
  
        <!-- {{  user  }} -->
        Races:
    <div v-for="race in races" class="flex justify-around items-center">
        <NuxtLink :to="`/race/${race.id}`" class="p-button">{{ race.Name }} </NuxtLink>
        <span v-for="f in ['Name','Date','Location']">
          {{ f }}: {{ race[f] }}
        </span>
        <!-- {{ race }} -->
    </div>
    {{ auth.currentUser }}

    {{ count }}
    {{ meta }}

</template>

<script setup>
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import {ref,computed} from 'vue'
const route = useRoute()

const auth = ref(getAuth())
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' },
    { name:"google-site-verification", content:"Av7j1M46bxy_jgJ35Fe5r6ANfgFBkycLBSNkL5Pvom8" }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

// When accessing /posts/1, route.params.id will be 1
// console.log(route.params.id)

const db = useFirestore()

// const user = useCurre  ntUser()

// import { onMounted } from "vue"

const { $racesRef } = useNuxtApp();

const races = useCollection($racesRef);

// runpixDocsGH.

const { data: count } = await useAsyncData("my-notes", async () =>{
    console.log('home1')
    return runpixDocsGH.keys('/runpixDocs')
        .then(x=>{
            console.log("home",x);
            return x
    })
})
const {data: meta} = await useAsyncData(async ()=>{
    console.log('home2')
    return await runpixDocsGH.getKeys()
// return await runpixDocsGH.get('/runpixDocs/README.md')
        // .then(console.warn);
})

</script>