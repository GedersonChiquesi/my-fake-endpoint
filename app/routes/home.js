module.exports = function(app,db){
app.get('/', (req, res) => {
  res.render('home', {title: 'MY-FAKE-ENDPOINT' });
});
}
