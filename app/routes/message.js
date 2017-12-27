module.exports = function (app, db,jsonParser) {
var dateformat = require('dateformat')
  app.post('/message', jsonParser, (req, res) => {
    var json = { "body": req.body, "date": dateformat(Date(),'d/m/yyyy hh:MM:ss TT'), "path":req.path };
    database = db.db('test_end_point');
    database.collection('results').insertOne(json, (err,res)=>{
      if (err) throw err;
      console.log(`Number of documents inserted: ${res.insertedCount}`);
    });
    
    res.send(json, 201, Date());
  });

}