const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();
// Aplicação de tratamento de Cors, JSON e inserção de Rotas
app.use(cors());
app.use(express.json());
app.use(routes);

// Registra middleware de erros do `celebrate`
app.use(errors());

// Middleware para lidar com algum erro proveninente de algum erro de servidor
app.use((error, request, response, next) => {
  return response.status(500).json({
    error: 'Internal Server Error',
    message: error.message,
  })
});

app.listen(3333);
console.log('Listen port 3333')