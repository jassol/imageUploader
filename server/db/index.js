/*
//Create pool for client connection
const { Pool } = require('pg');

let pool;

// the line below imports environmental variables from the secrets file
// but only when we are in development mode
if (process.env.NODE_ENV !== 'production') {
  require('../../secrets')
  pool = new Pool();
}
// Production mode (when deployed on Heroku)
else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
}


// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

module.exports = {
  query: (text, params) => pool.query(text, params)
}
*/


//Create pool for client connection
const { Client } = require('pg');
let client;

// the line below imports environmental variables from the secrets file
// but only when we are in development mode
if (process.env.NODE_ENV !== 'production') {
  require('../../secrets');
  client = new Client();
}

// Production mode (when deployed on Heroku)
else {
  client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
}

client.connect();

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

module.exports = {
  query: (text, params) => {
    try {
      return client.query(text, params);
    } catch (e) {
      console.error(e.stack);
      client.end();
    }
  }
};

