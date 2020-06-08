module.exports = {
    seed: async (knex) => {
        await knex('provinces').insert([
            { name: 'Niassa' },
            { name: 'Cabo Delgado' },
            { name: 'Nampula' },
            { name: 'Zambézia' },
            { name: 'Tete' },
            { name: 'Manica' },
            { name: 'Sofala' },
            { name: 'Inhambane' },
            { name: 'Gaza' },
            { name: 'Maputo província' },
            { name: 'Maputo cidade' },
        ]);
    }
}
