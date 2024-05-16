// controllers/postController.js
const Post = require('../models/postModel');

// Retorna todos os posts com paginação
exports.getAllPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const posts = await Post.getAllPosts(page, limit);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cria um novo post
exports.createPost = async (req, res) => {
  const { title, body, tags } = req.body;

  try {
    const newPost = await Post.createPost(title, body, tags);
    res.status(201).json(newPost);
  } catch (err) {
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
    res.status(500).json({ message: err.message });
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
    res.status(400).json({ message: err.message });
  }
};

// Deleta um post pelo ID
exports.deletePost = async (req, res) => {
  try {
    await Post.deletePost(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
