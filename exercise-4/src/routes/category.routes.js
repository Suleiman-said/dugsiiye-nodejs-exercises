const express = require('express');
const { getCategories } = require('../controllers/category.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Predefined categories lookup
 */
router.get('/', protect, getCategories);

module.exports = router;