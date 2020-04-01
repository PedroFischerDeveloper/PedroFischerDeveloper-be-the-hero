const express = require('express');

const {celebrate, Segments, Joi} = require('celebrate');

const SessionController = require('./controllers/SessionController');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');
const ProfileOngController = require('./controllers/ProfileOngController');

const routes = express.Router();

routes.post('/auth', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatssap: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}) , OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}) ,ProfileOngController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),IncidentController.index);


routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}),IncidentController.delete);


module.exports = routes;