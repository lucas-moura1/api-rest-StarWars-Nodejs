# Api-Rest-Node-MongoDB

Este repositório contém uma API REST em Node.js que contenha os dados dos planetas que são obtidos através do banco de dados MongoDB da aplicação, sendo inserido manualmente: Nome, Clima, Terreno.

Tecnologias utilizadas:
- Express;
- Mongoose;
- JsonWebToken;
- nodejs-base64;
- Eslint e prettier utilizando o style guide ***standard***
- Mocha e Chai para os testes.

Funcionalidades da Aplicação: 
 - Adicionar um planeta (name, weather e ground);
 - Listar planetas;
 - Buscar por nome;
 - Buscar por ID;
 - Remover planeta.

##  Executando a aplicação

É necessário ter o ***docker*** e o ***docker-compose*** instalado na máquina local e executar o seguinte comando no terminal dentro da pasta do repositório:

```
sudo docker-compose up --build
```

## Executando os testes

- Alterar a variável de ambiente chamado ***NODE_ENV*** dentro do arquivo ```docker-compose.yml``` de ***development*** para ***test***;
- ```sudo docker-compose up``` para rodar a aplicação;
- ```docker ps``` para obter ***id*** do container da aplicação principal;
- ```docker exec -it <container_id> bash``` para executar bash e "entrar" no container da aplicação principal;
- ```npm test``` para executar os testes. 

Para acessar as funcionalidades, é necessário passar no header da requisição o campo ```authorization: Bearer Token```, e siga as instruções abaixo:

#### Gerar o token de acesso
POST: localhost:3000/auth
 body: {user: ```usuario:senha```(base64)}

#### Adicionar um planeta (com nome, clima e terreno)

POST: localhost:3000/planet/create
 - header: { "authorization": "Bearer Token" }
 - body: { "name" : "xxx", "weather" : "yyyyy", "ground" : "zzzzzz" }

#### Listar planetas

GET: localhost:3000/planets

#### Buscar por nome;

GET: localhost:3000/planet/name/:name

#### Buscar por ID;

GET: localhost:3000/planets/id/:id

#### Remover planeta

DELETE: localhost:3000/planets/name/:name

