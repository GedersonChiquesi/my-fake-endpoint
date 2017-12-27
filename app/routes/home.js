app.get('/', (req, res) => {
  res.render('home/index', { products: result, title: 'Home' });
});
