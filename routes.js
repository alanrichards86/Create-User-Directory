// const models = require('./models');
const express = require('express');
const router = express.Router();




router.get('/users', function (req, res){
  res.render('users', {users: proDocs});
});


router.get('/lookingForWork', function(req, res){
  res.render('unemployed', {users: proDocs});
});

router.get('/currentlyEmployed', function(req, res){
  res.render('currentlyEmployed', {users: proDocs});
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

var lookingForWork = function(users, callback) {
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
lookingForWork(db, function(){
  db.close();
});
});



module.exports = router;
