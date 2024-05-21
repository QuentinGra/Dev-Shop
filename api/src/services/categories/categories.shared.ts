// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
    Category,
    CategoryData,
    CategoryPatch,
    CategoryQuery,
    CategoryService
} from './categories.class'

export type { Category, CategoryData, CategoryPatch, CategoryQuery }

export type CategoryClientService = Pick<
    CategoryService<Params<CategoryQuery>>,
    (typeof categoryMethods)[number]
>

export const categoryPath = 'api/v1/categories'

export const categoryMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const categoryClient = (client: ClientApplication) => {
    const connection = client.get('connection')

    client.use(categoryPath, connection.service(categoryPath), {
        methods: categoryMethods
    })
}

// Add this service to the client service type index
declare module '../../client' {
    interface ServiceTypes {
        [categoryPath]: CategoryClientService
    }
}
