<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import ShopView from '@/views/ShopView.vue'
import TheFooter from '@/components/TheFooter.vue'
import type { productsInterface } from './interfaces/product.interface'
import { ref, watchEffect, type Ref } from 'vue'
import AdminView from './views/AdminView.vue'

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
  <ShopView v-if="false" @event-add-product-to-basket="moveProductToBasket" />
  <AdminView v-else />
  <TheFooter />
</template>

<style scoped></style>
