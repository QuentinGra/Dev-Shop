import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    // delete the column isAdmin from the users table and add the column permissions
    await knex.schema.table('users', (table) => {
        table.dropColumn('isAdmin')
        table.string('permissions', 5).defaultTo('user')
    })
}

export async function down(knex: Knex): Promise<void> {
    // delete the column permissions from the users table and add the column isAdmin
    await knex.schema.table('users', (table) => {
        table.dropColumn('permissions')
        table.boolean('isAdmin').defaultTo(false)
    })
}