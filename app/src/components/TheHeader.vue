<script setup lang="ts">
import ThemeDropdown from '@/components/header/ThemeDropdown.vue'
import type { productsInterface } from '@/interfaces/product.interface'
import { deleteCookie } from '@/utils/cookie.utils'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const textLogin = ref<string>('Connexion')

defineProps<{
  dataProduct: productsInterface[]
}>()
</script>

<template>
  <header class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    <div class="container-fluid text-uppercase">
      <button class="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="/" class="navbar-brand">
        <img src="/img/logo.svg" alt="LOGO DS" width="32" />
      </a>
      <a href="/" class="position-relative me-3 d-lg-none"
        ><i class="bi bi-cart-check-fill fs-4"></i
      ></a>
      <nav id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <Router-link class="nav-link" to="/">Accueil</Router-link>
          </li>
          <li class="nav-item">
            <Router-link class="nav-link" to="/admin">Admin</Router-link>
          </li>
          <li class="nav-item dropdown">
            <a href="/" class="nav-link dropdown-toggle disabled">Déroulant</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="/" class="nav-link">
              <i class="bi bi-cart-check-fill"></i>
              <small
                v-if="dataProduct.length"
                class="position-absolute top-0 translate-middle-x m-1 gd-basket-counter badge rounded-pill bg-info"
                >{{ dataProduct.length }}</small
              >
            </a>
          </li>
          <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none my-2 text-white-50" />
          </li>
          <li class="nav-item">
            <RouterLink @click="deconnexion()" to="/login" class="nav-link"
              >{{ textLogin }}<i class="bi bi-box-arrow-in-right"></i
            ></RouterLink>
          </li>
          <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none my-2 text-white-50" />
          </li>
          <li class="nav-item dropdown">
            <ThemeDropdown />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
