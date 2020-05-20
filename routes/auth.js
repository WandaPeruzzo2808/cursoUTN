var express = require('express');
var router = express.Router();

const mainController = require('../controllers/users')
/* GET users listing. */
router.post('/registro', mainController.registro);
router.post('/login', mainController.login);

module.exports = router;
 