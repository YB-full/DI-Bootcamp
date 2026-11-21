const express = require('express');
const router = express.Router(); 

// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get('/todos', (req, res) => {
  res.send(todos);
});
// Add a new to-do item
router.post('/todos',(req,res)=>{
    const newTodo={
        id:todos.length+1,
        task:req.body.task,
        completed:false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
})
// Update a to-do item by ID
router.put('/todos/:id',(req,res)=>{
    const todoId=Number( req.params.id);
    const todo= todos.find(e=>e.id===todoId);
    if(!todo){
        return res.status(404).json("Todo Item not found");
    }
    todo.task=req.body.task||todo.task;
    if(req.body.completed!==undefined){
        todo.completed=req.body.completed;
    }
    res.json(todo)
})
// Delete a to-do item by ID
router.delete('/todos/:id',(req,res)=>{
    const todoId=Number( req.params.id);
    const index= todos.findIndex(e=>e.id===todoId);
    if(index===-1){
        return res.status(404).json("Todo Item doesn't exist");
    }
    const deleteTodo=todos.splice(index,1);
    res.json({message:'Todo item deleted',deleted:deleteTodo});
});

module.exports=router;