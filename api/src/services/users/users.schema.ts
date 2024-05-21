// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import crypto from 'crypto'
import { resolve, virtual } from '@feathersjs/schema'
import { StringEnum, Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'
import { passwordHash } from '@feathersjs/authentication-local'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { UserService } from './users.class'
import { socialSchema } from '../socials/socials.schema'

// Main data model schema
/**
 * `userSchema` is an object that defines the schema for a user in the application.
 * It is created using the `Type.Object` function from the `@feathersjs/typebox` library.
 *
 * @property {number} userId - The ID of the user.
 * @property {string} email - The email of the user. It has a maximum length of 50 characters.
 * @property {string} password - The password of the user. It has a maximum length of 50 characters.
 * @property {string} firstname - The first name of the user. It has a maximum length of 50 characters.
 * @property {string} lastname - The last name of the user. It has a maximum length of 50 characters.
 * @property {string} [avatarSrc] - The avatar source of the user. It is optional and has a maximum length of 50 characters.
 * @property {string} [phone] - The phone number of the user. It is optional and has a maximum length of 10 characters.
 * @property {string} [address] - The address of the user. It is optional and has a maximum length of 50 characters.
 * @property {string} [zip] - The zip code of the user. It is optional and has a maximum length of 5 characters.
 * @property {string} [city] - The city of the user. It is optional and has a maximum length of 50 characters.
 * @property {string} createdAt - The creation date of the user. It is in date-time format.
 * @property {string} [updatedAt] - The last update date of the user. It is optional and in date-time format.
 * @property {string} [permissions] - The permissions of the user. It is optional and can be either 'admin' or 'user'.
 * @property {Array} [socials] - The socials of the user. It is optional and is an array of references to the socialSchema.
 *
 */
export const userSchema = Type.Object(
    {
        userId: Type.Number(),
        email: Type.String({ maxLength: 50 }),
        password: Type.String({ maxLength: 50 }),
        firstname: Type.String({ maxLength: 50 }),
        lastname: Type.String({ maxLength: 50 }),
        avatarSrc: Type.Optional(Type.String({ maxLength: 50 })),
        phone: Type.Optional(Type.String({ maxLength: 10 })),
        address: Type.Optional(Type.String({ maxLength: 50 })),
        zip: Type.Optional(Type.String({ maxLength: 5 })),
        city: Type.Optional(Type.String({ maxLength: 50 })),
        createdAt: Type.String({ format: 'date-time' }),
        updatedAt: Type.Optional(Type.String({ format: 'date-time' })),
        permissions: Type.Optional(StringEnum(['admin', 'user'])),
        // isAdmin: Type.Boolean(),
        socials: Type.Array(Type.Optional(Type.Ref(socialSchema)))
    },
    { $id: 'User', additionalProperties: true }
)
export type User = Static<typeof userSchema>
export const userValidator = getValidator(userSchema, dataValidator)
export const userResolver = resolve<User, HookContext<UserService>>({
    /**
     * `socials` is a virtual property that fetches the social data associated with a user.
     * It is an asynchronous function that queries the 'api/v1/socials' service for social data that matches the user's ID.
     *
     * @param {User} user - The user object.
     * @param {HookContext<UserService>} context - The context object for the current request.
     *
     * @returns {Promise<Array>} - A promise that resolves to an array of social data associated with the user.
     *
     */
    socials: virtual(async (user, context) => {
        // Get all socials in an array, the query is filtered by the userId, and don't return the userId
        const results = await context.app.service('api/v1/socials').find({
            query: {
                userId: user.userId,
                $select: ['socialId', 'name', 'url']
            }
        })
        return results.data
    })
})

export const userExternalResolver = resolve<User, HookContext<UserService>>({
    // The password should never be visible externally
    /**
     * `password` is a virtual property that ensures the password of a user is never visible externally.
     * It is an asynchronous function that always returns `undefined`.
     *
     * @returns {Promise<undefined>} - A promise that resolves to `undefined`.
     *
     */
    password: async (): Promise<undefined> => undefined
})

// Schema for creating new users
export const userDataSchema = Type.Pick(
    userSchema,
    [
        'email',
        'password',
        'firstname',
        'lastname',
        'avatarSrc',
        'phone',
        'address',
        'zip',
        'city',
        'permissions'
    ],
    {
        $id: 'UserData'
    }
)
export type UserData = Static<typeof userDataSchema>
export const userDataValidator = getValidator(userDataSchema, dataValidator)
export const userDataResolver = resolve<User, HookContext<UserService>>({
    password: passwordHash({ strategy: 'local' }),
    // If there's no permissions, set it to user
    permissions: async (value) => value || 'user',
    // Generate createdAt at datetime format
    createdAt: async () => new Date().toISOString().slice(0, 19).replace('T', ' '),
    // Add gravatar url as avatarSrc if no avatarSrc is provided
    // see https://feathersjs.com/guides/basics/schemas.html#adding-a-user-avatar

    avatarSrc: async (value, user) => {
        // If the user passed an avatar image, use it
        if (value !== undefined) return value
        // Gravatar uses MD5 hashes from an email address to get the image
        const hash = crypto.createHash('md5').update(user.email.toLowerCase()).digest('hex')
        // Return the full avatar URL
        return `https://s.gravatar.com/avatar/${hash}?s=60`
    }
})

// Schema for updating existing entries
export const userPatchSchema = Type.Partial(userSchema, {
    $id: 'UserPatch'
})
export type UserPatch = Static<typeof userPatchSchema>
export const userPatchValidator = getValidator(userPatchSchema, dataValidator)
export const userPatchResolver = resolve<User, HookContext<UserService>>({
    password: passwordHash({ strategy: 'local' }),
    // Generate updatedAt at datetime format
    updatedAt: async () => new Date().toISOString().slice(0, 19).replace('T', ' ')
})

// Schema for allowed query properties
export const userQueryProperties = Type.Pick(userSchema, [
    'userId',
    'email',
    'firstname',
    'lastname',
    'avatarSrc',
    'phone',
    'address',
    'zip',
    'city',
    'createdAt',
    'updatedAt',
    'permissions'
])
export const userQuerySchema = Type.Intersect(
    [
        querySyntax(userQueryProperties),
        // Add additional query properties here
        Type.Object({}, { additionalProperties: false })
    ],
    { additionalProperties: true }
)
export type UserQuery = Static<typeof userQuerySchema>
export const userQueryValidator = getValidator(userQuerySchema, queryValidator)
export const userQueryResolver = resolve<UserQuery, HookContext<UserService>>({
    // If there is a user (e.g. with authentication), they are only allowed to see their own data
    // If ir's an admin, they can see everything
    userId: async (value, user, context) => {
        if (context.params.user) {
            return context.params.user.permissions === 'admin' ? value : context.params.user.userId
        }

        return value
    }
})
