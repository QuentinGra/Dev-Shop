<script setup lang="ts">
import type { productsInterface } from '@/interfaces/product.interface'
import { getProduct } from '@/services/api.service'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const product = ref<productsInterface | null>(null)

const productId = Number(route.params.id as string)

onMounted(async () => (product.value = await getProduct(productId)))

const getSrc = computed(() => {
  return product.value?.illustration.startsWith('http')
    ? product.value?.illustration
    : `/products/${product.value?.illustration}`
})
</script>

<template>
  <div>
    <div class="container text-center my-5 p-3 rounded bg-body-secondary">
      <h1 class="text-uppercase">{{ product?.name }}</h1>
      <img :src="getSrc" :alt="product?.name" class="img-fluid" />
      <div class="p-2">
        <p class="text-start">{{ product?.description }}</p>
        <p class="text-start">{{ product?.price }} €</p>
      </div>
    </div>
    <div class="container text-center">
      <router-link :to="{ name: 'home' }" class="mt-5 btn btn-primary">
        <i class="bi bi-arrow-left me-3"></i> Retour à la boutique
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
