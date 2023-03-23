const express = require('express');
const cors = require('cors');
const {getAnimals} = require('./modules/animals')

require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use(cors())

app.get('/animals', getAnimals);

app.listen(port, () => console.log(`Server up on port: ${port}`))