const jsonServer = require('json-server');
const customerOne = require('./customerOne.js');
const routes = require('./routes.json');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.rewriter(routes));

server.use((req, res, next) => {
  let router;
    router = jsonServer.router(customerOne);
  return router(req, res, next);
});

server.listen(8000, () => {
  // eslint-disable-next-line
  console.log('JSON Server is running at port 8000');
});
