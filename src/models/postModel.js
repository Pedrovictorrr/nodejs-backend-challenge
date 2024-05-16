// models/postModel.js
const db = require('../../config');

class Post {
  // Retorna todos os posts com paginação
  static async getAllPosts(page, limit) {
    const offset = (page - 1) * limit;
    const query = {
      text: 'SELECT * FROM posts LIMIT $1 OFFSET $2',
      values: [limit, offset],
    };

    try {
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      throw new Error('Unable to retrieve posts');
    }
  }

  // Cria um novo post
  static async createPost(title, body, tags) {
    const query = {
      text: 'INSERT INTO posts (title, body, tags) VALUES ($1, $2, $3) RETURNING *',
      values: [title, body, tags],
    };

    try {
      const { rows } = await db.query(query);
      return rows[0];
    } catch (error) {
      throw new Error('Unable to create post');
    }
  }

  // Retorna um post pelo ID
  static async getPostById(id) {
    const query = {
      text: 'SELECT * FROM posts WHERE id = $1',
      values: [id],
    };

    try {
      const { rows } = await db.query(query);
      return rows[0];
    } catch (error) {
      throw new Error('Unable to retrieve post');
    }
  }

  // Atualiza um post pelo ID
  static async updatePost(id, title, body, tags) {
    const query = {
      text: 'UPDATE posts SET title = $2, body = $3, tags = $4 WHERE id = $1 RETURNING *',
      values: [id, title, body, tags],
    };

    try {
      const { rows } = await db.query(query);
      return rows[0];
    } catch (error) {
      throw new Error('Unable to update post');
    }
  }

  // Deleta um post pelo ID
  static async deletePost(id) {
    const query = {
      text: 'DELETE FROM posts WHERE id = $1',
      values: [id],
    };

    try {
      await db.query(query);
    } catch (error) {
      throw new Error('Unable to delete post');
    }
  }
}

module.exports = Post;
