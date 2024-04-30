export interface products {
  productId: number
  name: string
  description: string
  price: number
  illustration: string
  createdAt: string
  updateAt: string | null
  categoryId: number
  category: category
}

export interface category {
  categoryId: number
  name: string
  description: string
}