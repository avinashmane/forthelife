<template>
    <!-- https://minch.dev/blog/nuxt-content-with-remote-markdown -->
  <ContentList path="/remote/blogs" >
    <template #default="{ list }">
            <div class="p-2">
                <a v-for="blog in list" :key="blog._path" :href="blog._path">
                            {{ blog.title }}        
                </a>
            </div>
    </template>
    <template #not-found>
      <ProgressSpinner />
    </template>
    
  </ContentList>
  <hr/>
  <!-- <pre>{{  notes }}</pre> -->
</template>

  <script setup>
  const { data: notes } = await useLazyAsyncData("my-notes", () =>
    queryContent("/notes").find()
  );
  </script>
  