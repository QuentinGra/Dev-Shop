// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { ProductService } from './products.class'
import { Category, categorySchema } from '../categories/categories.schema'

// Main data model schema
export const productSchema = Type.Object(
    {
        productId: Type.Number(),
        name: Type.String({ maxLength: 250 }),
        description: Type.String({ maxLength: 1000 }),
        price: Type.Number({ minimum: 0, maximum: 99999.99 }),
        illustration: Type.Optional(Type.String({ maxLength: 500 })),
        createdAt: Type.String({ format: 'date-time' }),
        updateAt: Type.Optional(Type.String({ format: 'date-time' })),
        categoryId: Type.Number(),
        category: Type.Ref(categorySchema)
    },
    { $id: 'Product', additionalProperties: true }
)
export type Product = Static<typeof productSchema>
export const productValidator = getValidator(productSchema, dataValidator)

export const productResolver = resolve<Product, HookContext<ProductService>>({
    category: virtual(async (product, context) => {
        // Get the category, the query is filtered by the categoryId, and don't return the categoryId
        const results: Category = await context.app.service('api/v1/categories').get(product.categoryId, {
            query: {
                $select: ['categoryId', 'name', 'description']
            }
        })
        return results
    })
})

export const productExternalResolver = resolve<Product, HookContext<ProductService>>({})

// Schema for creating new entries
export const productDataSchema = Type.Pick(
    productSchema,
    ['name', 'description', 'price', 'illustration', 'categoryId'],
    {
        $id: 'ProductData'
    }
)
export type ProductData = Static<typeof productDataSchema>
export const productDataValidator = getValidator(productDataSchema, dataValidator)
export const productDataResolver = resolve<Product, HookContext<ProductService>>({
    createdAt: async () => new Date().toISOString().slice(0, 19).replace('T', ' ')
})

// Schema for updating existing entries
export const productPatchSchema = Type.Partial(productSchema, {
    $id: 'ProductPatch'
})
export type ProductPatch = Static<typeof productPatchSchema>
export const productPatchValidator = getValidator(productPatchSchema, dataValidator)
export const productPatchResolver = resolve<Product, HookContext<ProductService>>({})

// Schema for allowed query properties
export const productQueryProperties = Type.Pick(productSchema, [
    'productId',
    'name',
    'description',
    'price',
    'illustration'
])
export const productQuerySchema = Type.Intersect(
    [
        querySyntax(productQueryProperties),
        // Add additional query properties here
        Type.Object({}, { additionalProperties: true })
    ],
    { additionalProperties: true }
)
export type ProductQuery = Static<typeof productQuerySchema>
export const productQueryValidator = getValidator(productQuerySchema, queryValidator)
export const productQueryResolver = resolve<ProductQuery, HookContext<ProductService>>({})
