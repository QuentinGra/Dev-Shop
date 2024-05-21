// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'
import { LocalStrategy } from '@feathersjs/authentication-local'

import type { Application } from './declarations'

import { authenticationsDocs } from './docs'
import { ServiceSwaggerOptions } from 'feathers-swagger'

declare module './declarations' {
    interface ServiceTypes {
        // add custom authentication service (/api/v1/auth) to the Application interface
        '/api/v1/auth': AuthenticationService
    }
}

// Add docs property to the authentication service for Swagger docs
// declare module '@feathersjs/authentication' {
//     class AuthenticationService {
//         docs: ServiceSwaggerOptions
//     }
// }

class UpdatedAuthenticationService extends AuthenticationService {
    docs: ServiceSwaggerOptions = {};
}

export const authentication = (app: Application) => {
    const authentication = new UpdatedAuthenticationService(app)
    // Add docs property to the authentication service for Swagger docs
    authentication.docs = authenticationsDocs

    authentication.register('jwt', new JWTStrategy())
    authentication.register('local', new LocalStrategy())

    app.use('/api/v1/auth', authentication)
}
