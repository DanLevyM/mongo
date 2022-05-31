const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  'CustId': 55304
};

MongoClient.connect(
  'mongodb://root:password@localhost/SampleCollections?authSource=admin',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db('SampleCollections').collection('DBEnvyLoad_orders');
    coll.find();
    console.log(coll)
    client.close();
  });
