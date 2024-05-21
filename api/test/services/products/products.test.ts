// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'
import { ProductData } from '../../../src/client'

describe('products service', () => {
    it('registered a new product', () => {
        const service = app.service('products')

        assert.ok(service, 'Registered the service')
    })

    it('created a new product', async () => {
        const productData: ProductData = {
            name: 'Test Product',
            description: 'This is a test product',
            price: 123.45,
            illustration: 'test.png',
            categoryId: 1
        }

        const product = await app.service('products').create(productData)

        assert.strictEqual(product.name, 'Test Product')
        assert.strictEqual(product.description, 'This is a test product')
        assert.strictEqual(product.price, 123.45)
        assert.strictEqual(product.illustration, 'test.png')
        assert.strictEqual(product.categoryId, 1)

        await app.service('products').remove(product.productId)
    })
})
