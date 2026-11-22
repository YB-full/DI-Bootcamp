const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

const getAllTasks=async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}catch(error){
    throw new Error("Error in the lecture of tasks file")
}
};

const saveTasks=async (tasks) => {
  try {
    await fs.writeFile(filePath,JSON.stringify(tasks,null,2) ,'utf8');
}catch(error){
    throw new Error("Error in writting tasks file")
}
};

module.exports={getAllTasks,saveTasks};