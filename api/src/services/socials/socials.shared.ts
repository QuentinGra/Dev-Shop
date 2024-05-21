// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Social, SocialData, SocialPatch, SocialQuery, SocialService } from './socials.class'

export type { Social, SocialData, SocialPatch, SocialQuery }

export type SocialClientService = Pick<SocialService<Params<SocialQuery>>, (typeof socialMethods)[number]>

export const socialPath = 'api/v1/socials'

export const socialMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const socialClient = (client: ClientApplication) => {
    const connection = client.get('connection')

    client.use(socialPath, connection.service(socialPath), {
        methods: socialMethods
    })
}

// Add this service to the client service type index
declare module '../../client' {
    interface ServiceTypes {
        [socialPath]: SocialClientService
    }
}
