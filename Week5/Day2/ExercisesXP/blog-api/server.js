const express=require('express');

const app = express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("The server is running");
});

const data=  [
  {
    id: 1,
    title: "first post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "second post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "third post",
    content: "This is the content of the third post.",
  }
]

app.get('/posts',(req,res)=>{
    res.json(data);
});
app.get('/posts/:id',(req,res)=>{
    const id = Number(req.params.id);
    const postData=data.find((e)=>e.id===id);
    if (!postData) {
        return res.status(404).json({ error: "Post not found" });
    }
    res.json(postData);
});
app.post('/posts',(req,res)=>{
    const newPost={
        id:data.length + 1,
        title:req.body.title,
        content:req.body.content
    };
    data.push(newPost);
    res.status(201).json(newPost);
});

app.put('/posts/:id',(req,res)=>{
    const id = Number(req.params.id);
    const postIndex = data.findIndex((e) => e.id === id);   
    if(postIndex===-1){
        return res.status(404).json({ error: "Post not found" });
    }   
    data[postIndex].title=req.body.title || data[postIndex].title;
    data[postIndex].content=req.body.content || data[postIndex].content;
    return res.status(200).json({ 
        message: "Post updated successfully" ,
        post: data[postIndex]
    });
});

app.delete('/posts/:id',(req,res)=>{
    const id = Number(req.params.id);
    const postIndex = data.findIndex((e) => e.id === id);   
    if(postIndex===-1){
        return res.status(404).json({ error: "Post not found" });
    }
    data.splice(postIndex,1);
    return res.status(200).json({message:"Post deleted successfully"});   
});