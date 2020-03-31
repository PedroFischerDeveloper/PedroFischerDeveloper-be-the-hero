const express = require('express');

const SessionController = require('./controllers/SessionController');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');
const ProfileOngController = require('./controllers/ProfileOngController');

const routes = express.Router();

routes.post('/auth', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileOngController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;