const knex = require('../database/connection');

class ProvincesController {

    async index(req, res) {
        const provinces = await knex('provinces').select('*');

        return res.json(provinces);
    }

    async show(req, res) {
        const { id } = req.params;
        const province = await knex('provinces').where('id', id).first();

        return res.json(province);
    }

}

module.exports = ProvincesController;
