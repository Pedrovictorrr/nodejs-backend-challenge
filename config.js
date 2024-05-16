// dbConfig.js
const { Client } = require('pg');
require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env

const dbConfig = {
  user: process.env.DB_USER,
  host: 'localhost',
  database: 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
};

const client = new Client(dbConfig);
client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
};
