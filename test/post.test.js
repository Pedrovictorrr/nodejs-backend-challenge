// __tests__/post.test.js
const request = require('supertest');
const app = require('../app');

describe('Testando CRUD da API', () => {
  let postId;

  it('Deve criar um novo post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({
        id: '1',
        title: 'Título do Post',
        body: 'Corpo do Post',
        tags: ['tag1', 'tag2']
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    postId = res.body.id;
  });

  it('Deve buscar todos os posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('Deve buscar um post pelo ID', async () => {
    const res = await request(app).get(`/posts/${postId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual(postId);
  });

  it('Deve atualizar um post pelo ID', async () => {
    const res = await request(app)
      .patch(`/posts/${postId}`)
      .send({
        title: 'Título Atualizado'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Título Atualizado');
  });

  it('Deve deletar um post pelo ID', async () => {
    const res = await request(app).delete(`/posts/${postId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Post deleted');
  });

  it('Deve retornar status 404 se o post não for encontrado', async () => {
    const res = await request(app)
      .patch(`/posts/123`)
      .send({
        title: 'Título Atualizado'
      });
    expect(res.statusCode).toEqual(404);
  });
});
