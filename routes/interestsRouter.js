var express = require('express');
const interestsController = require('../Controller/interestsController');
var router = express.Router();

router.get('/', interestsController.index);
router.post('/', interestsController.create);
router.put('/:id', interestsController.update);
router.delete('/:id', interestsController.delete);

module.exports = router;
