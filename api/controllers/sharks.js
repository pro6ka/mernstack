const path = require('path');
const Shark = require('../models/sharks');

exposrts.index = function (req, res) {
    res.sendFie(path.resolve('views/sharks.html'))
};

exposrts.create = function (req, res) {
    let newShark = new Shark(req.body);
    console.log(req.body);
    newShark.save(function (err) {
        if (err) {
            res.status(400).send('Unable to save shark to database');
        } else {
            res.redirect('/sharks/getshark')
        }
    });
}

exposrts.list = function (req, res) {
    Shark.find({}).exec(function (err, sharks) {
        if (err) {
            return res.send(500, err);
        }
        res.render('getshark', {
            sharks: sharks
        })
    });
}
