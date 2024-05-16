// swagger/swaggerOptions.js

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentação da API Node.js',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local Server',
      },
    ],
  },
  apis: ['./swagger/*.js'], // Caminho para os arquivos de rota da sua aplicação
};

module.exports = swaggerOptions;
