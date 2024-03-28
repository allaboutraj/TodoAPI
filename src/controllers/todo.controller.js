const TodoService = require('../services/todo.service');
const TodoRepository = require('../repositories/todo.repository');
 
const TodoService = new TodoService();

function getTodo(req, res){
    const response = todoService.getAllTodos();
    return res.json({
        data: response
    })
}

function createTodo(req, res){
    const todoText = req.body.todoText;
    todoService.create(todoText);
    return res.json({
        data: 'New todo created'
    })
}

module.exports = {
    getTodo,
    createTodo
}