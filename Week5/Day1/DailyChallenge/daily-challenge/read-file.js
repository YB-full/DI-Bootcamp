const fs = require('fs');
const myReadFile =(filePath)=>{
    fs.readFile(filePath, 'utf8',(err,data)=>{
        if(err) {
            return console.error('Error reading the file:', err);
        }
        console.log(data);
    });
}

module.exports={myReadFile};