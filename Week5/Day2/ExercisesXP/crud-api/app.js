const express=require('express');
const app = express();
app.use(express.json());
app.listen(5000,()=>{
    console.log("The server is running");
});

const dataService=require('./data/dataService');
const fetchPosts = require('./data/dataService');
app.get('/posts'),async (req,res)=>{
    try{
        const posts= await fetchPosts();
        res.json(posts);
        console.log('Data has been successfully retrieved and sent as a response.')
    }catch(err){
        console.error('Error:',err);
        res.status(500).json({err:'Failed to fetch posts'});
    }
    
}