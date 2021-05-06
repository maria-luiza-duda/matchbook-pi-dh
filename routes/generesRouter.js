var express = require('express');
const generesController = require('../Controller/generesController');
var router = express.Router();


router.get('/', generesController.index);
router.post('/', generesController.create);
router.put('/:id', generesController.update);
router.delete('/:id', generesController.delete);

module.exports = router;