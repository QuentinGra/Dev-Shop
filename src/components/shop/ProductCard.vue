<script setup lang="ts">
import { type products } from '@/interface/product.interface'

const product: products = {
  productId: 1,
  name: 'Clavier arc-en-ciel',
  description: 'Un clavier mécanique avec des touches qui changent de couleur à chaque pression.',
  price: 150,
  illustration: 'rainbow_keyboard.jpg',
  createdAt: '2023-12-22T13:39:47.000Z',
  updateAt: null,
  categoryId: 1,
  category: {
    categoryId: 1,
    name: 'Gadgets Lumineux',
    description:
      'Des gadgets qui illuminent votre espace de travail avec des lumières vives et colorées.'
  }
}
</script>

<template>
  <div>
    <div class="card bg-body-secondary shadow mb-4">
      <img :src="'/products/' + product.illustration" alt="" class="card-img-top test" />
      <div class="card-body text-start">
        <div class="d-flex justify-content-between align-items-start">
          <a href="" class="text-body text-decoration-none">
            <h3 class="card-title h4 text-uppercase">{{ product.name }}</h3>
          </a>
          <span
            class="badge bg-info bg-body-tertiary text-body h1 fs-6 shadow-sm border border-secondary ms-3"
          >
            <i class="bi bi-coin me-2"></i>
            {{ product.price }}
          </span>
        </div>
        <span class="badge rounded-pill bg-primary text-dark me-2">{{
          product.category.name
        }}</span>
        <p class="card-text mt-5">{{ product.description }}</p>
        <hr />
        <div class="text-center">
          <a href="" class="btn btn-info text-uppercase">
            <i class="me-2 fs-6 bi bi-bag-heart-fill"></i>
            Ajouter au panier
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
