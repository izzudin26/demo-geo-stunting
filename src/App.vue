<script setup lang="ts">
import { stuntingStore } from './store/stunting'
import Maps from './components/maps.vue'
import DistrictPicker from './components/districtPicker.vue';
import DataPopup from './components/dataPopup.vue';
import DataPopupMobile from './components/dataPopupMobile.vue'
import ToggleDataMobile from './components/toggleDataMobile.vue';

const stunting = stuntingStore()
</script>

<template>
  <div>
    <Maps />
    <DistrictPicker />
    <DataPopup />
    <ToggleDataMobile />
    <DataPopupMobile />
    <div @click="stunting.toggleDistrict"
      class="button fixed z-20 bottom-6 right-14 bg-white font-bold cursor-pointer text-primary ring-1 ring-white">
      Pilih Kecamatan
    </div>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>