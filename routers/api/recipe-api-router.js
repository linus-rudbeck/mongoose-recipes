const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/api/recipe-api-controller');

router.get('/', controller.getAll);

router.get('/:id', controller.getOne);

router.post('/', controller.create);

module.exports = router;