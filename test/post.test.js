// post.test.js
const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
require('dotenv').config();

describe('Testando rotas da aplicação', () => {

  const token = jwt.sign({ userId: 'user123' }, process.env.SECRET_KEY);

  
  it('Deve retornar status 200 ao fazer login com credenciais válidas', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'teste@teste.com', password: '123456' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('Deve retornar status 200 ao acessar a rota /api-docs', async () => {
    const response = await request(app).get('/api-docs/');
    expect(response.statusCode).toBe(200);
  });

  it('Deve retornar status 401 ao acessar a rota /posts sem token de autenticação', async () => {
    const response = await request(app).get('/posts');
    expect(response.statusCode).toBe(401);
  });

  it('Deve retornar status 401 ao acessar a rota /posts com token de autenticação inválido', async () => {
    const response = await request(app)
      .get('/posts')
      .set('Authorization', 'Bearer token_invalido');
    expect(response.statusCode).toBe(401);
  });

  it('Deve retornar status 401 ao acessar a rota /posts com token de autenticação inválido', async () => {
    const response = await request(app)
      .get('/posts')
      .set('Authorization', `Bearer ${token}`); 
    expect(response.statusCode).toBe(200);
  });
});
