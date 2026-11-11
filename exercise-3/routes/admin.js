const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

// @desc    Admin Dashboard
// @route   GET /admin/dashboard
// @access  Private/Admin
router.get('/dashboard', protect, authorize('admin'), (req, res) => {
  res.json({
    message: `Welcome to the Admin Dashboard, ${req.user.name}!`,
    user: req.user,
  });
});

module.exports = router;