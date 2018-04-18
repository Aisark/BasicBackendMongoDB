'use strict';

// Requirements
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Iniciando constiables
const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Conección a la BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos conectada');
});


// Escuchar puerto
app.listen(3000, () => {
    console.log('Express server corriendo en el puerto 3000');
});