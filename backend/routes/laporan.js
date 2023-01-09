const express = require('express');
const con = require('../src/controllers');
const { rbac } = require('../src/middlewares');

const router = express.Router();

router.get('/', rbac.cekUser, con.lap.getLaporan);
router.get('/:id', rbac.cekUser, con.lap.getLaporanById);
router.post('/', rbac.cekUser, con.lap.create);
router.patch('/:id', rbac.cekUser, con.lap.update);
router.delete('/:id', rbac.cekUser, con.lap.delete);



module.exports = router