// controllers/authController.js
const { generateToken } = require('../helpers/auth');
const User = require('../models/userModel');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifique as credenciais do usuário
    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Gere o token JWT
    const token = generateToken({ id: user.id });

    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
