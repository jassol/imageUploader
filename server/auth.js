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

const userNotFound = next => {
  const err = new Error();
  err.message = 'User Not Found';
  err.status = 404;
  next(err);
};

router.get("/me", async (req, res, next) => {
  try {
    if (req.session.userId) {
      const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [req.session.userId]);
      if (rows[0]) {
        const { id, email } = rows[0];
        res.send({ id:id, email:email });
      } else {
        userNotFound(next);
      }
    } else {
      userNotFound(next);
    }
  } catch (error) {
    next(error);
  }
})

router.put("/login", async (req, res, next) => {
  try {
    const { email, pswd } = req.body;
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1 AND pswd = $2', [email, pswd]);
    if (rows.length) {
      const { id, email } = rows[0];
      req.session.userId = id;
      res.send({ id:id, email:email });
    }
    else {
      const err = new Error();
      err.message = 'Incorrect Login Credentials';
      res.status(401).send(err)
    }
  } catch (error) {
    next(error);
  }
})

router.put("/signup", async (req, res, next) => {
  try {
    const { email, pswd } = req.body;
    const { rows } = await db.query('INSERT INTO users (email, pswd) VALUES ($1, $2)', [email, pswd]);
    if (rows) {
      const { id, email } = rows[0];
      req.session.userId = id;
      res.status(201).send({ id:id, email:email });
    }
  } catch (error) {
    error.message = 'Email Already Exists.'
    next(error);
  }
})

module.exports = router;
