// swaggerOptions.js
module.exports = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API de Posts',
        version: '1.0.0',
        description: 'Documentação da API de gerenciamento de posts',
      },
      servers: [
        {
          url: 'http://localhost:3000/api',
          description: 'Servidor de desenvolvimento',
        },
      ],
    },
    apis: ['./routes/api/posts.js'],
  };
  