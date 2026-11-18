export class TodoList{
    constructor(){
        this.tasks=[];
    }
    addTask(taskName){
        this.tasks.push({taskName:taskName,completed:false});
    };
    taskCompleted(taskName){
        const task=this.tasks.find(t=>t.taskName ===taskName);
        if(task){
            task.completed=true;
        }
    };
    listTasks(){
        this.tasks.forEach(t => {
           console.log(`${t.taskName} ${t.completed}`) 
        });
    };
}