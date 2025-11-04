const express = require('express');
const router = express.Router();
const {
  signup,
  googleSignup,
  login,
} = require('../controllers/userController');

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', signup);

// @route   POST /api/auth/google-signup
// @desc    Register/Sign in with Google
// @access  Public
router.post('/google-signup', googleSignup);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', login);

module.exports = router;
