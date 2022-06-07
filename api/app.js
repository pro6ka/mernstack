const express = require('express');
const router = express.Router();
const db = require('./db');


const app = express();

const port = 8080;
const path = __dirname + '/views/';

router.use(function timeLog(req, res, next) {
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

app.use(express.urlencoded({extended: true}));
app.use(express.static(path))
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
