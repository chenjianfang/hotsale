const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'hotsale';
const collectionName = 'documents';

let db = null;
let collection = null;

// 插入数据
const insertDocuments = function (data) {
    return new Promise((resolve) => {
        collection.insertMany(data, (err, result) => {
            assert.equal(err, null);
            resolve(result);
        });
    });
};

// 查询数据
const findDocuments = function (condition) {
    return new Promise(((resolve) => {
        // Find some documents
        collection.find(condition).toArray((err, docs) => {
            assert.equal(err, null);
            resolve(docs);
        });
    }));
};

// 更新数据
const updateDocument = function () {
    return new Promise(((resolve) => {
        collection.updateOne(
            { a: 2 },
            { $set: { b: 1 } },
            (err, result) => {
                assert.equal(err, null);
                resolve(result);
            }
            );
    }));
};

// 删除数据
const removeDocument = function () {
    return new Promise(((resolve) => {
        collection.deleteMany({}, (err, result) => {
            assert.equal(err, null);
            resolve(result);
        });
    }));
};

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);

    console.log('Connected successfully to server');

    db = client.db(dbName);
    collection = db.collection(collectionName);
});

module.exports = {
    insertDocuments,
    findDocuments,
    updateDocument,
    removeDocument
}
