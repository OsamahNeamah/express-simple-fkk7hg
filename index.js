const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const { mailController } = require('./controller/mailController');
// set the view engine to ejs
app.set('view engine', 'ejs');
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// index page
app.post('/mail', mailController);

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/portfolio', function(req, res) {
  res.render('pages/portfolio');
});

app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

app.use(express.static('static'));
app.use(express.static(path.join(__dirname, 'static/css/')));
app.use(express.static(path.join(__dirname, 'static/js/')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
