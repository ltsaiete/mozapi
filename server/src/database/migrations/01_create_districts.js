module.exports = {
    up: (knex) => {
        return knex.schema.createTable('districts', table => {
            table.increments('id').primary(),
                table.integer('province_id').notNullable().references('id').inTable('provinces'),
                table.string('name').notNullable()
        });
    },

 down: (knex) => {
        return knex.schema.dropTable('districts');
    }
}
