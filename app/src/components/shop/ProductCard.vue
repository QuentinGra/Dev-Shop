<script setup lang="ts">
import { type productsInterface } from '@/interfaces/product.interface'
import { useCartStore } from '@/stores/cart.store'

defineProps<{
  dataProduct: productsInterface
}>()

const cartStore = useCartStore()

const addProductToCart = (product: productsInterface): void => {
  cartStore.addProduct(product)
}
</script>

<template>
  <div>
    <div class="card bg-body-secondary shadow mb-4">
      <img :src="'/products/' + dataProduct.illustration" alt="" class="card-img-top test" />
      <div class="card-body text-start">
        <div class="d-flex justify-content-between align-items-start">
          <RouterLink
            :to="`/product/${dataProduct.productId}`"
            class="card-title h4 text-uppercase text-decoration-none"
            >{{ dataProduct.name }}</RouterLink
          >
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
          <a @click="addProductToCart(dataProduct)" class="btn btn-info text-uppercase">
            <i class="me-2 fs-6 bi bi-bag-heart-fill"></i>
            Ajouter au panier
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
