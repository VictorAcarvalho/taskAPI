# Desafio técnico Mobicare + Arkoss -  Estágio Backend NodeJS

- O desafio consiste em criar uma api de tarefas, onde cada tarefa devera possuir nome, conteúdo, autor e data de criação.

### Comandos para executar a aplicação

- Primeiramente abra seu terminal e digite `npm i` para fazer o download de todas as depêndencias do projeto

- Depois atribua valores nas variáveis de ambiente, no arquivo `.env`, referente as configurações do arquivo `data-source.ts`.

- Certifique-se de ter instalado o `docker` e o `docker-compose` em seu computador. Após a instalação, digite em seu terminal `docker-compose up -d`, para subir o banco de dados em segundo plano.

- Após todos os processos acima, digite em seu terminal `npm start` para iniciar a aplicação. 



## Utilizando a APi
 
- URL para teste :  `http://localhost:"porta"`

# Rotas de usuário

## Criação de usuário

- Método: `POST`

- Rota:`/user`

- Request Body : 
    ```
        {
            "name":"string"
        }
    ```
    
- Exemplo:
      
        {
            "name":"Usuário"
        }

- Respostas:

    - Status: `201 - Created` 
    ```
    {
        "id":"uuid"
        "name":"Nome do usuário"
        "Tasks":[]
    }
    ```
    - Status: `406 - Not Acceptable `
    ```
    {
        "message":"There are parameters that were not declared correctly"
    }
    ```
    - Status:`400 - Bad Request`
    ```
    {
        "message":"User already exist"
    }
    ```
     - Status: `500 - Internal server erro`
```
    {
        message: Internal server error
    }

```

## Listagem de todos os usuários

- Método: `GET`

- Rota:`/user`

- Repostas:

    - Status :`200 - OK`
```
    {
        lista de todos os usuários e suas tarefas
    }

```

  - Status: `500 - Internal server erro`
```
    {
        message: Internal server error
    }

```
## Listagem de  um único usuário

- Método: `GET`

- Rota:`/user/:user`

- Request Params : `id do usuário`

- Repostas:

    - Status : `200 - Ok`
    ```
        {   
            "id":"uuiid"
            "name":"Nome do usuário"
            "Tasks":[
                lista de tarefas do usuário
            ] 
        }
    ```
    - Status : `406 - Not Acceptable `
    ```
    {
        "message":"There are parameters that were not declared correctly"
    }
    ```
     - Status : `500 - Internal server erro`
    ```
    {
        message: Internal server error
    }

    ```
## Atualização de um usuário
- Método : `PUT`

- Rota:`/user/:user`

- Request Params : `id do usuário`

- Resquest Body : 
    ```
    {
        "name": "Novo nome do usuário"
    }
    ```
- Repostas 

    - Status : `200 - Ok`
    ```
        {   
            "id":"uuiid"
            "name":"Nome do usuário"
            "Tasks":[
                lista de tarefas do usuário
            ] 
        }
    ```
    - Status : `406 - Not Acceptable `
    ```
    {
        "message":"There are parameters that were not declared correctly"
    }
    ```
     - Status : `500 - Internal server erro`
    ```
    {
        message: Internal server error
    }

    ```

## Deletar um usuário

- Método :`DELETE` 

- Rota:`/user/:user`

- Request Params : `id do usuário`

- Respostas 
      - Status : `200 - Ok`
    ```
        {   
           "message":"User deleted"
        }
    ```
    - Status : `406 - Not Acceptable `
    ```
    {
        "message":"There are parameters that were not declared correctly"
    }
    ```
     - Status : `500 - Internal server erro`
    ```
    {
        message: Internal server error
    }

    ```


# Rotas de tarefas

## Criação de tarefas
- Método: `POST`

- Rota:`/task/:user`

- Request parameter : `id do usuário`

- Request body:
    ```
    {
        "title":string,
        "content":"string"
    }
    ```
- Respostas

    - Status `201 - Created`
    ```
    {
        "id":"uuid",
        "title":"nome da tarefa"
        "content":"conteúdo da tarefa"
        "crated_at": "data de criação"
        "user":{
            "id":"uuid"
            "name":"nome do usuário"
        }
    }
    ```
     - Status : `406 - Not Acceptable `
    ```
    {
        "message":"There are parameters that were not declared correctly"
    }
    ```
     - Status : `500 - Internal server erro`
    ```
    {
        message: Internal server error
    }

    ```
## Listagem de tarefas

- Método : `GET`
- Rota: `/task`
- Respostas 
    - Status : `200 - OK`
    ```
        {
            lista com todas as tarefas
        }

    ```
    
     - Status : `500 - Internal server erro`
    ```
    {
        message: Internal server error
    }

    ```

## Listar apenas uma tarefa 
- Método : `GET`
- Rota: `/task/:task`
- Request parameter : `id da tarefa`
- Respostas 
    
    - Status : `200 - Ok  `
    ```
    {
        "id": "id da tasl",
        "title": "nome da task",
        "content": "conteudo da task",
        "created_at": "data de criação",
        "user": {
        "id": "id do usuário",
        "name": "nome do usuário"
        }
    }
    ```
     - Status : `406 - Not Acceptable `
    ```
    {
        "message":"There are parameters that were not declared correctly"
    }
    ```
     - Status : `500 - Internal server erro`
    ```
    {
        message: Internal server error
    }

    ```
## Atualização de tarefa

- Método : `Put`
- Rota : `/task/:task`
- Request parameter : `id da tarefa`
- Reques body : 
    ```
        {
            "title":"string"
            "name":"string"
        }    
    ```
- Respostas 
    -Status `200 - OK`
     ```
     {
        "id": "id da tarefa",
        "title": "Novo nome da tarefa",
        "content": "nova descrição",
        "created_at": "2022-03-27T17:48:16.836Z"
    }
     ```
     - Status : `406 - Not Acceptable `
    ```
    {
        "message":"There are parameters that were not declared correctly"
    }
    ```
     - Status : `500 - Internal server erro`
    ```
    {
        message: Internal server error
    }

    ```
## Deletar uma tarefa

- Método : `Delete`
- Rota : `/task/:task`
- Request parameter : `id da tarefa`
- Repostas
    
    -Status : `200 - Ok`
    ```
      {
          "msg": "Task deleted"
      }     
    ```
     - Status : `406 - Not Acceptable `
    ```
    {
        "message":"There are parameters that were not declared correctly"
    }
    ```
     - Status : `500 - Internal server erro`
    ```
    {
        message: Internal server error
    }

    ```


## Pontos a serem feitos

- [ ] implementar teste unitários e de intregração
- [ ] implementar o swagger 