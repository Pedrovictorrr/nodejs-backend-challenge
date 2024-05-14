// app.js
const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const postRoutes = require('./src/routes/postRoutes');
const swaggerDocs = require('./swagger/swaggerDocs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/posts', postRoutes);

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js Backend Challenge API',
      version: '1.0.0',
      description: 'Uma API simples para gerenciar posts',
    },
  },
  apis: ['./src/routes/postRoutes.js', './swagger/swaggerDocs.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
