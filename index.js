const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// Crear servidor
const app = express();

// Base de Datos
dbConnection();


app.use(express.static('public'));

// Parseo de respuesta
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Escuchar Peticiones
app.listen(process.env.PORT, () => {
    console.log('Servidor Corriendo puerto 3000');
});