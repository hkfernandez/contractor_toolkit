const router = require('express').Router();
const userDB = require('../controllers/userController')

router.get('/', userDB.createUser
  //(req, res) => res.send('Signin Page')
)

module.exports = router;