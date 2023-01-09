const express = require('express');
const con = require('../src/controllers');

const router = express.Router();

router.get('/whoami', con.auth.whoami);
router.post('/login', con.auth.login);
router.delete('/logout', con.auth.logout);



module.exports = router