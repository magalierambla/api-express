const express = require('express'); 
const app = express();

app.use(express.json());

const mockDb = [
    { id: 1, title: 'première tache', completed: false },
    { id: 2, title: '2e tache', completed: true },
    { id: 3, title: '3e tache', completed: false },
    { id: 4, title: '4e tache', completed: true },
    { id: 5, title: '5e tache', completed: false },
    { id: 6, title: '6e tache', completed: true }
]

app.get('/', (request, response) => {
    response.send('Coucou Express!');
})

app.get('/api/todos', (request, response) => {
   
    const todos = mockDb.filter(todo => !todo.completed);

    if(!todos) {
        return response.status(400).send('Error cannot find your todos!');
    }
    return response.send(todos);
    //falsy/trusy à voir 
})

app.get('/api/todos/completed', (request, response) => {
   
    const todosCompleted = mockDb.filter(todo => todo.completed);

    if(!todosCompleted) {
        return response.status(400).send('Error cannot find your todos!');
    }
    return response.send(todosCompleted);
    //falsy/trusy à voir 
})

app.get('/api/todos/:id', (request, response) => {

    const foundTodo = mockDb.filter((todo, index) => {
        return todo.id === parseInt(request.params.id);
    });

    if(!foundTodo) {
        return response.status(400).send('Error cannot find your todo!');
    }
    return response.send(foundTodo);
    //falsy/trusy à voir 
})

app.post('/api/todos', (request, response) => {

    const todoNew = {
        id: mockDb.length+1, 
        title: request.body.title,
        completed: false
    };

    mockDb.push(todoNew);

    return response.send({
        message:'New todo created!',
        mockDb
    });
    //falsy/trusy à voir 
})

app.delete('/api/todos/:id', (request, response) => {

    const todos = mockDb.filter(todo => parseInt(request.params.id) !== todo.id);

    return response.send({
        message: `Todo #${request.params.id} deleted!`,
        todos
    });
    //falsy/trusy à voir 
})


app.patch('/api/todos/:id', (request, response) => {
//1. trouver la todo req.params.id dans mockDb
//2. if request.body.title modifier le title
//3. if request.body.completed remplacer l'actuel todo.completed par le request.body.completed


    const todos = mockDb.filter(todo => parseInt(request.params.id) !== todo.id);

    return response.send({
        message: `Todo #${request.params.id} deleted!`,
        todos
    });
    //falsy/trusy à voir 
})

app.listen(3000, () => console.log('listening server on port 3000...'));
