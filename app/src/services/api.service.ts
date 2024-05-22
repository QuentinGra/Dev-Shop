import type { category, productsInterface } from '@/interfaces/product.interface'
import type { FormInterface } from '@/interfaces/productForm.interface'

export const getProducts = async (): Promise<productsInterface[]> => {
  try {
    const response = await fetch('http://localhost:3030/api/v1/products?$limit=100')
    if (!response.ok || response.status !== 200) {
      throw new Error(`Il y a un problème dans l'url erreur:${response.status}`)
    }
    const data: { data: productsInterface[] } = await response.json()
    return data.data
  } catch (e) {
    console.log(e)
  }
}

export const getCategories = async (): Promise<category[]> => {
  try {
    const response = await fetch('http://localhost:3030/api/v1/categories')
    if (!response.ok || response.status !== 200) {
      throw new Error(`Il y a un problème dans l'url erreur:${response.status}`)
    }
    const data: { data: category[] } = await response.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
}

export const addProducts = async (product: FormInterface): Promise<FormInterface> => {
    const response = await fetch('http://localhost:3030/api/v1/products', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    return response.json()
}
