const express=require('express');
const app=express();
const router = require('./routes/usersRoutes');
app.use(express.json());
app.use(express.static('public'));
app.use('/', router);

app.listen('3000',()=>{
    console.log("The server is running");
})