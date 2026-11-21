const express = require('express');
const router = express.Router(); 

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get('/books', (req, res) => {
  res.send(books);
});
// Add a new book
router.post('/books',(req,res)=>{
    const newBook={
        id:books.length+1,
        title:req.body.title,
        author:req.body.author
    }
    books.push(newBook);
    res.status(201).json(newBook);
});
// Update a book by ID
router.put('/books/:id',(req,res)=>{
    const bookId=Number(req.params.id);
    const book=books.find(b=>b.id===bookId);
    if(!book){
        return res.status(404).json("Book not found");
    }
    book.title=req.body.title||book.title;
    book.author=req.body.author||book.author;
    res.json(book)
});
// Delete a book by ID
router.delete('/books/:id',(req,res)=>{
    const bookId=Number( req.params.id);
    const index= books.findIndex(e=>e.id===bookId);
    if(index===-1){
        return res.status(404).json("Book not found");
    }
    const deletedBook=books.splice(index,1);
    res.json({message:'Book deleted',deleted:deletedBook});
});

module.exports=router;