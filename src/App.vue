<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheHome from '@/components/TheHome.vue'
import TheFooter from '@/components/TheFooter.vue'
import type { productsInterface } from './interfaces/product.interface'
import { ref, type Ref } from 'vue'

let productForBasket: Ref<productsInterface | null> = ref(null)

const moveProductToBasket = (product: productsInterface): void => {
  productForBasket.value = product
}
</script>

<template>
  <TheHeader :data-product="productForBasket" />
  <TheHome @event-add-product-to-basket="moveProductToBasket" />
  <TheFooter />
</template>

<style scoped></style>
