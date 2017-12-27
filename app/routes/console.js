module.exports = function (app, db) {
  app.get('/console', (req, res) => {
      database = db.db('heroku_b10ghscl');
      database.collection('results').find({},{body:1})
        .toArray((err, result) => {
          if (err) return console.log(err);
          res.render('console', { quotes: result, title: 'Lista de request' });
        });
    });
}