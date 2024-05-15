// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

// Retorna todos os posts
router.get('/', postController.getAllPosts);

// Cria um novo post
router.post('/', postController.createPost);

// Retorna um post pelo ID
router.get('/:id', postController.getPostById);

// Atualiza um post pelo ID
router.patch('/:id', postController.updatePost);

// Deleta um post pelo ID
router.delete('/:id', postController.deletePost);

module.exports = router;
