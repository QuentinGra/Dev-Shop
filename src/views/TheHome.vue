<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
import ProductFilters from '@/components/ProductFilters.vue'
</script>

<template>
  <main>
    <div class="d-md-flex">
      <ProductFilters />
      <div class="flex-fill">
        <ProductList />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
