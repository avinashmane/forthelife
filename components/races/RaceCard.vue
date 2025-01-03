<template>
    <Card :class="' ' + (props.type == 'mini' ? 'w-full' : ' lg:w-[45rem] mx-auto')" :pt="{ root: { class: 'bg-slate-50' } }">
        <template #header>
            <div class="relative max-w-xl mx-auto ">
                <img :src="imgLink(race.coverPage)" class="h-36 w-full object-cover rounded-xl" alt="Cover Image">
                <div class="absolute inset-0 bg-gradient-to-b from-slate-900 from-opacity-80 rounded-xl"></div>
                <div class="absolute inset-0 flex flex-col justify-top p-1">
                    <h2 class="text-white text-xl font-bold">{{ race.Name }}</h2>
                    <div>
                        <span class="text-white font-bold">{{ race.Date }}</span><br />
                        <span class="text-sm text-white text-sm">{{ race.Location }}
                        </span>
                    </div>

                </div>
            </div>

            <!-- <img :src="imgLink(race.coverPage)" class="object-cover h-48 mx-auto "/> -->
            <!-- </div> -->
        </template>
        <template #content>
            <!-- mini -->
            <div v-if="props.type == 'mini'" class="flex flex-wrap w-full gap-y-1">
                <span v-for="f in race.status" class="mx-1 px-1 bg-blue-200 rounded-full text-sm ">
                    {{ f }}
                </span>
            </div>
            <!-- full -->
            <div v-else>
                <div v-for="f in omit(orderOfKeys(race), ['id', 'coverPage'])" class="flex w-full justify-between">
                    <span class="capitalize text-sm">{{ f }} :</span>
                    <span v-if="isObject(race[f])">
                        <!-- (f.includes('timestamp') || f.includes('stats')) && -->
                        <div v-for="(ts, k) in race[f]">
                            {{ k }}: {{ ts }}
                        </div>
                    </span>
                    <span v-else>
                        <a v-if="f.includes('link')" :href="linkify(race[f])" target="_blank" rel="noopener noreferrer">
                            🔗<i class="pi pi-external-link"></i></a>
                        {{ isArray(race[f]) ? race[f].join(', ') : race[f] }}
                    </span>
                </div>

            </div>
        </template>

        <template #footer>
            <div class="bottom-0 align-bottom flex justify-between">
                <Button v-if="props.type == 'mini'">
                    <NuxtLink :to="`/races/${race.id}`" class="">View </NuxtLink>
                </Button>
                <div v-else>
                    <Button>
                        <a :href="`http://run-pix.web.app/e/${race.id}`" target="_blank">
                            Edit </a>
                    </Button>
                    <Button @click="router.back()" icon="pi pi-arrow-left">Back</Button>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
const props = defineProps({
    race: Object,
    type: String
})
import { omit, isArray, isObject, random, keys, orderBy } from 'lodash-es'
const router = useRouter()

const orderOfKeys = (race, _order = ['Name', 'Date', 'Location']) => orderBy(keys(race), x => -_order.indexOf(x), 'asc')

const imgLink = (x) => x ? `https://storage.googleapis.com/run-pix.appspot.com/processed/${race.id}/${x}`
    : `/img/raceCover_${random(4)}.jpg`

const linkify = (x) => `${x.includes('http') ? '' : 'http://'}${x}`

const race = props.race
// console.log(race, random(4))
</script>