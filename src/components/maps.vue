<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { stuntingStore } from '../store/stunting'

const stunting = stuntingStore()
const { district } = storeToRefs(stunting)

const defaultMaps = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409793.1541135148!2d112.18338464453126!3d-7.084880034206167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77f3f4943de897%3A0x3027a76e352bd90!2sKabupaten%20Lamongan%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1697220501849!5m2!1sid!2sid')
</script>
<template>
    <iframe :src="district?.location ?? defaultMaps"></iframe>
</template>

<style>
iframe {
    width: 100svw;
    height: 100svh;
}
</style>