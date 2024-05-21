// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table) => {
        table.increments('userId').primary()
        table.string('email', 50).notNullable().unique()
        table.string('password', 50).notNullable()
        table.string('firstname', 50).notNullable()
        table.string('lastname', 50).notNullable()
        table.string('avatarSrc', 50)
        table.string('phone', 10)
        table.string('address', 50)
        table.string('zip', 5)
        table.string('city', 50)
        table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updatedAt')
        table.boolean('isAdmin').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users')
}
