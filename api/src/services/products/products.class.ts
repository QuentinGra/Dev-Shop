// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Product, ProductData, ProductPatch, ProductQuery } from './products.schema'

export type { Product, ProductData, ProductPatch, ProductQuery }

export interface ProductParams extends KnexAdapterParams<ProductQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ProductService<ServiceParams extends Params = ProductParams> extends KnexService<
    Product,
    ProductData,
    ProductParams,
    ProductPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'products',
        id: 'productId'
    }
}
