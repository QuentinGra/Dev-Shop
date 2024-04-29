<script setup lang="ts"></script>

<template>
  <aside
    class="bg-body-secondary border shadow-sm d-flex flex-column flex-shrink-0 p-3 rounded w-md-25 m-2"
  >
    <div class="text-center text-md-end order-1 order-md-0">
      <i class="bi bi-x-circle text-info bg fs-4 fc-pointer"></i>
    </div>
    <div class="mt-4">
      <h4 class="text-uppercase h6 pb-2">
        <i class="bi me-2 bi-binoculars-fill"></i>
        Rechercher
      </h4>
      <div class="input-group mb-3">
        <input type="text" class="form-control fs-7" placeholder="Chercher" />
        <span class="input-group-text btn btn-primary fc-pointer">
          <i class="bi bi-search"></i>
        </span>
      </div>
    </div>
    <div class="mt-4">
      <h4 class="text-uppercase h6 pb-2">
        <i class="bi me-2 bi-tags-fill"></i>
        Catégories
      </h4>
      <ul class="list-group item form-check">
        <li class="list-group item">
          <div class="list-group-item list-group-item-action fc-pointer mb-1">
            <label for="cat-1" class="form-check">
              <input id="cat-1" class="form-check-input" name="cat-1" type="checkbox" />
              <span class="form-check-label fs-7">Catégorie 1</span>
            </label>
          </div>
        </li>
        <li class="list-group item">
          <div class="list-group-item list-group-item-action fc-pointer mb-1">
            <label for="cat-2" class="form-check">
              <input id="cat-2" class="form-check-input" name="cat-2" type="checkbox" />
              <span class="form-check-label fs-7">Catégorie 2</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h4 class="text-uppercase h6 pb-2">
        <i class="bi me-2 bi-coin"></i>
        Catégories
      </h4>
      <ul class="list-group item form-check">
        <li class="list-group item">
          <div class="list-group-item list-group-item-action fc-pointer mb-1">
            <label for="p-1" class="form-check">
              <input id="p-1" class="form-check-input" name="p" type="radio" />
              <span class="form-check-label fs-7">Tous les prix</span>
            </label>
          </div>
        </li>
        <li class="list-group item">
          <div class="list-group-item list-group-item-action fc-pointer mb-1">
            <label for="p-2" class="form-check">
              <input id="p-2" class="form-check-input" name="p" type="radio" />
              <span class="form-check-label fs-7">Moins de 100€</span>
            </label>
          </div>
        </li>
        <li class="list-group item">
          <div class="list-group-item list-group-item-action fc-pointer mb-1">
            <label for="p-3" class="form-check">
              <input id="p-3" class="form-check-input" name="p" type="radio" />
              <span class="form-check-label fs-7">Entre 100 et 500€</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
aside {
  position: sticky;
  top: 70px;
}
</style>
