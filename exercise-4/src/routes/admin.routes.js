const express = require('express');
const { getAdminOverview } = require('../controllers/admin.controller');
const { protect, restrictTo } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(protect, restrictTo('admin'));

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin-only overview and analytics
 */
router.get('/overview', getAdminOverview);

module.exports = router;