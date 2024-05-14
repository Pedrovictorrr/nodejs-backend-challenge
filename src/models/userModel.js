// models/userModel.js
const bcrypt = require('bcryptjs');

// Simulando um banco de dados temporário
const users = [];

class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  static async create({ email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    users.push(user);
    return user;
  }

  static async findByCredentials(email, password) {
    const user = users.find(user => user.email === email);
    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return null;
    }

    return user;
  }
}

module.exports = User;
