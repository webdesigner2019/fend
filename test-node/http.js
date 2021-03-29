const http = require('http');

const server = http.createServer((req,res) =>{
    res.write('Hello there user');
    res.end();
});

server.listen(3000, () => console.log('Server is up and running'));