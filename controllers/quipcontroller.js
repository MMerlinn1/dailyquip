const { model, Mongoose } = require("mongoose");
const quips = require("../models/quips");
const users = require('../models/users')
const modelprompts = require("../models/prompts");

let dailyprompt;
exports.prompt = function(req, res, next) {
  return new Promise((resolve, reject) => {   
   resolve(modelprompts.findOne())
  })
  
}
async function prompt() {
  let response = await modelprompts.findOne()
  console.log(response);
}