const app = require('./config/express')();

app.listen(app.get('port'), app.get('host'), () => {
  console.log('Server running on ' + app.get('host') + ':' + app.get('port'));
});
