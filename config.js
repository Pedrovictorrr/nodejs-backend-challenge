// dbConfig.js
const { Client } = require('pg');
require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

const dbConfig = {
  user: process.env.DB_USER,
  host: 'localhost',
  database: process.env.NODE_ENV === 'test' ? process.env.DB_DATABASE : 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
};

const client = new Client(dbConfig);
client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
};
