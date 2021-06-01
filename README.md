# Api-Rest-Node-MongoDB

Este repositório contém uma API REST em Node.js que manipula os dados dos planetas que são obtidos através do banco de dados MongoDB.

Tecnologias utilizadas:
- Express;
- Mongoose;
- Eslint e prettier utilizando o style guide ***standard***
- Jest para os testes.

## **Modelo da entidade**

### Planet

```
name: <string>
weather: <string>
ground: <string>
```

## **Funcionalidades da entidade**

 - Inserção;
 - Listagem;
 - Busca por ID;
 - Busca por nome;
 - Atualização;
 - Remoção.

## **Rotas**
### Inserção

```
endpoint: /planet

method: POST

header: {
    "Content-Type": "application/json"
}

body: { 
    "name" : <string>,
    "weather" : <string>,
    "ground" : <string>
}
 ```

#### Listagem
```
endpoint: /planet

method: GET

header: {
    "Content-Type": "application/json"
}
```
#### Busca por nome
```
endpoint: /planet/:name

params: {
    name: <nome_planeta>
}

method: GET

header: {
    "Content-Type": "application/json"
}

```
#### Busca por ID
```
endpoint: /planet/:id

params: {
    id: <id_planeta>
}

method: GET

header: {
    "Content-Type": "application/json"
}
```

### Atualização

```
url: /planet/:id

params: {
    id: <id_planeta>
}

method: PUT

header: {
    "Content-Type": "application/json"
}

body: { 
    "name" : <string>,
    "weather" : <string>,
    "ground" : <string>
}
```
#### Remoção
```
endpoint: /planet/:id

params: {
    id: <id_planeta>
}

method: DELETE

header: {
    "Content-Type": "application/json"
}
```
## **Requisitos para execução do projeto**

Deve ter:
- ***Docker*** e ***docker-compose*** instalado na máquina.

### Para executar

- ```git clone <url_repositorio>``` : clonar o repositório;
- ```sudo docker-compose up```: rodar a aplicação

Para acessar a API diretamente é preciso acessar ```http://localhost:3000``` + o endPoint.

### Para executar os testes

- ```yarn test``` para executar os testes.
