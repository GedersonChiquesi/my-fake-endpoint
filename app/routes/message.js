module.exports = function (app, db,jsonParser) {
const dateformat = require('dateformat')
  app.post('/message', jsonParser, (req, res) => {
    let json = { "body": req.body, "headers": req.headers, "date": dateformat(Date(),'d/m/yyyy UTC:hh:MM:ss TT'), "path":req.path };
    database = db.db('heroku_b10ghscl');
    database.collection('results').insertOne(json, (err,res)=>{
      if (err) throw err;
      console.log(`Number of documents inserted: ${res.insertedCount}`);
    });
    
    res.send(json.body, 201, Date());
  });

}