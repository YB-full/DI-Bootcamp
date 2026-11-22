const express = require('express');
const router = express.Router(); 
const bookController = require('../controllers/bookController');

router.get('/api/books', bookController.getAllBooks);
router.get('/api/books/:bookId',bookController.getBookById);
router.post('/api/books',bookController.createNewBook);

module.exports=router;