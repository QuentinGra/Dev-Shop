// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import { socialsDocs } from '../../docs'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
    socialDataValidator,
    socialPatchValidator,
    socialQueryValidator,
    socialResolver,
    socialExternalResolver,
    socialDataResolver,
    socialPatchResolver,
    socialQueryResolver
} from './socials.schema'

import type { Application } from '../../declarations'
import { SocialService, getOptions } from './socials.class'
import { socialPath, socialMethods } from './socials.shared'

export * from './socials.class'
export * from './socials.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const social = (app: Application) => {
    // Register our service on the Feathers application
    app.use(socialPath, new SocialService(getOptions(app)), {
        // A list of all methods this service exposes externally
        methods: socialMethods,
        // You can add additional custom events to be sent to clients here
        events: [],
        docs: socialsDocs
    })
    // Initialize hooks
    app.service(socialPath).hooks({
        around: {
            all: [
                schemaHooks.resolveExternal(socialExternalResolver),
                schemaHooks.resolveResult(socialResolver),
                authenticate('jwt')
            ]
        },
        before: {
            all: [
                schemaHooks.validateQuery(socialQueryValidator),
                schemaHooks.resolveQuery(socialQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schemaHooks.validateData(socialDataValidator),
                schemaHooks.resolveData(socialDataResolver),
                authenticate('jwt')
            ],
            patch: [
                schemaHooks.validateData(socialPatchValidator),
                schemaHooks.resolveData(socialPatchResolver),
                authenticate('jwt')
            ],
            remove: [authenticate('jwt')]
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    })
}

// Add this service to the service type index
declare module '../../declarations' {
    interface ServiceTypes {
        [socialPath]: SocialService
    }
}
