const express = require('express');
const RomanController = require('./controllers/RomanController');

const routes = express.Router();
const romanController = new RomanController();

routes.post('/numerals', romanController.ToNumerals);

module.exports = routes;