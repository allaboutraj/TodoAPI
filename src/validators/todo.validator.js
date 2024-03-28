function createTodoValidator(req , res , next) {
    if(!req.body.todoText){
        return res.json({msg: 'Invalid request'})
    }

    //if u r sending everything 
    next();
}

module.exports = {
    createTodoValidator
}