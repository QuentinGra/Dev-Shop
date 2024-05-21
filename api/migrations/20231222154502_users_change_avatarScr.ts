import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    // change avatarSrc length from 50 to 255
    await knex.schema.alterTable('users', (table) => {
        table.string('avatarSrc', 255).alter()
    })
}


export async function down(knex: Knex): Promise<void> {
    // change avatarSrc length from 255 to 50
    await knex.schema.alterTable('users', (table) => {
        table.string('avatarSrc', 50).alter()
    })
}