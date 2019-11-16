const apiKey = 'c39a3bda8e74cf9399e0e2e304cb064c';

export default {
  local: {
    port: 9000,
    host: 'localhost',
  },

  httpsServer: {
    host: 'api.totalvoice.com.br',
    port: '443',
    headers: {
      'Access-Token': apiKey,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  },
};
