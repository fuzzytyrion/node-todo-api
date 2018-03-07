const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5aa04aeec7155a1f23bcdbb3')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOrigninal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aa04a9dd953e8224cac12e2')
    }, {
        $set: {
            name: 'Bertie'
        },
        $inc : {
            age: 1
        }
    }, {
        returnOrigninal: false
    }).then((result) => {
        console.log(result);
    });
    
    // db.close();
});