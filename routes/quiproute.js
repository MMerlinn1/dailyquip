var express = require('express');
var router = express.Router();
const quipcontroller = require('../controllers/quipcontroller')

route.get('/prompt', quipcontroller.getprompt)

module.exports = router;