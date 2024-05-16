// controllers/authController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    // Verifique as credenciais do usuário
    const user = await User.findByCredentials(email, password);
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Gere o token JWT
    const token = jwt.sign({ id: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' }); // Use a mesma chave secreta usada para verificar o token

    // Salve o token no banco de dados
    await user.generateAuthToken();

    console.log(token); // Verifique se o token está sendo gerado corretamente
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
