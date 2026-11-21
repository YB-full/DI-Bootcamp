const db = require('../config/db');

const getAllBooks=()=>{
    return db('books').select('*')
}

const getBookById=(id)=>{
    return db 
    .select('*')
    .from('posts')
    .where('id',id).first();
}

const createNewBook=(newTitle,newAuthor,newPublishedYear)=>{
    return db('posts')
    .insert({
        title:newTitle,
        author:newAuthor,
        publishedYear:newPublishedYear
    })
     .returning('*');
}

module.exports={getAllBooks,getBookById,createNewBook}