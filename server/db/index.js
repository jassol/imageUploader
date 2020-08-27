//Create pool for client connection
const { Pool } = require('pg');

// the line below imports environmental variables from the secrets file
// but only when we are in development mode
if (process.env.NODE_ENV !== 'production') require('../../secrets')

const pool = new Pool();

// console.log(
//   process.env.USER,
//   process.env.PGUSER,
//   process.env.PGHOST,
//   process.env.PGDATABASE,
//   process.env.PGPORT
// )

// const databaseUrl = process.env.DATABASE_URL || `postgres://localhost:5432/imageuploader`;


// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })


module.exports = {
  query: (text, params) => pool.query(text, params)
}
