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

router.put("/login", async (req, res, next) => {
  try {
    const { email, pswd } = req.body;
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1 AND pswd = $2', [email, pswd]);
    if (rows) res.send(rows[0]);
    else {
      const err = new Error('Incorrect Login Credentials')
      res.status(401).send(err)
    }
  } catch (error) {
    next(error);
  }
})

module.exports = router;
