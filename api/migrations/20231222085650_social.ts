// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('socials', (table) => {
        table.increments('socialId').primary()
        table.enu('name', ['facebook', 'x', 'instagram', 'linkedin', 'github']).notNullable()
        table.string('url', 50).notNullable()
        table.integer('userId').unsigned().notNullable() // table.increment('userId').primary() generate an unsigned integer
        table.foreign('userId').references('users.userId')
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('socials')
}
