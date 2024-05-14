/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Lista todos os posts
 *     description: Retorna uma lista de todos os posts
 *     responses:
 *       200:
 *         description: Lista de posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Obtém um post pelo ID
 *     description: Retorna um post com base no ID fornecido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do post a ser obtido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post não encontrado
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Cria um novo post
 *     description: Cria um novo post com base nos dados fornecidos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Erro ao criar o post
 */

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Atualiza um post pelo ID
 *     description: Atualiza um post com base no ID fornecido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do post a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Erro ao atualizar o post
 *       404:
 *         description: Post não encontrado
 */

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Deleta um post pelo ID
 *     description: Deleta um post com base no ID fornecido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do post a ser deletado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post deletado com sucesso
 *       404:
 *         description: Post não encontrado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - body
 *         - tags
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: ID único do post
 *         title:
 *           type: string
 *           description: Título do post
 *         body:
 *           type: string
 *           description: Corpo do post
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de tags do post
 */

