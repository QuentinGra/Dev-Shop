<script setup lang="ts"></script>

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
          <li class="nav-item"><a href="/" class="nav-link">Accueil</a></li>
          <li class="nav-item"><a href="/" class="nav-link">Admin</a></li>
          <li class="nav-item dropdown">
            <a href="/" class="nav-link dropdown-toggle disabled">Déroulant</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="/" class="nav-link"><i class="bi bi-cart-check-fill"></i></a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link">Connexion<i class="bi bi-box-arrow-in-right"></i></a>
          </li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle text-uppercase" data-bs-toggle="dropdown">
              Thèmes
            </button>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item">Clair</button></li>
              <li><button class="dropdown-item">Sombre</button></li>
              <li><button class="dropdown-item">Auto</button></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
