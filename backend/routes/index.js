const express = require('express');
const router = express.Router();
const con = require('../src/controllers');
const user = require('./user');
const laporan = require('./laporan');
const auth = require('./auth');
const permohonan = require('./permohonan');
const informasi = require('./informasi');

router.use('/users', user);
router.use('/laporan', laporan);
router.use('/auth', auth)
router.use('/permohonan', permohonan);
router.use('/informasi', informasi);

module.exports = router