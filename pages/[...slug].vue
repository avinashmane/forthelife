<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1 class="text-3xl">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>


<script setup>

</script>
