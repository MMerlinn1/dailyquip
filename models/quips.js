const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let quipsschema = new Schema({
  user: { type: String, required: true },
  quip: {type: String, required: true, maxlength: 20 }
});

module.exports = mongoose.model('quips', quipsschema);