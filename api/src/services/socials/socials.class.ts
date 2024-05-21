// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Social, SocialData, SocialPatch, SocialQuery } from './socials.schema'

export type { Social, SocialData, SocialPatch, SocialQuery }

export interface SocialParams extends KnexAdapterParams<SocialQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class SocialService<ServiceParams extends Params = SocialParams> extends KnexService<
    Social,
    SocialData,
    SocialParams,
    SocialPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'socials',
        id: 'socialId'
    }
}
