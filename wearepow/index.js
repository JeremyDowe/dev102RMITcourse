var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 5000;
var app = express();
var fs = require('fs');
var pages = require('./public/json/pages.json');
var content = require('./public/json/content.json');

// how to add new pages
// var obj = require('./public/json/pages.json');
// var content = obj;


  app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.static(path.join(__dirname, 'node_modules')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  app.get('/', (req, res) => res.render('pages/index',
  { "pages" : pages, "content" : content,  "defaultView": 'branding'}))


  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
