const express = require('express');

const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.use('/', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    const port = process.env.PORT;
    console.log('Server listening on port', port );
});
