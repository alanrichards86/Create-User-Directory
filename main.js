const express = require('express');
const mustacheExpress = require('mustache-express');
// const data = require('./data.json');
const routes = require('./routes.js');


const app = express();
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './public/views');
app.set('view engine', 'mustache');


app.set('layout', 'main');








app.use(routes);


app.listen(3000, function(req, res){
  console.log("Up and Running")
})
