// controllers/authController.js
const { generateToken } = require('../helpers/auth');

// Função de login
exports.login = (req, res) => {
  // Lógica para autenticar o usuário
  // Se o usuário for autenticado com sucesso
  const token = generateToken({ id: userId });
  res.json({ token });
};
