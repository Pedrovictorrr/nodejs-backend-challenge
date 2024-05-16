// controllers/postController.js
const Post = require('../models/postModel');
const logger = require('../utils/logger');

// Retorna todos os posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Cria um novo post
exports.createPost = async (req, res) => {
  const { title, body, tags } = req.body;

  try {
    const newPost = await Post.createPost(title, body, tags);
    res.status(201).json(newPost);
  } catch (err) {
    logger.error(err);
    res.status(400).json({ message: err.message });
  }
};

// Retorna um post pelo ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Atualiza um post pelo ID
exports.updatePost = async (req, res) => {
  const { title, body, tags } = req.body;

  try {
    const updatedPost = await Post.updatePost(req.params.id, title, body, tags);
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (err) {
    logger.error(err);
    res.status(400).json({ message: err.message });
  }
};

// Deleta um post pelo ID
exports.deletePost = async (req, res) => {
  try {
    await Post.deletePost(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
