// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Category, CategoryData, CategoryPatch, CategoryQuery } from './categories.schema'

export type { Category, CategoryData, CategoryPatch, CategoryQuery }

export interface CategoryParams extends KnexAdapterParams<CategoryQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class CategoryService<ServiceParams extends Params = CategoryParams> extends KnexService<
    Category,
    CategoryData,
    CategoryParams,
    CategoryPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'categories',
        id: 'categoryId'
    }
}
