const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userschema = new Schema({
  uname: { type: String, required: true, maxlength: 16, unique: true },
  pword: { type: String, required: true, maxlength: 150 },
});

module.exports = mongoose.model('users', userschema);