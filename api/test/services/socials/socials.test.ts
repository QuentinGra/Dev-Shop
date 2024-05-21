// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'
import { SocialData } from '../../../src/client'

describe('socials service', () => {
    it('registered the service', () => {
        const service = app.service('socials')

        assert.ok(service, 'Registered the service')
    })

    it('created an deleted a new social network', async () => {
        const socialData: SocialData = {
            name: 'x',
            url: 'https://test.social'
        }

        const social = await app.service('socials').create(socialData)

        assert.strictEqual(social.name, 'x')
        assert.strictEqual(social.url, 'https://test.social')

        await app.service('socials').remove(social.socialId)
    })
})
