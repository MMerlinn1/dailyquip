const { model, Mongoose } = require("mongoose");
const quips = require("../models/quips");
const users = require('../models/users')
const modelprompts = require("../models/prompts");


exports.getprompt = function(req, res, next) {
  modelprompts.findOne({promptid: "1" })
  console.log(req.body)
  
}

exports.start = function(req, res, next) {
  res.render('index')
}