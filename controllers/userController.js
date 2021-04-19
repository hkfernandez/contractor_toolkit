const db = require('../models');

const dbMethods = {
  createUser: function (req, res) {
    //console.log('userController create method hit');
    db.Users.create(req.body)
      .then((newUserInfo) => res.json(newUserInfo))
      .catch((err) => res.status(422).json(err));
  },
}

module.exports = dbMethods