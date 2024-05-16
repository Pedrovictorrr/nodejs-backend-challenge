const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', postController.getAllPosts);

router.post('/', postController.createPost);

router.get('/:id', postController.getPostById);

router.patch('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;
