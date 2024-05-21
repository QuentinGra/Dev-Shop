// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { SocialService } from './socials.class'

// Main data model schema
export const socialSchema = Type.Object(
    {
        socialId: Type.Number(),
        name: StringEnum(['facebook', 'x', 'instagram', 'linkedin', 'github']),
        url: Type.String({ maxLength: 50 }),
        userId: Type.Number()
    },
    { $id: 'Social', additionalProperties: true }
)
export type Social = Static<typeof socialSchema>
export const socialValidator = getValidator(socialSchema, dataValidator)
export const socialResolver = resolve<Social, HookContext<SocialService>>({})

export const socialExternalResolver = resolve<Social, HookContext<SocialService>>({})

// Schema for creating new entries
export const socialDataSchema = Type.Pick(socialSchema, ['name', 'url'], {
    $id: 'SocialData'
})
export type SocialData = Static<typeof socialDataSchema>
export const socialDataValidator = getValidator(socialDataSchema, dataValidator)
export const socialDataResolver = resolve<Social, HookContext<SocialService>>({
    userId: async (value, data, context) => {
        // The userId is set to the authenticated user.
        // If the user is not authenticated, the request will fail.
        if (context.params.user) {
            return context.params.user.userId
        } else if (process.env.NODE_ENV === 'test') {
            // for test purposes, we allow to create a social network without being authenticated
            // get the first user id and return it
            const users = await context.app.service('api/v1/users').find()
            return users.data[0].userId
        }
    }
})

// Schema for updating existing entries
export const socialPatchSchema = Type.Partial(socialSchema, {
    $id: 'SocialPatch'
})
export type SocialPatch = Static<typeof socialPatchSchema>
export const socialPatchValidator = getValidator(socialPatchSchema, dataValidator)
export const socialPatchResolver = resolve<Social, HookContext<SocialService>>({})

// Schema for allowed query properties
export const socialQueryProperties = Type.Pick(socialSchema, ['socialId', 'name', 'url', 'userId'])
export const socialQuerySchema = Type.Intersect(
    [
        querySyntax(socialQueryProperties),
        // Add additional query properties here
        Type.Object({}, { additionalProperties: false })
    ],
    { additionalProperties: true }
)
export type SocialQuery = Static<typeof socialQuerySchema>
export const socialQueryValidator = getValidator(socialQuerySchema, queryValidator)
export const socialQueryResolver = resolve<SocialQuery, HookContext<SocialService>>({})
