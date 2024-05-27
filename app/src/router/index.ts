import type { RouteRecordRaw } from "vue-router";
import ShopView from "@/views/ShopView.vue";

const routes : RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: ShopView
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/AdminView.vue')
    },
    {
        path: '/product/:id(\\d+)',
        name: 'product',
        component: () => import('@/views/ProductView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/NotFoundView.vue')
    }
]

export default routes