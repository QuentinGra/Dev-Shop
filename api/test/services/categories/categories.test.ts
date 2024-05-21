// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'
import { CategoryData } from '../../../src/client'

describe('categories service', () => {
    it('registered the service', () => {
        const service = app.service('categories')

        assert.ok(service, 'Registered the service')
    })

    it('created an deleted a new category', async () => {
        const categoryData: CategoryData = {
            name: 'Test Category',
            description: 'This is a test category'
        }

        const category = await app.service('categories').create(categoryData)

        assert.strictEqual(category.name, 'Test Category')
        assert.strictEqual(category.description, 'This is a test category')

        await app.service('categories').remove(category.categoryId)
    })
})
