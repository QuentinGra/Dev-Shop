<script setup lang="ts">
import { z } from 'zod'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { login } from '@/services/auth.service'
import { setCookie } from '@/utils/cookie.utils'
import { useRouter } from 'vue-router'

const router = useRouter()

const validationSchema = toTypedSchema(
  z.object({
    email: z.string().email({ message: "L'email est invalide" }),
    password: z
      .string()
      .min(5, { message: 'Mot de passe invalide' })
      .max(50, { message: 'Mot de passe invalide' })
  })
)

const { errors, defineField, handleSubmit, meta } = useForm({
  validationSchema
})

const [email] = defineField('email')
const [password] = defineField('password')

const submitForm = handleSubmit(async () => {
  const response = await login('local', email.value!, password.value!)
  setCookie('token', response.accessToken, 1)
  router.push('/admin')
})
</script>

<template>
  <div class="container col-md-6 bg-body-secondary rounded w-50">
    <form @submit="submitForm" action="">
      <div class="mb-3">
        <label class="form-label" for="email">Email</label>
        <input v-model.trim="email" class="form-control" type="email" id="email" />
        <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
      </div>
      <div class="mb-3">
        <label class="form-label" for="password">Mot de passe</label>
        <input v-model.trim="password" class="form-control" type="password" id="password" />
        <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
      </div>
      <button type="submit" class="btn btn-primary mb-3" :disabled="!meta.valid">
        Se connecter
      </button>
    </form>
  </div>
</template>

<style scoped>
form {
  margin-top: 7rem;
}
</style>
