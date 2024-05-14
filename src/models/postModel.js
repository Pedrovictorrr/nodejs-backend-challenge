const db = require('../../config');

// Retorna todos os posts
const getAllPosts = async () => {
  try {
    console.log('entrou')
    const { rows } = await db.query('SELECT * FROM node_teste.posts');
    return rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Cria um novo post
const createPost = async ( title, body, tags) => {
  const { rows } = await db.query(
    'INSERT INTO node_teste.posts ( title, body, tags) VALUES ($1, $2, $3) RETURNING *',
    [ title, body, tags]
  );
  return rows[0];
};

// Retorna um post pelo ID
const getPostById = async (id) => {
  const { rows } = await db.query('SELECT * FROM node_teste.posts WHERE id = $1', [id]);
  return rows[0];
};

// Atualiza um post pelo ID
const updatePost = async (id, title, body, tags) => {
  const { rows } = await db.query(
    'UPDATE node_teste.posts SET title = $1, body = $2, tags = $3 WHERE id = $4 RETURNING *',
    [title, body, tags, id]
  );
  return rows[0];
};

// Deleta um post pelo ID
const deletePost = async (id) => {
  await db.query('DELETE FROM node_teste.posts WHERE id = $1', [id]);
};

module.exports = { getAllPosts, createPost, getPostById, updatePost, deletePost };
