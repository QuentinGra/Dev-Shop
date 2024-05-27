import type { productsInterface } from './product.interface'

export interface FetchProduct {
  isLoading: boolean
  response: {
    data: productsInterface[]
    skip: number
    total: number
    limit: number
  }
  error: string
}
