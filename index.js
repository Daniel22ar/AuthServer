const express = require('express');
require('dotenv').config();

// Crear servidor
const app = express();

app.use(express.static('public'));

// Parseo de respuesta
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

// Escuchar Peticiones
app.listen(process.env.PORT, () => {
    console.log('Servidor Corriendo puerto 3000');
});