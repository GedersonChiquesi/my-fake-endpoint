const app = require('./config/server');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var message = require('./app/routes/message');
//var home = require('./app/routes/home');
var consoleR = require('./app/routes/console');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URL? process.env.MONGO_URL : 'mongodb://localhost:27017/test_end_point';
let db;
MongoClient.connect(url, (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(3000,'0.0.0.0', () => {
    console.log('listening');
  });
  message(app, db,jsonParser);
  consoleR(app,db);
});