<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheHome from '@/components/TheHome.vue'
import TheFooter from '@/components/TheFooter.vue'

const userPrefersDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

if (userPrefersDark) {
  document.documentElement.dataset.bsTheme = 'dark'
} else {
  document.documentElement.dataset.bsTheme = 'light'
}
</script>

<template>
  <TheHeader />
  <TheHome />
  <TheFooter />
</template>

<style scoped></style>
