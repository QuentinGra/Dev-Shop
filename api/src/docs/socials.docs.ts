import { createSwaggerServiceOptions } from 'feathers-swagger'
import { socialDataSchema, socialQuerySchema, socialSchema } from '../services/socials/socials.schema'

/**
 * `socialsDocs` is an object that contains the Swagger service options for the social network service.
 * It is created using the `createSwaggerServiceOptions` function.
 *
 * @property {Object} schemas - An object that contains the schemas for the social data, social query, and social.
 * @property {Object} docs - An object that contains the swagger documentation for the social network service.
 * @property {string} docs.description - A description of the social network service.
 * @property {Array<string>} docs.securities - An array that contains the securities for the social network service.
 *
 */
export const socialsDocs = createSwaggerServiceOptions({
    schemas: { socialDataSchema, socialQuerySchema, socialSchema },
    docs: {
        description: 'The social network service linked to an user.',
        securities: ['all']
    }
})
