<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue'
import ProductList from '@/components/shop/ProductList.vue'
import ProductFilters from '@/components/shop/ProductFilters.vue'
import type { productsInterface } from '@/interfaces/product.interface'
import { INITIALS_FILTERS } from '@/data/filters.data'

const state = reactive({
  filters: INITIALS_FILTERS
})

const isShow: Ref<boolean> = ref(false)

const toggleFilter = (toggleFilter: boolean): void => {
  isShow.value = toggleFilter
}

const emit = defineEmits<{
  eventAddProductToBasket: [productsInterface]
}>()

const moveProductToBasket = (product: productsInterface): void => {
  emit('eventAddProductToBasket', product)
}
</script>

<template>
  <main>
    <div class="d-md-flex">
      <div v-if="isShow">
        <ProductFilters
          :product-filters="state.filters"
          :visibility="isShow"
          @event-toggle-filter="toggleFilter"
        />
      </div>
      <div class="flex-fill">
        <ProductList
          :visibility="isShow"
          @event-toggle-filter="toggleFilter"
          @event-add-product-to-basket="moveProductToBasket"
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
