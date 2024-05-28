import type { productsInterface } from "@/interfaces/product.interface";

export interface cartStoreInterface {
    products: productsInterface[]
    vat: number
}