import { createSwaggerServiceOptions } from 'feathers-swagger'
import { productDataSchema, productQuerySchema, productSchema } from '../services/products/products.schema'

/**
 * `productsDocs` is an object that contains the Swagger service options for the product service.
 * It is created using the `createSwaggerServiceOptions` function.
 *
 * @property {Object} schemas - An object that contains the schemas for the product data, product query, and product.
 * @property {Object} docs - An object that contains the swagger documentation for the product service.
 * @property {string} docs.description - A description of the product service.
 * @property {Array<string>} docs.securities - An array that contains the securities for the product service.
 *
 */
export const productsDocs = createSwaggerServiceOptions({
    schemas: { productDataSchema, productQuerySchema, productSchema },
    docs: {
        description: 'The product network service linked to one category.',
        securities: ['all']
    }
})
