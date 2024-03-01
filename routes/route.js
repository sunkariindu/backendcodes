const router = require('express').Router();
 const { signup, getbill } = require('../mailer/controller/appController.js');
 
/** HTTP Request */
 
router.post('/user/signup', signup);
router.post('/product/getbill', getbill);
 
module.exports = router;
 
 