const knex = require('../database/connection');

class DistrictsController {

    async index(req, res) {
        const districts = await knex('districts')
            .join('provinces', { 'districts.province_id': 'provinces.id' })
            .distinct()
            .select('districts.id', 'districts.name', 'provinces.id as province_id', 'provinces.name as province_name');

        const detailedDistricts = districts.map(district => {
            return {
                id: district.id,
                name: district.name,
                province: {
                    id: district.province_id,
                    name: district.province_name
                }
            }
        });

        return res.json(detailedDistricts);
    }

    async show(req, res) {

        if(req.params.id){
            const {id} = req.params;
            var district = await knex('districts')
            .where('districts.id', id )
            .first()
            .join('provinces', { 'districts.province_id': 'provinces.id' })
            .select('districts.id', 'districts.name', 'provinces.id as province_id', 'provinces.name as province_name')

            var detailedDistricts = {
                id: district.id,
                name: district.name,
                province: {
                    id: district.province_id,
                    name: district.province_name
                }
            }

        }

        if(req.params.province){
            const {province} = req.params;
            var district = await knex('districts')
            .where('districts.province_id', province)
            .distinct()
            .join('provinces', { 'districts.province_id': 'provinces.id' })
            .select('districts.id', 'districts.name', 'provinces.id as province_id', 'provinces.name as province_name')

            var detailedDistricts = district.map(district => {
                return {
                    id: district.id,
                    name: district.name,
                    province: {
                        id: district.province_id,
                        name: district.province_name
                    }
                }
            });
        }

        

        return res.json(detailedDistricts);
    }

    async create(req, res) {
        const province_id = req.params.province;
        const { name } = req.body;

        const district = {
            province_id,
            name
        }

        const districtExists = await knex('districts').select('name').where('name', name);

        if (districtExists.length > 0) {
            return res.status(400).json({ error: 'District already exists' });
        }

        await knex('districts').insert(district);

        return res.json(district);
    }

}

module.exports = DistrictsController;
