<script setup lang="ts">
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { zodI18nMap } from 'zod-i18n-map'
import i18next from 'i18next'
import frenchTranslation from 'zod-i18n-map/locales/fr/zod.json'
import type { FormInterface } from '@/interfaces/productForm.interface'
import { onMounted, reactive } from 'vue'
import type { category } from '@/interfaces/product.interface'
import { addProducts, getCategories } from '@/services/api.service'

const state = reactive<{
  categories: category[]
}>({
  categories: []
})

onMounted(async () => (state.categories = await getCategories()))

const myValidationSchema = z.object({
  name: z.string().min(5, { message: 'Le nom doit contenir au moins 5 caractères' }).max(100),
  price: z.number().min(10, { message: 'Entrez un nombre égale ou supérieur à 10' }).max(1000),
  illustration: z
    .string()
    .regex(/^(http(s)?:\/\/)[a-zA-Z0-9\-_.,/+]+(\.(png|jp(e)?g))$/)
    .max(500),
  categoryId: z.number(),
  description: z
    .string()
    .min(20, { message: 'La description doit contenir au moins 20 caractères' })
})

const validationSchema = toTypedSchema(myValidationSchema)

const { errors, defineField, handleSubmit, handleReset, meta } = useForm<FormInterface>({
  validationSchema
})

const [name] = defineField('name')
const [price] = defineField('price')
const [illustration] = defineField('illustration')
const [categoryId] = defineField('categoryId')
const [description] = defineField('description')

const onSuccess = (values: FormInterface): void => {
  console.log(values)
  addProducts(values)
  handleReset()
}

const submitForm = handleSubmit(onSuccess)

i18next.init({
  lng: 'fr',
  resources: {
    fr: { zod: frenchTranslation }
  }
})
z.setErrorMap(zodI18nMap)
</script>

<template>
  <div class="container col-md-6">
    <form @submit="submitForm" action="">
      <div class="mb-3">
        <input
          v-model="name"
          class="form-control"
          type="text"
          placeholder="Entrer le nom du produits"
        />
        <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <input v-model="price" class="form-control" type="number" placeholder="100" />
        <span v-if="errors.price" class="text-danger">{{ errors.price }}</span>
      </div>
      <div class="mb-3">
        <input v-model="illustration" class="form-control" type="text" placeholder="Test.png" />
        <span v-if="errors.illustration" class="text-danger">{{ errors.illustration }}</span>
      </div>
      <div class="mb-3">
        <select v-model="categoryId" class="form-select">
          <option
            v-for="categorie in state.categories"
            :key="categorie.categoryId"
            :value="categorie.categoryId"
          >
            {{ categorie.name }}
          </option>
        </select>
        <span v-if="errors.categoryId" class="text-danger">{{ errors.categoryId }}</span>
      </div>
      <div class="mb-3">
        <textarea
          v-model="description"
          class="form-control"
          rows="3"
          placeholder="Description du produit"
        ></textarea>
        <span v-if="errors.description" class="text-danger">{{ errors.description }}</span>
      </div>
      <button type="submit" class="btn btn-primary mb-3" :disabled="!meta.valid">Submit</button>
    </form>
  </div>
</template>

<style scoped>
form {
  margin-top: 7rem;
}
</style>
