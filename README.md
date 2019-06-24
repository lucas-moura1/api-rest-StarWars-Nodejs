# ApiRest-Node-MongoDB

A pasta 'api' contém uma API REST em Node que contenha os dados dos planetas que são obtidos através do banco de dados MongoDb da aplicação, sendo inserido manualmente: Nome, Clima, Terreno.
Funcionalidades da Aplicação: 
 - Adicionar um planeta (com nome, clima e terreno);
 - Listar planetas;
 - Buscar por nome;
 - Buscar por ID;
 - Remover planeta.

##  Iniciando a 'api'

Tenha o MongoDb instalado na sua máquina e para iniciá-lo apontando para a pasta da api execute o seguinte comando no terminal:

```bash
mongod --dbpath "~/ApiRest-Node-MongoDB/data/"
```

Acesse pelo terminar a pasta 'api' e siga os comandos abaixo:

```bash
npm install
```
```bash
npm start
```
Para acessar as desfrutar das funcionalidades, siga as instruções abaixo:

#### Adicionar um planeta (com nome, clima e terreno)

POST: localhost:3000/api/
 - header: Content-Type application/json
 - body: {"nome" : "xxx", "clima" : "yyyyy", "terreno" : "zzzzzz"}

### Listar planetas

GET: localhost:3000/api

##### Buscar por nome;

GET: localhost:3000/api/:nome

#### Buscar por ID;

GET: localhost:3000/api/:_id

#### Remover planeta

DELETE: localhost:3000/api/:nome

