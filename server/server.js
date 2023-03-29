const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const {getAnimals} = require('./modules/animals');

require('dotenv').config();

const port = process.env.PORT;
const app = express();

//mongo
const databaseUrl = process.env.MONGO_CONNECTION;
mongoose.connect (databaseUrl);
const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection error:'))
mongoDB.once('open', () => console.log('Connected to Mongo!'))

app.use(cors())

//Routes
app.get('/animals', getAnimals);
app.get('/comments/:id', getComments);
app.post('/comments', postComments);

app.listen(port, () => console.log(`Server up on port: ${port}`))