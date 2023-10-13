<script setup lang="ts">
import { stuntingStore } from '../store/stunting'
import { storeToRefs } from 'pinia'

const stunting = stuntingStore()

const { district } = storeToRefs(stunting)
</script>
<template>
    <Transition>
        <div v-if="district" class="lg:hidden fixed inset-0 z-10 flex items-center justify-center">
            <div class="flex flex-col bg-white rounded-lg w-auto">
                <div @click="stunting.toggleShowData" class="flex flex-row w-auto p-3 justify-between">
                    <h1 class="font-semibold text-primary text-sm">Tampilkan Kecamatan {{ district.district }}</h1>
                </div>
            </div>
        </div>
    </Transition>
</template>