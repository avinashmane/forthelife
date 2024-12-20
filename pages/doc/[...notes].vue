<template>
    <!-- https://minch.dev/blog/nuxt-content-with-remote-markdown -->
  <ContentList path="/notes" >
    <template #default="{ list }">
            <div class="p-2">
                <a v-for="note in list" :key="note._path" :href="note._path">
                            {{ note.title }}        
                </a>
            </div>
    </template>
    <template #not-found>
      <ProgressSpinner />
    </template>
    
  </ContentList>
  <hr/>
  <pre>{{  notes }}</pre>
</template>

  <script setup>
  const { data: notes } = await useLazyAsyncData("my-notes", () =>
    queryContent("/notes").find()
  );
  </script>
  