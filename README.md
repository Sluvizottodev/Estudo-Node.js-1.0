# Servidor Node.js com Express - Projeto de Estudo

Este é um projeto de estudo para criar um servidor HTTP simples utilizando **Node.js** e o framework **Express**. Abaixo, seguem as instruções completas para configurar o ambiente e começar a programar.

---

## **CONFIGURANDO O AMBIENTE**

### 1. Inicialize o projeto
Para começar, inicialize o projeto e crie o arquivo `package.json` com o comando abaixo:
```bash
npm init
```

-Utilizando o yarn ao invés do npm ('npm install --global yarn');

-'yarn add express' Para adicionar o framework Express, criando pasta node_modules com várias dependências;

-Adicionar o nodemon depois:
```bash
yarn global add noedemon
```
e adicionando no package.json
```bash
"start": "nodemon ./index.js",
```
Logo toda vez que for digitado no terminal 'yarn start' será reiniciado o servidor;

---

**MÃOS A OBRA**
- Instanciar express com: 
const express = require('express');

-Criar constante server para receber o express e depois definir a porta na qual escutará:
```bash
const server = express();
```
```bash
server.get('/', (req, res) => {
    //req = request, res = response
    return res.json({ message: 'Hello World!' });
});
```
-Objetivo: Define uma rota para responder a solicitações HTTP do tipo GET no endpoint / (raiz).
-Parâmetros:
req (request): Contém os dados da solicitação do cliente, como parâmetros, cabeçalhos e corpo (para outros métodos como POST).
res (response): Utilizado para enviar uma resposta de volta ao cliente.
-Função:
Quando um cliente faz uma solicitação GET para /, o servidor responde com um objeto JSON contendo a mensagem { message: 'Hello World!' }.
```bash
server.listen(3000, () => {
    console.log('Server is running...');
});
```

Objetivo: Inicia o servidor e o configura para escutar conexões na porta 3000.
Callback: Exibe no console a mensagem Server is running... quando o servidor começa a funcionar.


-Testando: no terminal 'node index.js'
//O retorno virá em http://localhost:3000, no caso