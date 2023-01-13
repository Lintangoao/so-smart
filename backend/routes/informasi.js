const express = require('express');
const con = require('../src/controllers');
const rbac = require('../src/middlewares/rbac');

const router = express.Router();

router.get('/', con.info.getInformasi);
router.post('/', con.info.create);
router.patch('/:id', con.info.edit);

module.exports = router;