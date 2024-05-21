<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import ShopView from '@/views/ShopView.vue'
import TheFooter from '@/components/TheFooter.vue'
import type { productsInterface } from './interfaces/product.interface'
import { ref, watchEffect, type Ref } from 'vue'
import AdminView from './views/AdminView.vue'

let productForBasket: Ref<productsInterface | null> = ref(null)
let currentView: Ref<string> = ref('shop')

const basket: Ref<productsInterface[]> = ref([])

const moveProductToBasket = (product: productsInterface): void => {
  productForBasket.value = product
}
watchEffect(() => {
  if (productForBasket.value) basket.value.push(productForBasket.value)
})

const navigationView = (view: string): void => {
  currentView.value = view
}
</script>

<template>
  <TheHeader :current-view :data-product="basket" @event-navigation-shop="navigationView" />
  <ShopView v-if="currentView === 'shop'" @event-add-product-to-basket="moveProductToBasket" />
  <AdminView v-else />
  <TheFooter />
</template>

<style scoped></style>
