const express = require('express'); 
const app = express();

const mockDb = [
    { id: 1, title: 'première tache', completed: false },
    { id: 2, title: '2e tache', completed: true },
    { id: 3, title: '3e tache', completed: false },
    { id: 4, title: '4e tache', completed: true },
    { id: 5, title: '5e tache', completed: false },
    { id: 6, title: '6e tache', completed: true }
]

app.get('/', (resquest, response) => {
    response.send('Coucou Express!');
})

app.get('/api/todos', (resquest, response) => {
    const todos = mockDb;

    if(!todos) {
        return response.status(400).send('Error cannot find your todos!');
    }
    return response.send(todos);
    //falsy/trusy à voir 
})

app.listen(3000, () => console.log('listening server on port 3000...'));

