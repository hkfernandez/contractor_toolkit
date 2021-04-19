const db = require('../models');

const userController = {
  test: function (req, res) {
    console.log('User Controller Test Method Activated')
  },
  createUser: function (req, res) {
    console.log('userController create method hit');
    db.Users.create(req.body)
      .then((newUserInfo) => res.json(newUserInfo))
      .catch((err) => res.status(422).json(err));
  }
}

module.exports = userController