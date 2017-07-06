const express = require('express');
const mustacheExpress = require('mustache-express');
// const data = require('./data.json');
const routes = require('./routes.js');


const app = express();
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './public/views');
app.set('view engine', 'mustache');

app.get('/users', function (req, res){
  res.render('main', {users: proDocs});
});

app.get('unemployed', function(req, res){
  res.render('unemployed');
});

var proDocs;

var findDocuments = function(users, callback) {
  // Get the documents collection
  var collection = users.collection('userdata');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
      proDocs = docs;
    console.log(docs)
    callback(docs);
  });
}

var findUnemployed = function(users, callback) {
  // Get the documents collection
  let collection = users.collection('userdata');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
      proDocs = docs;
    console.log(docs)
    callback(docs);
  });
}






var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/users';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

findDocuments(db, function() {
  db.close();
});
findUnemployed(db, function(){
  db.close();
});
});






app.use(routes);


app.listen(3000, function(req, res){
  console.log("Up and Running")
})
