<script setup lang="ts">
import { reactive, computed, ref, type Ref, onMounted } from 'vue'
import ProductList from '@/components/shop/ProductList.vue'
import ProductFilters from '@/components/shop/ProductFilters.vue'
import type { productsInterface } from '@/interfaces/product.interface'
import { INITIALS_FILTERS } from '@/data/filters.data'
import type { filtersInterface } from '@/interfaces/filters.interface'
import { getProducts } from '@/services/api.service'

const state = reactive<{
  filters: filtersInterface
  products: productsInterface[]
}>({
  filters: INITIALS_FILTERS,
  products: []
})

onMounted(async () => (state.products = await getProducts()))

const updateFiltersProducts = computed((): productsInterface[] => {
  return state.products.filter((product: productsInterface) => {
    const searchValue: string = state.filters.search.value.toLowerCase()
    const categoryValue: string[] = state.filters.categories.value
    const priceValue: string = state.filters.prices.value

    let searchFilter: boolean = false
    if (product.name.toLowerCase().startsWith(searchValue)) {
      searchFilter = true
    }

    let categoryFilter: boolean = false
    if (categoryValue.length === 0 || categoryValue!.includes(product.category.name)) {
      categoryFilter = true
    }

    let priceFilter: boolean = false
    switch (priceValue) {
      case 'all':
        priceFilter = true
        break
      case '0-100':
        product.price < 100 ? (priceFilter = true) : (priceFilter = false)
        break
      case '100-200':
        product.price > 100 && product.price <= 200 ? (priceFilter = true) : (priceFilter = false)
        break
      case '200-1000':
        product.price > 200 && product.price <= 1000 ? (priceFilter = true) : (priceFilter = false)
        break
    }

    return searchFilter && categoryFilter && priceFilter
  })
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
      <ProductFilters
        v-if="isShow"
        :product-filters="state.filters"
        :visibility="isShow"
        @event-toggle-filter="toggleFilter"
      />

      <div class="flex-fill">
        <ProductList
          :product="updateFiltersProducts"
          :visibility="isShow"
          @event-toggle-filter="toggleFilter"
          @event-add-product-to-basket="moveProductToBasket"
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
