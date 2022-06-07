const mongoose = require('mongoose');

const MONGO_USERNAME = 'mongoadmin';
const MONGO_PASSWORD = 'mongoadmin';
const MONGO_HOSTNAME = 'mongodb';
const MONGO_PORT = '27017'
const MONGO_DB = 'sharkinfo';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

db = {};
db.mongoose = mongoose;
db.url = url;
module.exports = db;

