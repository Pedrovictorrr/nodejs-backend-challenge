// controllers/authController.js
const User = require('../models/userModel');

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

    // Gere o token JWT e salve no banco de dados
    const token = await user.generateAuthToken();
console.log(token);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
