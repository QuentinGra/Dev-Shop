import { createSwaggerServiceOptions } from 'feathers-swagger'
import {
    categoryDataSchema,
    categoryQuerySchema,
    categorySchema
} from '../services/categories/categories.schema'

/**
 * `categoriesDocs` is an object that contains the Swagger service options for the category service.
 * It is created using the `createSwaggerServiceOptions` function.
 *
 * @property {Object} schemas - An object that contains the schemas for the category data, category query, and category.
 * @property {Object} docs - An object that contains the sagger documentation for the category service.
 * @property {string} docs.description - A description of the category service.
 * @property {Array<string>} docs.securities - An array that contains the securities for the category service.
 *
 */
export const categoriesDocs = createSwaggerServiceOptions({
    schemas: { categoryDataSchema, categoryQuerySchema, categorySchema },
    docs: {
        description: 'The category service to organize products.',
        securities: ['all']
    }
})
