const express = require('express');

const routes = express.Router();

const ProvincesController = require('./controllers/ProvincesController');
const DistrictsController = require('./controllers/DistrictsController');

const provincesController = new ProvincesController();
const districtsController = new DistrictsController();

routes.get('/provinces', provincesController.index);
routes.get('/provinces/:id', provincesController.show);

routes.post('/:province/districts', districtsController.create);
routes.get('/districts', districtsController.index);
routes.get('/districts/:id', districtsController.show);
routes.get('/:province/districts', districtsController.show);

module.exports = routes;