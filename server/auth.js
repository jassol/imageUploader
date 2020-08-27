const express = require('express');
const router = express.Router();
const db = require('./db/index.js')

// Auth routes
// These routes are already mounted on '/auth'

// Local Authorization Route
router.get("/", async (req, res, next) => {
  try {
    const loggedInState = true;
    res.send(loggedInState);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
