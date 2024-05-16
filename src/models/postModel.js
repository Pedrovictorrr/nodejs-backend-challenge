const db = require('../../config');

const getAllPosts = async () => {
  try {
    console.log('entrou')
    const { rows } = await db.query('SELECT * FROM node_teste.posts');
    return rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createPost = async ( title, body, tags) => {
  const { rows } = await db.query(
    'INSERT INTO node_teste.posts ( title, body, tags) VALUES ($1, $2, $3) RETURNING *',
    [ title, body, tags]
  );
  return rows[0];
};


const getPostById = async (id) => {
  const { rows } = await db.query('SELECT * FROM node_teste.posts WHERE id = $1', [id]);
  return rows[0];
};


const updatePost = async (id, title, body, tags) => {
  const { rows } = await db.query(
    'UPDATE node_teste.posts SET title = $1, body = $2, tags = $3 WHERE id = $4 RETURNING *',
    [title, body, tags, id]
  );
  return rows[0];
};


const deletePost = async (id) => {
  await db.query('DELETE FROM node_teste.posts WHERE id = $1', [id]);
};

module.exports = { getAllPosts, createPost, getPostById, updatePost, deletePost };
