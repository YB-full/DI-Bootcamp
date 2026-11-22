const taskModel=require('../models/taskModels'); 

const getTasks=async (req, res) => {
    try {
        const tasks = await taskModel.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTaskById=async (req, res) => {
    try {
        const id =Number(req.params.id);
        const tasks = await taskModel.getAllTasks();
        const task=tasks.find(t=>t.id===id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createNewTask=async (req,res)=>{
    try{
        const title=req.body.title;
        const completed=req.body.completed;
    
        if (!title) {
        return res.status(400).json({ error: "Please provide all task's details" });
        }
        const tasks=await taskModel.getAllTasks();
        const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        const newTask = {
            id: newId, 
            title: title,
            completed: completed || false
        };
        
        tasks.push(newTask);
        await taskModel.saveTasks(tasks);
        res.status(201).json(newTask);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTask=async (req,res)=>{
    try{
        const id = Number(req.params.id);
        const tasks = await taskModel.getAllTasks();
        const task=tasks.find(t=>t.id===id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        const title=req.body.title;
        const completed=req.body.completed;
        if(title !== undefined && title.trim() === ''){
            return res.status(400).json({ error: "Title cannot be empty" });;
        }
        if (completed !== undefined && typeof completed !== 'boolean'){
            return res.status(400).json({ error: "Completed must be a boolean" });;
        }
        if(title !== undefined){task.title = title};
        if (completed !== undefined){task.completed = completed};
        
        await taskModel.saveTasks(tasks);
        res.status(200).json(task);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask=async (req, res) => {
    try {
        const id = Number(req.params.id);
        const tasks = await taskModel.getAllTasks();
        const index = tasks.findIndex(t => t.id === id);
        if (index === -1) {
            return res.status(404).json({ message: "Task not found" });
        }

        tasks.splice(index, 1);
        await taskModel.saveTasks(tasks);
        res.status(200).json({message:"Task deleted with success"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getTasks, getTaskById, createNewTask, updateTask, deleteTask };