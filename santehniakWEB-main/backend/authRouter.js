const Router = require('express');
const router = new Router();
const controller = require('./authController');

router.post('/setProduct', controller.setProduct);
router.post('/sendOrder', controller.sendOrder);

router.get('/getProducts', controller.getProducts)
router.get('/getOrders', controller.getOrders)

router.get('/getOneProducts', controller.getOneProducts)

router.post('/findProducts', controller.findProducts)
module.exports = router;
