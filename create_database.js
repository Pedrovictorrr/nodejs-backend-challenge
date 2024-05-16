const { Client } = require("pg");
const bcrypt = require('bcrypt');


const dbConfig = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432, 
};

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
      CREATE TABLE IF NOT EXISTS usuarios (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        email TEXT UNIQUE NOT NULL, 
        senha TEXT NOT NULL,
        token TEXT
      );
    `);
    console.log("Esquema e tabelas criados com sucesso!");
  } catch (error) {
    console.error("Erro ao criar esquema e tabelas:", error);
  }
}

async function seedData(client) {
  try {
    await client.query(`
      INSERT INTO posts (title, body, tags)
      VALUES ('Título do Post', 'Corpo do post aqui', '{"tag1", "tag2"}');
    `);
    console.log("Seed de dados adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar seed de dados:", error);
  }
}

async function seedUser(client) {
  try {
    const password = '123456';
    const hashedPassword = await bcrypt.hash(password, 10);

    await client.query(`
      INSERT INTO usuarios (email, senha)
      VALUES ('teste@teste.com', '${hashedPassword}');
    `);
    console.log("Usuário de teste adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar usuário de teste:", error);
  }
}

async function main() {
  const client = new Client(dbConfig);
  await client.connect();

  try {
    await createSchema(client);
    await seedData(client);
    await seedUser(client);
  } finally {
    await client.end();
  }
}

main();
