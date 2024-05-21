// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'
import { UserData } from '../../../src/client'
// import { passwordHash } from '@feathersjs/authentication-local'

describe('users service', () => {
    it('registered the service', () => {
        const service = app.service('api/v1/users')

        assert.ok(service, 'Registered the service')
    })

    it('created an deleted a new user', async () => {
        const userData: UserData = {
            email: 'user@user.com',
            password: 'supersecret',
            firstname: 'User',
            lastname: 'User',
            permissions: 'user',
            avatarSrc: 'https://www.gravatar.com/avatar/00',
            phone: '1234567890',
            address: '1234 Main St',
            city: 'Anywhere',
            zip: '12345'
        }

        const user = await app.service('api/v1/users').create(userData)

        assert.strictEqual(user.email, 'user@user.com')
        assert.strictEqual(user.firstname, 'User')
        assert.strictEqual(user.lastname, 'User')
        assert.strictEqual(user.permissions, 'user')
        assert.strictEqual(user.avatarSrc, 'https://www.gravatar.com/avatar/00')
        assert.strictEqual(user.phone, '1234567890')
        assert.strictEqual(user.address, '1234 Main St')
        assert.strictEqual(user.city, 'Anywhere')
        assert.strictEqual(user.zip, '12345')
        assert.notDeepEqual(user.password, 'supersecret', 'Password is probably hashed')
    })
})
