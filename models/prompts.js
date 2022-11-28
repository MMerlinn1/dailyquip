const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let promptschema = new Schema({
    prompt: { type: String, required: true},
    promptid: { type: String, required: true},
});

module.exports = mongoose.model('prompts', promptschema);