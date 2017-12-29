module.exports = function (app, db) {
  const itemsPerPage =20;
  app.get('/consoleP', (req, res) => {
      database = db.db('heroku_b10ghscl');
      database.collection('results').find({},{skip: (itemsPerPage * (req.query.page - 1)), limit: itemsPerPage, body:1}).sort({date: -1})
        .toArray((err, result) => {
          if (err) return console.log(err);
          res.send(result);
        });
    });
}