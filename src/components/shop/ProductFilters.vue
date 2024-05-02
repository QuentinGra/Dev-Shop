<script setup lang="ts">
import { filter } from '@/data/filters.data'
const isCategory1 = true
</script>

<template>
  <aside
    class="bg-body-secondary border shadow-sm d-flex flex-column flex-shrink-0 p-3 rounded w-md-25 m-2"
  >
    <div class="text-center text-md-end order-1 order-md-0">
      <i class="bi bi-x-circle text-info bg fs-4 fc-pointer"></i>
    </div>
    <div class="mt-4">
      <h4 class="text-uppercase h6 pb-2">
        <i :class="filter.search.icon" class="me-2"></i>
        {{ filter.search.title }}
      </h4>
      <div class="input-group mb-3">
        <input
          :type="filter.search.inputType"
          class="form-control fs-7"
          :placeholder="filter.search.placeholder"
        />
        <span class="input-group-text btn btn-primary fc-pointer">
          <i class="bi bi-search"></i>
        </span>
      </div>
    </div>
    <div class="mt-4">
      <h4 class="text-uppercase h6 pb-2">
        <i :class="filter.categories.icon" class="me-2"></i>
        {{ filter.categories.title }}
      </h4>
      <ul class="list-group item form-check">
        <li v-for="(item, index) in filter.categories.items" :key="index" class="list-group item">
          <div
            class="list-group-item list-group-item-action fc-pointer mb-1"
            :class="{ 'border-primary': isCategory1 }"
          >
            <label for="cat-1" class="form-check">
              <input
                id="cat-1"
                class="form-check-input"
                :checked="isCategory1"
                name="cat-1"
                :type="filter.categories.inputType"
                :value="filter.categories.value"
              />
              <span class="form-check-label fs-7">{{ item.name }}</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h4 class="text-uppercase h6 pb-2">
        <i :class="filter.prices.icon" class="me-2"></i>
        {{ filter.prices.title }}
      </h4>
      <ul class="list-group item form-check">
        <li v-for="(item, index) in filter.prices.items" :key="index" class="list-group item">
          <div class="list-group-item list-group-item-action fc-pointer mb-1">
            <label for="p-1" class="form-check">
              <input
                id="p-1"
                class="form-check-input"
                name="p"
                :type="filter.prices.inputType"
                :value="filter.prices.value"
              />
              <span class="form-check-label fs-7">{{ item.name }}</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped></style>
