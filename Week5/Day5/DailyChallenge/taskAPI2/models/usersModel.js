const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

const getAllUsers=async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}catch(error){
    throw new Error("Error in the lecture of users file")
}
};

const saveUsers=async (tasks) => {
  try {
    await fs.writeFile(filePath,JSON.stringify(tasks,null,2) ,'utf8');
}catch(error){
    throw new Error("Error in writting users file")
}
};

module.exports={getAllUsers,saveUsers};