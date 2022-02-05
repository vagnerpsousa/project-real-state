### Project Real State

Nesse projeto, foi desenvolvido um back-end usando ORM com o pacote sequelize do npm, capaz de:

- Criar e associar tabelas usando models do sequelize
- Construir endpoints para consumir os models que criar
- Fazer um CRUD com o ORM
- Validar os dados com a ferramenta Joi
- Fazer requisições de API utilizando o Axios
- Interação com o banco de dados MySQL



### Rodando o projeto

```bash
git clone git@github.com:vagnerpsousa/project-real-state.git
```

```bash
cd project-real-state
```

```bash
npm install
```

- Crie um arquivo .env com as seguintes variaveis de ambiente:

`USER`
`PASSWORD`
`HOSTNAME`
`DATABASE`


```bash
npm start
```

### Execução de testes 

```bash
npm test
```

### endpoints:

-  POST `/customer`
-  GET `/customer`
-  GET `/customer/id`
-  PUT `/customer/id`
-  DELETE `/customer/id`
-  POST `/immobile`
-  GET `/immobile`
-  GET `/immobile/id`
-  PUT `/immobile/id`
-  DELETE `/immobile/id`
