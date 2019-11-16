/**/

import getApiStatusRequest from './modules/api-status/api-status-ctrl';


export default (req, res) => {


  /**
   * @api {get} /status 
   *
   * 
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *      "status": 200,
   *      "sucesso": true,
   *      "motivo": 0,
   *      "mensagem": "status da API",
   *      "dados": {
   *         "id": 4921
   *       }
   *    }
   * 
   * * @apiErrorExample {json} Sucesso
   *    HTTP/1.1 405 OK
   *    {
   *      "status": 405,
   *      "sucesso": false,
   *      "motivo": 30,
   *      "mensagem": "mensagem de erro",
   *    }
   *
 */
  if (req.url === '/status' && req.method === 'GET') {
    return getApiStatusRequest(res, req.url);
  }


  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  return res.end(`{
    "status": 404,
    "sucesso": false,
    "mensagem": "Endpoint não encontrado"
  }`);
};
