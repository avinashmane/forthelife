<template>
  <!-- https://minch.dev/blog/nuxt-content-with-remote-markdown -->

  <div v-if="blogId">
    <BlogCard v-if="blog._path" :blog="blog" type="full" :key="blog._path" />
  </div>
  
  <ContentList v-else path="/remote/blogs">

    <template #default="{ list }">
      <div v-for="blog in list" class="flex flex-wrap min-w-80 mx-auto p-2">
          <BlogCard :blog="blog" type="mini" :key="blog._path" @click="selected=blog._path"/>
      </div>
    </template>

    <template #not-found>
      <ProgressSpinner />
    </template>

  </ContentList>
  <!-- <hr /> -->
  <!-- {{ route.params }} -->
  <!-- <pre>{{  blogs.map(x=>pick(x,"title,_path".split(","))) }}</pre> -->
</template>

<script setup>
import { computed } from 'vue';
import {extend,pick} from 'lodash-es'
// import BlogCard from "~/components/BlogCard.vue"
const selected=ref(null)
const route = useRoute()
debug('route.params', route.params,)
const blogId=ref(route.params?.id?.[0])
const { data: blogs } = await useLazyAsyncData("my-blogs", () =>
    queryContent("/remote/blogs").find()
  );
const blog=computed(()=>{
  let ret=blogs.value.find(x=>x._path.includes(blogId.value))
  
  return extend({
    title:'Blog Title',
    keywords:'blog'
  },ret)

})

useHead({
  title: blog.value.title,
  meta: [
    { name: 'description', content: blog.value.description },
    { name: "google-site-verification", content: "Av7j1M46bxy_jgJ35Fe5r6ANfgFBkycLBSNkL5Pvom8" },
    { name: "keywords", content: blog.value.keywords || 'blog,life,coaching,focus' }
  ],

})

useSeoMeta
  ({
    title: blog.value.title,
    ogTitle: blog.value.title,
    description: blog.value.description,
    ogDescription: blog.value.description,
    ogImage: blog.value.image,
    //   twitterCard
    // : 'summary_large_image',
  })

</script>
  