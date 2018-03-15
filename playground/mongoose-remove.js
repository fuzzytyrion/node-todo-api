// 5aa52885c3c80f7c245b4969
const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5aaa0ee62a1fe10e2abe7870'}).then((todo) => {
    console.log(todo);
});


Todo.findByIdAndRemove('5aaa0ee62a1fe10e2abe7870').then((todo) => {
    console.log(todo);
});