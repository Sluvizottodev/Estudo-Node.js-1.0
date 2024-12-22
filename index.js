const express = require('express');
const server = express();
const filme = require('./src/data/filmes.json');

server.get('/filme', (req, res) => {
    return res.json(filme);  // Resposta com os dados de filmes
});

// Iniciar o servidor
server.listen(3000, () => {
    console.log('Server is running...');
});


/*.get('/', (req, res) => {
    //req = request, res = response
    return res.json({ message: 'Hello World!' });
});*/

/*server.get('/', (req, res) => {
    //req = request, res = response
    return res.json({ usuario: 'Marcos' });
});*/
