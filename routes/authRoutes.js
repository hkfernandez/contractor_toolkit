const router = require('express').Router();
const userController = require('../controllers/userController')

router.route('/')
  .get(userController.test);
//(req, res) => res.send('Signin Page')

module.exports = router;