const fs = require('fs');
fs.readdir('.',(error,files)=>{
    if(error){return console.log("Error in reading folder:",error)};
    console.log("Founded Files:",files);
});

