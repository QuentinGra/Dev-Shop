// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Application } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

import { categoryClient } from './services/categories/categories.shared'
export type {
    Category,
    CategoryData,
    CategoryQuery,
    CategoryPatch
} from './services/categories/categories.shared'

import { productClient } from './services/products/products.shared'
export type { Product, ProductData, ProductQuery, ProductPatch } from './services/products/products.shared'

import { socialClient } from './services/socials/socials.shared'
export type { Social, SocialData, SocialQuery, SocialPatch } from './services/socials/socials.shared'

import { userClient } from './services/users/users.shared'
export type { User, UserData, UserQuery, UserPatch } from './services/users/users.shared'

export interface Configuration {
    connection: TransportConnection<ServiceTypes>
}

export interface ServiceTypes {}

export type ClientApplication = Application<ServiceTypes, Configuration>

/**
 * Returns a typed client for the vue-api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any>(
    connection: TransportConnection<ServiceTypes>,
    authenticationOptions: Partial<AuthenticationClientOptions> = {}
) => {
    const client: ClientApplication = feathers()

    client.configure(connection)
    client.configure(authenticationClient(authenticationOptions))
    client.set('connection', connection)

    client.configure(userClient)
    client.configure(socialClient)
    client.configure(productClient)
    client.configure(categoryClient)
    return client
}
