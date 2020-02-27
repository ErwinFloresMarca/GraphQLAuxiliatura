const mongoose = require('../connect');
const Schema = mongoose.Schema;

const userSchema = Schema({
    user: String,
    password: String
});

const user = mongoose.model('users', userSchema);

module.exports = user;
