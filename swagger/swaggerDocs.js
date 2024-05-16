/**
 * @swagger
 * swagger: '2.0'
 * info:
 *   title: API de Posts
 *   description: API para criar, atualizar, listar e excluir posts
 *   version: 1.0.0
 *
 * basePath: /v1
 * schemes:
 *   - http
 *   - https
 *
 * paths:
 *   auth/login:
 *     post:
 *       summary: Gera um token JWT para autenticação
 *       description: Gera um token JWT para autenticação com base nas credenciais fornecidas
 *       consumes:
 *         - application/json
 *       produces:
 *         - application/json
 *       parameters:
 *         - in: body
 *           name: body
 *           description: Credenciais de usuário
 *           required: true
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *       responses:
 *         200:
 *           description: Token JWT gerado com sucesso
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *         401:
 *           description: Credenciais inválidas
 *
 *   /posts:
 *     get:
 *       summary: Lista todos os posts
 *       description: Retorna uma lista de todos os posts
 *       produces:
 *         - application/json
 *       responses:
 *         200:
 *           description: Lista de posts
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/definitions/Post'
 *
 *     post:
 *       summary: Cria um novo post
 *       description: Cria um novo post com base nos dados fornecidos
 *       consumes:
 *         - application/json
 *       produces:
 *         - application/json
 *       parameters:
 *         - in: body
 *           name: body
 *           description: Dados do post a ser criado
 *           required: true
 *           schema:
 *             $ref: '#/definitions/Post'
 *       responses:
 *         201:
 *           description: Post criado com sucesso
 *           schema:
 *             $ref: '#/definitions/Post'
 *         400:
 *           description: Erro ao criar o post
 *
 *   /posts/{id}:
 *     get:
 *       summary: Obtém um post pelo ID
 *       description: Retorna um post com base no ID fornecido
 *       produces:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           description: ID do post a ser obtido
 *           required: true
 *           type: string
 *       responses:
 *         200:
 *           description: Post encontrado
 *           schema:
 *             $ref: '#/definitions/Post'
 *         404:
 *           description: Post não encontrado
 *
 *     put:
 *       summary: Atualiza um post pelo ID
 *       description: Atualiza um post com base no ID fornecido
 *       consumes:
 *         - application/json
 *       produces:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           description: ID do post a ser atualizado
 *           required: true
 *           type: string
 *         - in: body
 *           name: body
 *           description: Dados do post a serem atualizados
 *           required: true
 *           schema:
 *             $ref: '#/definitions/Post'
 *       responses:
 *         200:
 *           description: Post atualizado com sucesso
 *           schema:
 *             $ref: '#/definitions/Post'
 *         400:
 *           description: Erro ao atualizar o post
 *         404:
 *           description: Post não encontrado
 *
 *     delete:
 *       summary: Deleta um post pelo ID
 *       description: Deleta um post com base no ID fornecido
 *       produces:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           description: ID do post a ser deletado
 *           required: true
 *           type: string
 *       responses:
 *         200:
 *           description: Post deletado com sucesso
 *         404:
 *           description: Post não encontrado
 *
 * definitions:
 *   Post:
 *     type: object
 *     required:
 *       - title
 *       - body
 *       - tags
 *     properties:
 *       id:
 *         type: string
 *         format: uuid
 *         description: ID único do post
 *       title:
 *         type: string
 *         description: Título do post
 *       body:
 *         type: string
 *         description: Corpo do post
 *       tags:
 *         type: array
 *         items:
 *           type: string
 *         description: Lista de tags do post
 */
