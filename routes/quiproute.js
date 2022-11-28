var express = require('express');
const router = express.Router();
const quipcontroller = require('../controllers/quipcontroller')

route.get('/prompt', quipcontroller.getprompt)

module.exports = router;