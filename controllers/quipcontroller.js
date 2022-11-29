const { model, Mongoose } = require("mongoose");
const quips = require("../models/quips");
const users = require('../models/users')
const modelprompts = require("../models/prompts");


exports.prompt = async function(req, res, next) {
  const doc = await modelprompts.find({}).exec()
  console.log(doc);
// await modelprompts.findOne({}).exec(function (err, dailyprompt) {
//   console.log(dailyprompt)
//   res.send('yeeth')
// })
}

exports.start = function(req, res, next) {
  res.render('index')
}

exports.addprompt = function(req, res, next) {
  let newprompt = new modelprompts({
    prompt: req.body.prompt,
    promptid: req.body.promptid,
  })

  newprompt.save()
}