export interface productsInterface {
  productId: number
  name: string
  description: string
  price: number
  illustration: string
  createdAt: string
  updateAt: string | null
  categoryId: number
  quantity?: number
  category: category
}

export interface category {
  categoryId: number
  name: string
  description: string
}
