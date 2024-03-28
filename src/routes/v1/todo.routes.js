const express = require('express');
const {getTodos} = require('../../controllers/todo.controller');
const { createTodoValidator } = require('../../validators/todo.validator');

const todoRouter = express.Router();

todoRouter.get('/' , getTodos);

todoRouter.post('./', createTodoValidator, createTodo);

module.exports = todoRouter;