const app = require('./config/server');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var message = require('./app/routes/message');
//var home = require('./app/routes/home');
var consoleR = require('./app/routes/console');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URL? process.env.MONGO_URL : 'mongodb://mfkep:mfkep1234@ds133557.mlab.com:33557/heroku_b10ghscl';
let db;
MongoClient.connect(url, (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(process.env.PORT || 80, () => {
    console.log('listening');
  });
  message(app, db,jsonParser);
  consoleR(app,db);
});