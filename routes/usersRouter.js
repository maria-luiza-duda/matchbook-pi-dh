var express = require('express');
const usersController = require('../Controller/usersController');
const auth = require('../middlewares/auth');
var router = express.Router();
const ValidarCadasto = require('../middlewares/ValidarCadastro');

/* GET users listing. */
router.get('/', usersController.index);

router.get('/registeredBooks', usersController.registeredBooks);

router.get('/registeruser', usersController.registeruser);
router.get('/myprofile', auth, usersController.myprofile);
router.post('/', ValidarCadasto, usersController.create);

router.get('/login', usersController.login)
router.post('/login', usersController.auth);


router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);


router.get('/updatepage', auth, usersController.updatepage);

module.exports = router;