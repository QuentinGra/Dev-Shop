// For more information about this file see https://dove.feathersjs.com/guides/cli/log-error.html
import type { HookContext, NextFunction } from '../declarations'
import { logger } from '../logger'

/**
 * `logError` is an asynchronous function that logs any errors that occur during the execution of the `next` function.
 * It is used as a middleware in the application's request handling pipeline.
 *
 * @param {HookContext} context - The context object for the current request.
 * @param {NextFunction} next - The next function in the request handling pipeline.
 *
 * @throws {any} error - If an error occurs during the execution of the `next` function, it is logged and then re-thrown.
 *
 */
export const logError = async (context: HookContext, next: NextFunction) => {
    try {
        await next()
    } catch (error: any) {
        logger.error(error.stack)

        // Log validation errors
        if (error.data) {
            logger.error('Data: %O', error.data)
        }

        throw error
    }
}
