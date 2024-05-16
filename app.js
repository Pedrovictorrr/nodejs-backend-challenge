// app.js
const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const postRoutes = require('./src/routes/postRoutes');
const authRoutes = require('./src/routes/authRoutes'); 
const swaggerOptions = require('./swagger/swaggerOptions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/posts', postRoutes);
app.use('/auth', authRoutes); 

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
