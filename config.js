const { Client } = require('pg');

// Configurações do banco de dados
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432, 
};

const client = new Client(dbConfig);
client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
};
