const controllerPatient = require('./controllers/cPatient');

module.exports = (app) => {
  app.get('/patient', controllerPatient.getPatient)

  app.get('/', function (req, res) {
    res.status(401).json({'Route': 'get'});
    console.log('get done');
  })
}
