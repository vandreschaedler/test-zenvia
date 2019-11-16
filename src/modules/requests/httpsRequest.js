/** 
 *  GET HTTPS para o recursos da Api da TotalVoice (api.totalvoice.com.br)
 *  @params 
 *    path: recurso esta sendo requisitado
 *
*/


import https from 'https';
import config from '../../config/config';

export default async function getHttpsRequest(path) {
  const getConfig = { ...config.httpsServer };
  getConfig.method = 'GET';
  getConfig.path = path;
  return new Promise((resolve, reject) => {
    https.get(getConfig, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data = chunk;
      });
      resp.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err.message);
    });
  });
}
