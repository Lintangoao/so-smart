const express = require('express');
const con = require('../src/controllers');
const { rbac } = require('../src/middlewares');

const router = express.Router();

router.get('/', rbac.cekAdmin ,con.user.getUser);
router.get('/:id', rbac.cekAdmin, con.user.getUserById);
router.post('/register', con.user.register);
router.patch('/:id', rbac.cekUser, con.user.update);
router.delete('/:id', rbac.cekAdmin, con.user.delete);


module.exports = router