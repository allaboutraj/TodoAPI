const todos = [];

class TodoRepository{

    insert(todoText) {
        todoText.push({id: todos.length, text:todoText});  
    }

    getAll() {
        return todos;
    }

    get(id) {
        return todos.filter(todo => todo.id ==id)[0];
    }
}