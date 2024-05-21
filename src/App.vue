<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import ShopView from '@/components/ShopView.vue'
import TheFooter from '@/components/TheFooter.vue'
import type { productsInterface } from './interfaces/product.interface'
import { ref, watchEffect, type Ref } from 'vue'

let productForBasket: Ref<productsInterface | null> = ref(null)

const basket: Ref<productsInterface[]> = ref([])

const moveProductToBasket = (product: productsInterface): void => {
  productForBasket.value = product
}
watchEffect(() => {
  if (productForBasket.value) basket.value.push(productForBasket.value)
})
</script>

<template>
  <TheHeader :data-product="basket" />
  <ShopView @event-add-product-to-basket="moveProductToBasket" />
  <TheFooter />
</template>

<style scoped></style>
