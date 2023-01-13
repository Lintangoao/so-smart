const express = require('express');
const con = require('../src/controllers');
const rbac = require('../src/middlewares/rbac');

const router = express.Router();

router.get('/whoami', con.auth.whoami);
router.post('/login', con.auth.login);
router.post('/loginAdmin',con.auth.loginAdmin);
router.delete('/logout', con.auth.logout);



module.exports = router