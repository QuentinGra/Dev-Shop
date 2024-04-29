<script setup lang="ts">
const light = () => {
  document.cookie = 'theme=clair; expires=Thu, 18 Dec 2060 12:00:00 UTC; path=/; Secure'
}
const dark = () => {
  document.cookie = 'theme=dark; expires=Thu, 18 Dec 2060 12:00:00 UTC; path=/; Secure'
}
</script>

<template>
  <button class="nav-link dropdown-toggle text-uppercase" data-bs-toggle="dropdown">
    <i class="bi bi-circle-half"></i>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li>
      <button class="dropdown-item" @click="light"><i class="bi bi-sun-fill pe-2"></i>Clair</button>
    </li>
    <li>
      <button class="dropdown-item" @click="dark">
        <i class="bi bi-moon-stars-fill pe-2"></i>Sombre
      </button>
    </li>
    <li>
      <button class="dropdown-item"><i class="bi bi-circle-half pe-2"></i>Auto</button>
    </li>
  </ul>
</template>
