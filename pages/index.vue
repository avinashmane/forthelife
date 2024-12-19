<template>
    <AreaList v-if="useHost()=='default'">
    </AreaList>
    <div>
        <DevOnly>
            Dev: Home page for {{ useHost() }}
        </DevOnly>
    </div>
</template>