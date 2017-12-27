const express = require('express');

const app = express();
app.use(express.static('./app/public'));
app.set('view engine', 'ejs');
app.set('views', './app/views');
module.exports = app;