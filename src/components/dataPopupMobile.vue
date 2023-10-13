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
    <div class="md:hidden fixed inset-x-0 bottom-0 z-40">
        <div :class="[showData ? 'max-h-[100svh]' : 'max-h-0', 'h-min duration-700 w-full overflow-hidden bg-white rounded-t-2xl']">
            <div class="flex flex-col pb-3 px-5 divide-y divide-primary divide-dashed">
                <div @click="stunting.toggleShowData" class="flex flex-row w-full py-3 justify-between">
                    <h1 class="font-semibold text-primary text-xl">Kecamatan {{ district?.district }}</h1>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clip-rule="evenodd" />
                        </svg>


                    </button>
                </div>
                <div class="flex flex-row py-1 text-secondary justify-between font-medium text-sm">
                    <span>
                        Sasaran
                    </span>
                    <span>
                        {{ district?.numberOfTarget }}
                    </span>
                </div>
                <div class="flex flex-row py-1 text-secondary justify-between font-medium text-sm">
                    <span>
                        Jumlah yang telah diukur
                    </span>
                    <span>
                        {{ district?.numberOfMeasure }}
                    </span>
                </div>
                <div class="flex flex-row py-1 text-secondary justify-between font-medium text-sm">
                    <span>
                        Jumlah stunting
                    </span>
                    <span>
                        {{ district?.numberOfStunting }}
                    </span>
                </div>
                <div class="pt-3">
                    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
                </div>
            </div>
        </div>
    </div>
</template>