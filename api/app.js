const express = require('express');
const router = express.Router();
// const db = require('./db');
const mongoose = require('mongoose');
const MONGO_USERNAME = 'mongoadmin';
const MONGO_PASSWORD = 'mongoadmin';
const MONGO_HOSTNAME = 'mongodb';
const MONGO_PORT = '27017'
const MONGO_DB = 'sharkinfo';
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to the database!');
}).catch(err => {
    console.error(err);
    process.exit();
});

const app = express();

const port = 8080;
const path = __dirname + '/views/';

router.use(function timeLog(req, res, next) {
    console.log(url);
    console.log(`Time: ${Date.now()}`);
    next();
})

router.get('/', (req, res) => {
    res.sendFile(path + 'index.html');
})

router.post('/', (req, res) => {
    res.send('Got a POST request');
});

router.get('/sharks', function(req, res) {
    res.sendFile(path + 'sharks.html');
});

app.use(express.static(path))
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
