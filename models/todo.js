const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String, 
        required: true,
        maxlength: 1000,
    },
    completed: {
        type:  Boolean,
        default: false,
    },
    owner: {
        type: String,
    },
})


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
