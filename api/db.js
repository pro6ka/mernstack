const mongoose = require('mongoose');

/*
const MONGO_USERNAME = 'mongoadmin';
const MONGO_PASSWORD = 'mongoadmin';
const MONGO_HOSTNAME = 'mongodb';
const MONGO_PORT = '27017'
const MONGO_DB = 'sharkinfo';
*/
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
} = process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to the database!');
}).catch(err => {
    console.error(err);
    process.exit();
});
