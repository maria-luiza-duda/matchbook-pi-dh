var express = require('express');
const coverController = require('../Controller/coverController');
var router = express.Router();

/* GET users listing. */
router.get('/', coverController.index)
router.post('/uploadcover', coverController.uploadcover);

module.exports = router;
