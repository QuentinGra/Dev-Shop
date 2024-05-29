// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('categories', (table) => {
        table.increments('categoryId').primary()
        table.string('name', 50).notNullable().unique()
        table.string('description').notNullable()
    })

    await knex.schema.createTable('products', (table) => {
        table.increments('productId').primary()
        table.string('name', 100).notNullable().unique()
        table.string('description').notNullable()
        table.decimal('price', 7, 2).notNullable()
        table.string('illustration', 500)
        table.datetime('createdAt').notNullable()
        table.datetime('updateAt')
        table.integer('categoryId').unsigned().notNullable()

        table.foreign('categoryId').references('categories.categoryId')
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('categories')
    await knex.schema.dropTable('products')
}
