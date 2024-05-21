// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { CategoryService } from './categories.class'

// Main data model schema
export const categorySchema = Type.Object(
    {
        categoryId: Type.Number(),
        name: Type.String(),
        description: Type.String()
    },
    { $id: 'Category', additionalProperties: true }
)
export type Category = Static<typeof categorySchema>
export const categoryValidator = getValidator(categorySchema, dataValidator)
export const categoryResolver = resolve<Category, HookContext<CategoryService>>({})

export const categoryExternalResolver = resolve<Category, HookContext<CategoryService>>({})

// Schema for creating new entries
export const categoryDataSchema = Type.Pick(categorySchema, ['name', 'description'], {
    $id: 'CategoryData'
})
export type CategoryData = Static<typeof categoryDataSchema>
export const categoryDataValidator = getValidator(categoryDataSchema, dataValidator)
export const categoryDataResolver = resolve<Category, HookContext<CategoryService>>({})

// Schema for updating existing entries
export const categoryPatchSchema = Type.Partial(categorySchema, {
    $id: 'CategoryPatch'
})
export type CategoryPatch = Static<typeof categoryPatchSchema>
export const categoryPatchValidator = getValidator(categoryPatchSchema, dataValidator)
export const categoryPatchResolver = resolve<Category, HookContext<CategoryService>>({})

// Schema for allowed query properties
export const categoryQueryProperties = Type.Pick(categorySchema, ['categoryId', 'name', 'description'])
export const categoryQuerySchema = Type.Intersect(
    [
        querySyntax(categoryQueryProperties),
        // Add additional query properties here
        Type.Object({}, { additionalProperties: true })
    ],
    { additionalProperties: true }
)
export type CategoryQuery = Static<typeof categoryQuerySchema>
export const categoryQueryValidator = getValidator(categoryQuerySchema, queryValidator)
export const categoryQueryResolver = resolve<CategoryQuery, HookContext<CategoryService>>({})
