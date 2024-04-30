<script setup lang="ts">
import ProductList from '@/components/shop/ProductList.vue'
import ProductFilters from '@/components/shop/ProductFilters.vue'
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
