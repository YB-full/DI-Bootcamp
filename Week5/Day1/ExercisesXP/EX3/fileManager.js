import { callback } from 'chart.js/helpers';
import fs from 'fs';

const myReadFile = (filePath)=>{
    const data=fs.readFile(filePath,'utf-8',(error,data)=>{
        if (error) {
        console.error(error);
        return;
        }
        console.log(data);
    });
};    
const myWriteFile=(filePath,data)=>{
    fs.writeFile(filePath,data,(error)=>{
        if(error){
            console.error(error);
            return;
        }
        console.log("Content written with success!")
    });
};

export { myReadFile, myWriteFile };