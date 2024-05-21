import { ServiceSwaggerOptions } from 'feathers-swagger'

export const authenticationsDocs: ServiceSwaggerOptions = {
    idNames: {
        remove: 'accessToken'
    },
    idType: 'string',
    securities: ['remove', 'removeMulti'],
    multi: ['remove'],
    description: 'Authentication service to get access tokens and logout users.',
    schemas: {
        authRequest: {
            type: 'object',
            properties: {
                strategy: { type: 'string', enum: ['local', 'jwt'] },
                email: { type: 'string' },
                password: { type: 'string' }
            }
        },
        authResult: {
            type: 'object',
            properties: {
                accessToken: { type: 'string' },
                authentication: {
                    type: 'object',
                    properties: {
                        strategy: { type: 'string' }
                    }
                },
                payload: {
                    type: 'object'
                    // properties: {}
                },
                user: { $ref: '#/components/schemas/User' }
            }
        }
    },
    refs: {
        createRequest: 'authRequest',
        createResponse: 'authResult',
        removeResponse: 'authResult',
        removeMultiResponse: 'authResult'
    },
    operations: {
        remove: {
            description: 'Logout the currently logged in user',
            'parameters[0].description': 'accessToken of the currently logged in user'
        },
        removeMulti: {
            description: 'Logout the currently logged in user',
            parameters: []
        }
    }
}
