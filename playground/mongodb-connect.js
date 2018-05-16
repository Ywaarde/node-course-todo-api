// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server.');
  }
  console.log('Connected to Mongodb server.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Failed to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Ivar',
    age: 32,
    location: 'NYC'
  }, (err, result) => {
    if (err) {
      return console.log('Failed to insert user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
