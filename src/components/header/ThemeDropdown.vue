<script setup lang="ts">
import { reactive } from 'vue'

const userPrefersDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

if (userPrefersDark) {
  document.documentElement.dataset.bsTheme = 'dark'
} else {
  document.documentElement.dataset.bsTheme = 'light'
}

const setTheme = (icon: string): void => {
  if (icon == 'bi-sun-fill') {
    activeIcon.icon = 'bi-sun-fill'
    document.documentElement.dataset.bsTheme = 'light'
  } else if (icon == 'bi-moon-stars-fill') {
    activeIcon.icon = 'bi-moon-stars-fill'
    document.documentElement.dataset.bsTheme = 'dark'
  } else {
    activeIcon.icon = 'bi-circle-half'
    document.documentElement.dataset.bsTheme = getBrowserTheme()
  }
}

const getBrowserTheme = (): string => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  } else {
    return 'light'
  }
}

const activeIcon = reactive({
  icon: 'bi-circle-half',
  bg: 'bg-info'
})
</script>

<template>
  <button class="nav-link dropdown-toggle text-uppercase" data-bs-toggle="dropdown">
    <i :class="activeIcon.icon"></i>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li>
      <button class="dropdown-item" @click="setTheme('bi-sun-fill')">
        <i class="bi-sun-fill pe-2"></i>Clair
      </button>
    </li>
    <li>
      <button class="dropdown-item" @click="setTheme('bi-moon-stars-fill')">
        <i class="bi-moon-stars-fill pe-2"></i>Sombre
      </button>
    </li>
    <li>
      <button class="dropdown-item" @click="setTheme('bi-circle-half')">
        <i class="bi-circle-half pe-2"></i>Auto
      </button>
    </li>
  </ul>
</template>
