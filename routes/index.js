var express = require('express');
var router = express.Router();
let quipcontroller = require('../controllers/quipcontroller')

/* GET home page. */
router.get('/', quipcontroller.start); 

module.exports = router;
