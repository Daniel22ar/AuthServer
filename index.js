const express = require('express');

const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {
    const port = process.env.PORT;
    console.log('Server listening on port', port );
});
