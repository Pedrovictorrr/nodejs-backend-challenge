const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {

    const user = await User.findByCredentials(email, password);
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }


    const token = jwt.sign({ id: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

 
    await user.generateAuthToken();

    console.log(token); 
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
