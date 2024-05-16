
# Teste para Desenvolvedor Node.js

Este é um projeto de teste para desenvolvedor Node.js, que inclui uma API com Swagger, rotas CRUD para `/posts` e uma rota de autenticação `/auth`.

## Requisitos

- Node.js (v14 ou superior)
- npm ou Yarn
- PostgreSQL

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

2. Acesse o diretório do projeto:

```bash
cd seu-projeto
```

3. Instale as dependências:

```bash
npm install
# ou
yarn
```

## Configuração do Banco de Dados

1. Certifique-se de que o PostgreSQL está instalado e em execução em sua máquina.
2. Abra o arquivo `config.js` localizado na raiz do projeto.
3. Configure as informações do banco de dados de acordo com a sua instalação do PostgreSQL:

```javascript
const { Client } = require('pg');

// Configurações do banco de dados
const dbConfig = {
  user: 'seu-usuario', // Nome de usuário do PostgreSQL
  host: 'localhost',    // Host do PostgreSQL
  database: 'nome-do-banco-de-dados', // Nome do banco de dados
  password: 'sua-senha', // Senha do PostgreSQL
  port: 5432,           // Porta do PostgreSQL (por padrão é 5432)
};

const client = new Client(dbConfig);
client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
};
```

## Executando a aplicação

1. Execute o seguinte comando para criar o banco de dados:

```bash
node create_database.js
```

2. Em seguida, execute o seguinte comando para iniciar o servidor:

```bash
node app.js
```

3. Acesse a documentação da API em [http://localhost:3000/api-docs](http://localhost:3000/api-docs) para visualizar e testar as rotas.

## Rotas

### Posts

- `GET /posts`: Retorna todos os posts.
- `GET /posts/:id`: Retorna um post específico pelo ID.
- `POST /posts`: Cria um novo post.
- `PUT /posts/:id`: Atualiza um post existente.
- `DELETE /posts/:id`: Deleta um post existente.

### Autenticação

- `POST /auth/login`: Rota para autenticação de usuário. Retorna um token JWT válido.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto! Abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
