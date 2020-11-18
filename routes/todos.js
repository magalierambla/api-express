const express = require("express");
const router = express.Router();
const todosHandlers = require("../handlers/todos");

router.route("/").post(todosHandlers.createTodo).get(todosHandlers.getTodos);

router.route("/completed").get(todosHandlers.getCompletedTodos);

router
  .route("/:id")
  .get(todosHandlers.getOneTodo)
  .delete(todosHandlers.deleteTodo)
  .patch(todosHandlers.updateTodo);

module.exports = router; //pour exporter tt le router
