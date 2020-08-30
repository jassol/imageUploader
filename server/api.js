const express = require('express');
const router = express.Router();
const db = require('./db/index.js')

// API routes
// These routes are already mounted on '/api'

router.get('/', async (req, res, next) => {
  try {
    res.send('this is the "/api" route');
  } catch (error) {
    next(error)
  }
});

router.get('/images', async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM images WHERE public = true');
    console.log('rows: ', rows)
    res.send(rows);
  } catch (error) {
    next(error)
  }
});

router.get('/images/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params
    const { rows } = await db.query('SELECT * FROM images WHERE user_id = $1', [userId]);
    res.send(rows)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
