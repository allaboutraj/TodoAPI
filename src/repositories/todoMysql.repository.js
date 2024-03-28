class TodoMySQLRepository{
    //Below code will not work its Demo 
    insert(todoText) {
        // todoText.push({id: todos.length, text:todoText}); 
        mysql.exec(`INSERT INTO TODOS (todoText) VALUE (${todoText})`); 
    }

    getAll() {
        mysql.exec(`SELECT * FROM TODOS`);
    }

    get(id) {
        mysql.exec(`SELECT * FROM TODOS WHERE id =${id});
    }
}

module.exports = TodoMySQLRepository;