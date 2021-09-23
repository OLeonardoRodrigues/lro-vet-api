const express = require('express');
const cors = require('cors');
const router = require('../routes');
const config = require('./config.json');

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.set('host', config.host);
  app.set('port', config.port);

  router(app);

  return(app);
}
