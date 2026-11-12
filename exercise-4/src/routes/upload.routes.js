const express = require('express');
const { uploadProfilePicture } = require('../controllers/upload.controller');
const { protect } = require('../middleware/auth.middleware');
const upload = require('../middleware/upload.middleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: File upload operations
 */
router.post('/profile-picture', protect, upload.single('image'), uploadProfilePicture);

module.exports = router;