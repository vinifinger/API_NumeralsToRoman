const { celebrate, Joi, Segments } = require('celebrate');
const express = require('express');
const RomanController = require('./controllers/RomanController');

const routes = express.Router();
const romanController = new RomanController();
// Tratamento de body da requisição
const numeralsBodyValidation = celebrate({
    [Segments.BODY]: {
      numerals: Joi.number()
        .min(1)
        .max(3999)
        .required()
    },
  })

routes.post('/numerals', numeralsBodyValidation, romanController.ToRoman);

module.exports = routes;