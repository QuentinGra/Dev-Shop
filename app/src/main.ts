import '@/assets/scss/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/dropdown.js'
import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/index";

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
