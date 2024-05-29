<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { productsInterface } from '@/interfaces/product.interface'
let title = 'Tous les produits'

const props = defineProps<{
  visibility: boolean
  product: productsInterface[]
}>()

const emit = defineEmits<{
  eventToggleFilter: [boolean]
}>()

const toggleFilter = (): void => {
  emit('eventToggleFilter', true)
}
</script>

<template>
  <section
    class="container text-center d-flex justify-content-center align-items-center mt-4 pt-3 pb-5 h-100"
  >
    <div>
      <div>
        <h2 class="mb-4 d-inline-block me-3 text-uppercase">{{ title }}</h2>
        <a @click="toggleFilter" class="btn btn-sm btn-outline-warning h2"
          ><i class="me-2 bi bi-funnel"></i>Filter</a
        >
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-1">
        <div v-for="(product, i) in props.product" :key="i">
          <ProductCard :data-product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
