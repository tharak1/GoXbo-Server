const express = require('express');
const { createMonument, getMonument, findById } = require('../controller');
const router = express.Router();

router.route('/create').post(createMonument);
router.route('/getfilter').get(getMonument);
router.route('/:id').get(findById);
module.exports = router;