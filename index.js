const express = require('express');
const server = express();

server.get('/', (req, res) => {
    //req = request, res = response
    return res.json({ message: 'Hello World!' });
});

server.get('/', (req, res) => {
    //req = request, res = response
    return res.json({ usuario: 'Marcos' });
});

server.listen(3000, () => {
    console.log('Server is running...');
});
