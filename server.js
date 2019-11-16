import http from 'http';
import localConfig from './src/config/config';
import requestHandler from './src/routes';

const { port, host } = localConfig.local;


const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`running at ${host}:${port}`);
});


export default server;
