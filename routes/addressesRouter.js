const express = require('express');
const router = express.Router();
const addressesController = require('../Controller/addressesControler');


/* GET users listing. */
router.get('/', addressesController.index);
router.get('/endereco', addressesController.endereco);
router.post('/', addressesController.create);
router.put('/:id', addressesController.update);
router.delete('/:id', addressesController.delete);

module.exports = router;
