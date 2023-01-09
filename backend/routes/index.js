const express = require('express');
const router = express.Router();
const con = require('../src/controllers');
const user = require('./user');
const laporan = require('./laporan');
const auth = require('./auth');

router.use('/users', user);
router.use('/laporan', laporan);
router.use('/auth', auth)

module.exports = router