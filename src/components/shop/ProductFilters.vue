<script setup lang="ts">
import type { filtersInterface } from '@/interfaces/filters.interface'

const props = defineProps<{
  visibility: boolean
  productFilters: filtersInterface
}>()

const { productFilters } = props

const emit = defineEmits<{
  eventToggleFilter: [boolean]
}>()

const toggleFilter = (): void => {
  emit('eventToggleFilter', false)
}

const updateCategoriesValues = (value: string, e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.checked) {
    productFilters.categories.value.push(value)
  } else {
    productFilters.categories.value = productFilters.categories.value.filter(
      (cat: string) => cat !== value
    )
  }
}
</script>

<template>
  <aside class="bg-body-secondary border shadow-sm d-flex flex-column flex-shrink-0 p-3 rounded">
    <!-- Button close  -->
    <div class="text-center text-md-end order-1 order-md-0">
      <i @click="toggleFilter" class="fc-pointer bi bi-x-circle text-info bg fs-4 gd-pointer"></i>
    </div>

    <!-- FILTERS -->
    <div class="mt-4" v-for="(filter, key) in productFilters" :key="key">
      <h4 class="text-uppercase h6 pb-2">
        <i class="bi me-2" :class="filter.icon"></i>{{ filter.title }}
      </h4>
      <div v-if="filter.title === 'Rechercher'" class="input-group mb-3">
        <input
          :type="filter.inputType"
          class="form-control fs-7"
          :class="filter.value ? 'border border-primary-subtle' : ''"
          v-model="filter.value"
        />
        <span class="input-group-text btn btn-primary gd-pointer"
          ><i class="bi bi-search"></i
        ></span>
      </div>

      <ul v-if="filter.inputType === 'checkbox'" class="list-group item form-check">
        <li class="list-group item" v-for="category in filter.items" :key="category.id">
          <div
            class="list-group-item list-group-item-action gd-pointer mb-1"
            :style="`animation-delay: ${1.2 + category.id / 20}s`"
            :class="
              filter.value.find((item) => item === category.name) ? 'border-primary-subtle' : ''
            "
          >
            <label class="form-check" :for="`${key}-${category.id}`">
              <input
                :id="`${key}-${category.id}`"
                class="form-check-input"
                :name="`${key}-${category.id}`"
                :type="filter.inputType"
                @change="updateCategoriesValues(category.name, $event)"
              />
              <span class="form-check-label fs-7">{{ category.name }}</span>
            </label>
          </div>
        </li>
      </ul>
      <ul v-else-if="filter.inputType === 'radio'" class="list-group item form-check">
        <li class="list-group item" v-for="price in filter.items" :key="price.id">
          <div
            class="list-group-item list-group-item-action gd-pointer mb-1"
            :class="filter.value === price.value ? 'border-primary-subtle' : ''"
            :style="`animation-delay: ${1.6 + price.id / 20}s`"
          >
            <label class="form-check" :for="`${key}-${price.id}`">
              <input
                :id="`${key}-${price.id}`"
                class="form-check-input"
                :name="`${key}`"
                type="radio"
                :value="price.value"
                :checked="filter.value === price.value"
                @change="productFilters[key].value = price.value"
              />
              <span class="form-check-label fs-7">{{ price.name }}</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.fc-pointer {
  cursor: pointer;
}
</style>
