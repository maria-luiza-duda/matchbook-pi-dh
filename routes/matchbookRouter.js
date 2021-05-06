
var express = require('express');
const matchbookController = require('../Controller/matchbooksController');
var router = express.Router();


router.get('/', matchbookController.index);
router.post('/', matchbookController.create);
router.delete('/:id', matchbookController.delete);
module.exports = router;
