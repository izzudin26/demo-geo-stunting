<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { stuntingStore } from '../store/stunting'

const stunting = stuntingStore()
const { districts, selectedDistrict, showDistrict } = storeToRefs(stunting)
</script>

<template>
    <Transition>
        <div v-if="showDistrict"
            class="fixed bg-black/50 inset-0 z-50 w-[100svw] h-[100svh] items-center justify-center flex">
            <div class="bg-white rounded-lg w-11/12 overflow-auto md:w-1/2 max-h-[80svh] lg:w-1/3">
                <div class="flex flex-col p-5">
                    <div class="flex flex-row">
                        <h1 class="text-xl font-semibold">Pilih Kecamatan</h1>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                        <div v-for="(d, i) in districts" :key="i" @click="stunting.selectDistrict(i)"
                            :class="[i == selectedDistrict && 'bg-primary text-white', 'px-3 py-1 ring-secondary text-secondary font-semibold ring-1 rounded-md']">
                            {{ d.district }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>