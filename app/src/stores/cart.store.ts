import type { cartStoreInterface } from "@/interfaces/cartStore.interface";
import type { productsInterface } from "@/interfaces/product.interface";
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: ():cartStoreInterface => ({
        products: [],
        vat: 20
    }),

    getters: {
        quantity(): number {
            return this.products.reduce((acc: number, product) => acc + product.quantity!, 0)
        },
        totalHT(): number {
            return this.products.reduce((acc: number, product) => acc + product.price * product.quantity!, 0)
        },
        totalTVA(): number {
            return this.totalHT * this.vat / 100
        },
        totelTTC(): number {
            return this.totalHT + this.totalTVA
        }
    },

    actions: {
        addProduct(product: productsInterface) {
            if (this.products.includes(product)) {
                product.quantity! ++
            } else {
                this.products.push(product)
                product.quantity = 1
            }
        },
        removeProduct(product: productsInterface) {
            this.products.splice(this.products.indexOf(product))
        },
        updateQuantity(product: productsInterface, quantity: number) {

        }

    }
})