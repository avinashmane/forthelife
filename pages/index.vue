<template>
    
    <AreaList v-if="useHost()=='default'">
    </AreaList>

    <div v-else class="m-4">
        <!-- <div class="text-2xl">{{ doc.title }}</div> -->
        <ContentDoc :path="`/org/${useHost()}`" >

        </ContentDoc>
    </div>
    <div>
        <DevOnly>
            <div class="mx-5 mx-auto bg-blue-100">
                Dev: Home page for {{ useHost() }}  
            </div>
        </DevOnly>
    </div>
</template>

<script setup>
  
</script>