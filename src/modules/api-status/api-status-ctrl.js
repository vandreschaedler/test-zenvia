/** 
 *  GET da api local para o recurso /status da Api da TotalVoice (api.totalvoice.com.br)
 *  @apiParams 
 *    res: response da requisição
 *    path: recurso esta sendo requisitado
 *
*/


import getHttpsRequest from '../requests/httpsRequest';

export default async function getApiStatus(res, path) {
  try {
    res.setHeader('Content-Type', 'application/json');
    const postData = await getHttpsRequest(path);
    res.statusCode = 200;
    const convertedResponse = postData.toString();
    res.end(convertedResponse);
  } catch (error) {
    res.statusCode = 500;
    res.end(error.message);
  }
}
