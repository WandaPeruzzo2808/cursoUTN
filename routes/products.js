var express = require('express');
var router = express.Router();

const productsController = require('../controllers/products')
/* GET users listing. */
router.get('/', productsController.getAll);
router.get('/destacados', productsController.getDestacados);
router.get('/:id', productsController.getById);
router.post('/', productsController.create);
router.delete('/:id', productsController.delete );
router.put('/:id', productsController.update);
module.exports = router;
 