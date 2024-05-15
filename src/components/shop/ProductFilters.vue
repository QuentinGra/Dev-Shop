<script setup lang="ts">
import { INITIALS_FILTERS } from '@/data/filters.data'
import { reactive } from 'vue'

const state = reactive({
  filters: INITIALS_FILTERS
})

// const test = (e: Event) => {
//   console.log((e.target! as HTMLInputElement).value)
// }
</script>

<template>
  <aside
    class="overflow-hidden bg-body-secondary border shadow-sm d-flex flex-column flex-shrink-0 p-3 rounded w-md-25 m-2"
  >
    <div class="text-center text-md-end order-1 order-md-0">
      <i class="bi bi-x-circle text-info bg fs-4 fc-pointer"></i>
    </div>
    <div class="mt-4">
      <Transition name="shake" appear>
        <h4 class="text-uppercase h6 pb-2">
          <i :class="state.filters.search.icon" class="me-2"></i>
          {{ state.filters.search.title }}
        </h4>
      </Transition>
      <div class="input-group mb-3">
        <input
          :type="state.filters.search.inputType"
          class="form-control fs-7"
          v-model="state.filters.search.value"
          :placeholder="state.filters.search.placeholder"
        />
        <span class="input-group-text btn btn-primary fc-pointer">
          <i class="bi bi-search"></i>
        </span>
      </div>
    </div>
    <div class="mt-4">
      <Transition name="shake2" appear>
        <h4 class="text-uppercase h6 pb-2">
          <i :class="state.filters.categories.icon" class="me-2"></i>
          {{ state.filters.categories.title }}
        </h4>
      </Transition>
      <ul class="list-group item form-check">
        <li
          v-for="(item, index) in state.filters.categories.items"
          :key="index"
          class="list-group item"
        >
          <div
            class="list-group-item list-group-item-action fc-pointer mb-1"
            :class="state.filters.categories.value.includes(item.value) ? 'border-primary' : ''"
          >
            <label :for="'category' + item.id" class="form-check">
              <input
                :id="'category' + item.id"
                class="form-check-input"
                v-model="state.filters.categories.value"
                :name="'category' + item.id"
                :type="state.filters.categories.inputType"
                :value="item.value"
              />
              <span class="form-check-label fs-7">{{ item.name }}</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <Transition name="shake3" appear>
        <h4 class="text-uppercase h6 pb-2">
          <i :class="state.filters.prices.icon" class="me-2"></i>
          {{ state.filters.prices.title }}
        </h4>
      </Transition>
      <ul class="list-group item form-check">
        <li
          v-for="(item, index) in state.filters.prices.items"
          :key="index"
          class="list-group item"
        >
          <div class="list-group-item list-group-item-action fc-pointer mb-1">
            <label for="p" class="form-check">
              <input
                @change="state.filters.prices.value = item.value"
                id="p-1"
                class="form-check-input"
                name="p"
                v-model="state.filters.prices.value"
                :type="state.filters.prices.inputType"
                :value="item.value"
              />
              <span class="form-check-label fs-7">{{ item.name }}</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import 'animate.css/source/attention_seekers/shakeX.css';

.shake-enter-active {
  animation: shakeX 2s;
}
.shake2-enter-active {
  animation: shakeX 2s;
  animation-delay: 0.5s;
}
.shake3-enter-active {
  animation: shakeX 2s;
  animation-delay: 1s;
}
</style>
