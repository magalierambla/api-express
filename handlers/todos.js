const db = require("../models");
const express = require("express");
const app = express();

app.use(express.json()); //pour lire les objets js

//Je veux obtenir les todos non faites
exports.getTodos = async (request, response) => {
  try {
    const todos = await db.Todo.find({ completed: false });

    return response.status(200).json(todos);
  } catch (error) {
    return response.status(400).json(`Error cannot find your todos: ${error}`);
  }
};

exports.getOneTodo = async (request, response) => {
  try {
    const todo = await db.Todo.findById(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response
      .status(400)
      .json(
        `Error cannot find your todo with id ${request.params.id}: ${error}`
      );
  }
};

exports.getCompletedTodos = async (request, response) => {
  try {
    const todosCompleted = await db.Todo.find({ completed: true });

    return response.status(200).json(todosCompleted);
  } catch (error) {
    return response
      .status(400)
      .json(`Error cannot find your completed todos: ${error}`);
  }
};

//faire une barre de recherche - request.query
/* app.get('/api/todos/filtrageByTitle', (request, response) => {
     //searchKeyword
     const motfiltre = request.body.keyword;
    
     const todosFiltreByKeyword = mockDb.filter(todo => todo.title.indexOf(motfiltre)>0);
 
     if(!todosFiltreByKeyword) {
         return response.status(400).send('Error cannot find your todos!');
     }
     return response.send(todosFiltreByKeyword);
 }) */

//Ajout d'une Todo de ma liste
exports.createTodo = async (request, response) => {
  try {
    const todoNew = await db.Todo.create({
      text: request.body.text,
      completed: false,
    });

    return response.status(200).json({
      message: "New todo created!",
      todoNew,
    });
  } catch (error) {
    return response.status(400).json(`Error, could not create todo: ${error}`);
  }
};

//Suprression d'une Todo de ma liste
exports.deleteTodo = async (request, response) => {
  try {
    const todoToDelete = await db.Todo.findByIdAndDelete(request.params.id);

    return response.status(200).json({
      message: `Todo with id ${request.params.id} deleted!`,
    });
  } catch (error) {
    return response.status(400).json(`Error, could not create todo: ${error}`);
  }
};

exports.updateTodo = async (request, response) => {
  try {
    const todoToUpdate = await db.Todo.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );

    return response.status(200).json({
      message: `Todo with id ${request.params.id} updated!`,
      todoToUpdate,
    });
  } catch (error) {
    return response.status(400).json(`Error, could not create todo: ${error}`);
  }
};
