import { category } from './categories/categories'
import { product } from './products/products'
import { social } from './socials/socials'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

/**
 * `services` is a function that configures the application with all services in .
 *
 * @param {Application} app - The application object.
 *
 * @example
 * services(app);
 * // The app is now configured with the category, product, social, and user services in the app.
 */
export const services = (app: Application) => {
    // All services will be registered here
    app.configure(category)
    app.configure(product)
    app.configure(social)
    app.configure(user)
}
