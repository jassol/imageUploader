//Create pool for client connection
const { Pool } = require('pg');

// the line below imports environmental variables from the secrets file
// but only when we are in development mode
if (process.env.NODE_ENV !== 'production') require('../../secrets')
console.log('process.env.DATABASE_URL:',process.env.DATABASE_URL);

const pool = new Pool();

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

module.exports = {
  query: (text, params) => pool.query(text, params)
}
