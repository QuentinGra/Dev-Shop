<script setup lang="ts">
import { type productsInterface } from '@/interfaces/product.interface'

defineProps<{
  dataProduct: productsInterface
}>()

const emit = defineEmits<{
  eventAddProductToBasket: [productsInterface]
}>()

const addProduct = (product: productsInterface): void => {
  emit('eventAddProductToBasket', product)
}
</script>

<template>
  <div>
    <div class="card bg-body-secondary shadow mb-4">
      <img :src="'/products/' + dataProduct.illustration" alt="" class="card-img-top test" />
      <div class="card-body text-start">
        <div class="d-flex justify-content-between align-items-start">
          <a href="" class="text-body text-decoration-none">
            <h3 class="card-title h4 text-uppercase">{{ dataProduct.name }}</h3>
          </a>
          <span
            class="badge bg-info bg-body-tertiary text-body h1 fs-6 shadow-sm border border-secondary ms-3"
          >
            <i class="bi bi-coin me-2"></i>
            {{ dataProduct.price }}
          </span>
        </div>
        <span class="badge rounded-pill bg-primary text-dark me-2">{{
          dataProduct.category.name
        }}</span>
        <p class="card-text mt-5">{{ dataProduct.description }}</p>
        <hr />
        <div class="text-center">
          <a @click="addProduct(dataProduct)" class="btn btn-info text-uppercase">
            <i class="me-2 fs-6 bi bi-bag-heart-fill"></i>
            Ajouter au panier
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
