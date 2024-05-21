import { createSwaggerServiceOptions } from 'feathers-swagger'
import { userDataSchema, userQuerySchema, userSchema } from '../services/users/users.schema'

/**
 * `usersDocs` is an object that contains the Swagger service options for the user service.
 * It is created using the `createSwaggerServiceOptions` function.
 *
 * @property {Object} schemas - An object that contains the schemas for the user data, user query, and user.
 * @property {Object} docs - An object that contains the documentation for the user service.
 * @property {string} docs.description - A description of the user service.
 * @property {Array<string>} docs.securities - An array that contains the securities for the user service.
 *
 */
export const usersDocs = createSwaggerServiceOptions({
    schemas: { userDataSchema, userQuerySchema, userSchema },
    docs: {
        description: 'The user service allows you to create and manage users.',
        securities: ['all']
    }
})
