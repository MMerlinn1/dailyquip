var express = require('express');
var router = express.Router();
let quipcontroller = require('../controllers/quipcontroller')

/* GET home page.zz */
router.get('/', quipcontroller.start); 
router.get('/prompt', quipcontroller.prompt)

module.exports = router;
