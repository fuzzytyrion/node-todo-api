const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });


    // deleteMany
    // db.collection('Users').deleteMany({name: 'Dave'}).then((result) => {
    //     console.log(result);
    // });
    
    db.collection('Users').findOneAndDelete({
            _id: new ObjectID('5a9e31b755ae11192ca2bedc')
        }).then((result) => {
        console.log(result);
    });
    // db.close();
});