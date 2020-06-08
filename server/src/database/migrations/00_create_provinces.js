
module.exports = {
    up: (knex) => {
        return knex.schema.createTable('provinces', table => {
            table.increments('id').primary(),
                table.string('name').notNullable()
        });
    },

    down: (knex) => {
        return knex.schema.dropTable('provinces');
    }
}
