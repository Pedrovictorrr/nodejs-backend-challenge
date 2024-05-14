const { Client } = require('pg');

// Configurações do banco de dados
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432, // Porta padrão do PostgreSQL
};

// Função para criar o esquema e as tabelas
async function createSchema(client) {
  try {  
    await client.query(`
      CREATE SCHEMA IF NOT EXISTS node_teste;
      SET search_path TO node_teste;
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
      CREATE TABLE IF NOT EXISTS posts (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        body TEXT NOT NULL,
        tags TEXT[] DEFAULT '{}'
      );
    `);
    console.log('Esquema e tabelas criados com sucesso!');
  } catch (error) {
    console.error('Erro ao criar esquema e tabelas:', error);
  }
}

// Função para adicionar um seed de post
async function seedData(client) {
  try {
    await client.query(`
      INSERT INTO posts (title, body, tags)
      VALUES ('Título do Post', 'Corpo do post aqui', '{"tag1", "tag2"}');
    `);
    console.log('Seed de dados adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar seed de dados:', error);
  }
}

// Função principal
async function main() {
  const client = new Client(dbConfig);
  await client.connect();

  try {
    await createSchema(client);
    await seedData(client);
  } finally {
    await client.end();
  }
}

// Chamada da função principal
main();
