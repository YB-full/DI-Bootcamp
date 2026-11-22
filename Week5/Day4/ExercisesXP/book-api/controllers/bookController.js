const bookModel = require('../models/bookModel');
const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBookById=async (req, res) => {
    try {
        const id = Number(req.params.bookId);
        const book = await bookModel.getBookById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createNewBook=async (req,res)=>{
    try{
        const newTitle=req.body.title;
        const newAuthor=req.body.author;
        const newPublishedYear=req.body.publishedYear;
        
        if (!newTitle || !newAuthor || !newPublishedYear) {
        return res.status(400).json({ error: "Please provide all book's details" });
        }
        const post= await bookModel.createNewBook(newTitle,newAuthor,newPublishedYear);
        res.status(201).json(post);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={getAllBooks,getBookById,createNewBook}