const express = require('express');
const con = require('../src/controllers');
const { rbac } = require('../src/middlewares');

const router = express.Router();

router.get('/', rbac.cekAdmin, con.perm.getAll);
router.get('/:id', rbac.cekAdmin, con.perm.getById);
router.post('/', rbac.cekUser, con.perm.create);
//router.patch('/:id', rbac.cekUser, con.lap.update);
router.delete('/:id', rbac.cekAdmin, con.perm.delete);



module.exports = router