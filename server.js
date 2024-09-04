import express from 'express';
import injectRoutes from './routes';
import injectMiddlewares from './libs/middlewares';

const server = express();
const port = process.env.PORT || 5000;

injectMiddlewares(server);
injectRoutes(server);

server.listen(port, () => console.log('Server running on port 5000'))

export default server;
