<script setup lang="ts">
import { computed, reactive } from 'vue';
import { stuntingStore } from '../store/stunting'
import { storeToRefs } from 'pinia'
import { GChart } from 'vue-google-charts'

const stunting = stuntingStore()

const { district, showData } = storeToRefs(stunting)

const chartData = computed(() => {
    if (!district) return []
    return [
        ['Label', 'Jumlah'],
        ['Sasaran', district.value?.numberOfTarget ?? 0],
        ['Jumlah stunting', district.value?.numberOfStunting ?? 0]
    ]
})

const chartOptions = reactive({
    title: 'Grafik Stunting'
})
</script>
<template>
    <Transition>
        <div v-if="district" class="hidden fixed w-[60svh] inset-y-0 right-20 z-10 md:flex items-center">
            <div class="flex flex-col bg-white rounded-lg w-full">
                <div @click="stunting.toggleShowData" class="flex flex-row w-full p-3 justify-between">
                    <h1 class="font-semibold text-primary text-xl">Kecamatan {{ district.district }}</h1>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            :class="[showData && 'rotate-90', 'w-5 h-5 duration-500']">
                            <path fill-rule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clip-rule="evenodd" />
                        </svg>

                    </button>
                </div>
                <div :class="[showData ? 'max-h-[80svh]' : 'max-h-0', 'h-min duration-700 w-full overflow-hidden']">
                    <div class="flex flex-col pb-3 px-3 divide-y divide-primary divide-dashed">
                        <div class="flex flex-row py-1 text-secondary justify-between font-medium">
                            <span>
                                Sasaran
                            </span>
                            <span>
                                {{ district.numberOfTarget }}
                            </span>
                        </div>
                        <div class="flex flex-row py-1 text-secondary justify-between font-medium">
                            <span>
                                Jumlah yang telah diukur
                            </span>
                            <span>
                                {{ district.numberOfMeasure }}
                            </span>
                        </div>
                        <div class="flex flex-row py-1 text-secondary justify-between font-medium">
                            <span>
                                Jumlah stunting
                            </span>
                            <span>
                                {{ district.numberOfStunting }}
                            </span>
                        </div>
                        <div class="pt-3">
                            <GChart type="PieChart" :data="chartData" :options="chartOptions" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>