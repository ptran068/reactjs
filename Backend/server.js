const express = require('express')
const mongoose = require('mongoose');
const index = require('./index');
const bodyParser = require('body-parser');
const app = express()
const port = 4000

mongoose.connect('mongodb://localhost:27017/reactjs', { useNewUrlParser: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(index);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app;