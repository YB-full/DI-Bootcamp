const express=require('express');
const app = express();
app.listen(5000,()=>{
    console.log("The server is running");
});
const data =[
    {
        id:1,
        title:"Harry Potter",
        author:"JK Rowling",
        publishedYear:2009
    },
     {
        id:2,
        title:"The Hobbit",
        author:"J.R.R. Tolkien",
        publishedYear:1937    
    },
    {
        id:3,
        title:"The Great Gatsby",   
        author:"F. Scott Fitzgerald",
        publishedYear:1925
    }

];
app.get('/api/books',(req,res)=>{
    res.json(data);
});
app.get('/api/books/:id',(req,res)=>{
    const id = Number(req.params.id);
    const bookData=data.find((e)=>e.id===id);
    if (!bookData) {
        return res.status(404).json({ error: "Book not found" });
    }
    res.json(bookData);
});
app.get('/api/books/:bookId',(req,res)=>{
    const bookId = Number(req.params.bookId);
    const bookData=data.find((e)=>e.id===bookId); 
    if(bookData){
        res.status(200).json(bookData);
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});  
app.post('/api/books',(req,res)=>{
    const newBook={
        id:data.length + 1,
        title:req.body.title,
        author:req.body.author,
        publishedYear:req.body.publishedYear
    };
    data.push(newBook);
    res.status(201).json(newBook);
});
