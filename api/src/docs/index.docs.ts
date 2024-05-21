/**
 * `specs` is an object that contains the specifications for the DWWM Vue.js API.
 *
 * @property {Object} info - An object that contains general information about the API.
 * @property {string} info.title - The title of the API.
 * @property {string} info.description - A description of the API.
 * @property {string} info.version - The version of the API.
 * @property {Object} info.contact - An object that contains contact information for the API.
 * @property {string} info.contact.email - The contact email for the API.
 *
 * @see {https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml}
 */
export const specs = {
    info: {
        title: 'DWWM Vue.js API',
        description:
            'This API is specifically designed for learning Vue.js as part of the DWWM (Web and Mobile Web Developer) certification program in 2023-2024.<br> It will be primarily used for testing XHR/Fetch requests during the development of a Vue.js application.',
        version: '1.0.0',
        contact: {
            email: 'contact@gregdesplaces.com'
        }
    }
}
