
# API Node.js com PostgreSQL

Esta é uma API Node.js que utiliza PostgreSQL como banco de dados.

## Pré-requisitos

- Node.js v14 ou superior instalado na sua máquina
- Banco de dados PostgreSQL instalado localmente
- Arquivo `.env` configurado (veja abaixo)
- Pacotes Node.js instalados (veja abaixo)

## Instalação

1. Clone o repositório:

```
git clone https://github.com/seu_usuario/seu_repositorio.git
```

2. Acesse o diretório do projeto:

```
cd seu_repositorio
```

3. Instale as dependências:

```
npm install
```

## Configuração do arquivo .env

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
SECRET_KEY=chave_secreta_para_jwt
```

Substitua `seu_usuario`, `sua_senha`  pelas informações do seu banco de dados PostgreSQL. 

## Configuração do banco de dados

Execute o seguinte comando para criar o banco de dados e popular com dados de exemplo:

```
node create_database.js
```

## Executando os testes

Para executar os testes, utilize o seguinte comando:

```
npm test
```

## Iniciando a API

Para iniciar a API, utilize o seguinte comando:

```
npm start
```

## Documentação da API

A documentação da API está disponível na rota `/api-docs`. Você pode acessá-la através do seu navegador:

```
http://localhost:3000/api-docs
```

## Autenticação

Para acessar as rotas protegidas, como `/posts`, você precisa autenticar antes. Utilize a rota `/auth/login` para fazer login e obter um token de autenticação. Envie o token obtido nas requisições para as rotas protegidas.
