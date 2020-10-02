const express = require('express');
const connectDB = require('./config/db');


connectDB();

const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(4000, () => console.log(`Express Server Now Running`))