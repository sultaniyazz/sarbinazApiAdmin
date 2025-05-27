const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json'); // JSON faylingiz nomi
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(PORT)
