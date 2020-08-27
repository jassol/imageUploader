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
    const { rows } = await db.query('SELECT * FROM images');
    console.log('/images route: ', rows);
    res.send(rows);
  } catch (error) {
    next(error)
  }
});

router.post('/images/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params
    const { rows } = await db.query('SELECT * FROM images WHERE user_id = $1', [userId]);
    console.log('/images/:userId route: ', rows);
    res.send(rows)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
