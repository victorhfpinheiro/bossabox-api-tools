import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('tools', function (table) {
    table.increments().primary()
    table.string('title').notNullable().unique()
    table.string('link').notNullable()
    table.string('description').notNullable()
    table.specificType('tags', 'text[]').notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('tools')
}
