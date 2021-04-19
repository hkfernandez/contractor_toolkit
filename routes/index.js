const router = require('express').Router();
const authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);

router.get('/', (req, res) => res.redirect('/auth'))

module.exports = router;