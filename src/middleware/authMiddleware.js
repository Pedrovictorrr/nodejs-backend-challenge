const jwt = require('jsonwebtoken');
require('dotenv').config();

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  const tokenWithoutBearer = token.split(' ')[1];

  try {
    const decoded = jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY); 
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Erro ao verificar o token:", error);
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = authMiddleware;
