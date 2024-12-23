<template>
    <a :href="blog._path?.replace('/remote','')" class="mx-auto max-w-xl">
    <div class="relative ">
        <img :src="imgLink(blog.coverPage)" class="h-36 w-full object-cover rounded-xl" alt="Cover Image">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900 from-opacity-80 rounded-xl"></div>
        <div class="absolute inset-0 flex flex-col justify-top p-4">
            <h2 class="text-white text-xl font-bold">{{ blog.title }}</h2>
            <div>
                <span class="text-white font-bold">{{ blog.keywords }}</span>
                <Button v-if="props.type=='mini'" @click="useRouter().back()" class="opacity-80">Go</Button>
            </div>
            
        </div>
    </div>
    </a>
    <div v-if="props.type!='mini'"  class="m-4">
        <!-- <a :href="blog._path">
            {{ blog.title }}
        </a> -->
        <ContentRendererMarkdown :value="blog?.body" />
        <!-- <ContentRenderer :value="blog" >
            <template></template>
        </ContentRenderer> -->
        <Button @click="useRouter().back()" icon="pi pi-back">Back</Button>
    </div>

    
    <!-- {{ blog }} -->
</template>

<script setup>
import {random} from 'lodash-es'
const props = defineProps({
    blog: Object,
    type: String
})
const imgLink = (x) => x || `/img/blog/cover_${random(4)}.jpg`
const blog = ref(props.blog)

</script>