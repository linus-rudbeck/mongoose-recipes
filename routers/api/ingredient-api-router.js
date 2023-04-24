const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/api/ingredient-api-controller')

// Get all ingredients
router.get('/', controller.getAll);

// Get one ingredient
router.get('/:id', controller.getOne);

// Create ingredient
router.post('/', controller.create);

// Update ingredient
// Delete ingredient

module.exports = router;