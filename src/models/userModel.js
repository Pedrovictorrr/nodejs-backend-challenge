const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../config');

class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
    this.token = null;
  }

  async generateAuthToken() {
    const token = jwt.sign({ id: this.email }, 'seuSegredo');
    this.token = token;
    await this.saveToken();
    return token;
  }

  async saveToken() {
    try {
      await db.query('UPDATE node_teste.usuarios SET token = $1 WHERE email = $2', [this.token, this.email]);
    } catch (error) {
      console.error('Erro ao salvar token:', error);
    }
  }

  static async create({ email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    // Salvar usuário no banco de dados
    return user;
  }

  static async findByCredentials(email, password) {
    const { rows } = await db.query('SELECT * FROM node_teste.usuarios WHERE email = $1', [email]);
    const user = rows[0];

    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.senha);

    if (!isMatch) {
      return null;
    }

    return new User({ email: user.email, password: user.senha });
  }
}

module.exports = User;
