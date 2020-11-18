const mongoose = require('mongoose');

mongoose
    .connect(`mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@cluster0.pxhtf.mongodb.net/todo-app?retryWrites=true&w=majority`, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('Connected to database!'))
    .catch(error => console.log('Error: ', error));

module.exports.Todo = require('./todo');


