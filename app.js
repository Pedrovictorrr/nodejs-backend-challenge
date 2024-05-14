// index.js
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./src/routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/posts', postRoutes);

module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
