// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
import { feathers } from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import { koa, rest, bodyParser, errorHandler, parseAuthentication, cors, serveStatic } from '@feathersjs/koa'

import { configurationValidator } from './configuration'
import type { Application } from './declarations'
import { logError } from './hooks/log-error'
import swagger from 'feathers-swagger'
import { sqlite } from './sqlite'
import { authentication } from './authentication'
import { services } from './services'
import { specs } from './docs'

const app: Application = koa(feathers())


// Load our app configuration (see config/ folder)
app.configure(configuration(configurationValidator))

// Set up Koa middleware
app.use(cors())
app.use(serveStatic(app.get('public')))
app.use(errorHandler())
app.use(parseAuthentication())
app.use(bodyParser())

// REST transport
app.configure(rest())

// Swagger
app.configure(
    // OpenAPI 3.0.0 spec
    swagger({
        prefix: /api\/v\d\//,
        specs,
        ui: swagger.swaggerUI({
            docsPath: '/api/v1',
            indexFile: './src/ui/swagger.html'
        })
    })
)

app.configure(sqlite)
app.configure(authentication)
app.configure(services)

// Register hooks that run on all service methods
app.hooks({
    around: {
        all: [logError]
    },
    before: {},
    after: {},
    error: {}
})
// Register application setup and teardown hooks here
app.hooks({
    setup: [],
    teardown: []
})

export { app }
