const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');

const app = express();
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './public/views');
app.set('view engine', 'mustache');

app.get('/users', function (req, res){
  res.render('main', data);
});








app.listen(3000, function(){
    console.log('You are working good sir !');
});
