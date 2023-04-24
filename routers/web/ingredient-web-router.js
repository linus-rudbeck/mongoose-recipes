const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/web/ingredient-web-controller');

router.get('/', controller.showAll);

router.get('/:id', controller.showOne);

module.exports = router;