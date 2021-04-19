
const path = require('path')
const router = require('express').Router();
const authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);

//router.get('/', (req, res) => res.redirect('/auth'))

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;