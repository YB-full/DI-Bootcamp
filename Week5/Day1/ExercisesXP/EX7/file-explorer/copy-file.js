const fs = require('fs');
fs.readFile('source.txt','utf-8',(error,data)=>{
    if (error){ return console.error("Reading error:" ,error)};
    console.log("Inside source :",data);

fs.writeFile('destination.txt',data,(error)=>{
    if (error){ return console.error("Writing error:",error)};
    console.log("Inside destination :",data);
});
});