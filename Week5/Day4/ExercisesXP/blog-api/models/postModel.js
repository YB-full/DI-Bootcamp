const db = require('../config/db');

const getAllPosts=()=>{
    return db('posts').select('*')
}

const getPostById=(id)=>{
    return db 
    .select('*')
    .from('posts')
    .where('id',id).first();
}

const createNewPost=(newTitle,newContent)=>{
    return db('posts')
    .insert({
        title:newTitle,
        content:newContent
    })
     .returning('*');
}

const updatePost=(id,newTitle,newContent)=>{
    return db('posts')
    .update({
        title:newTitle,
        content:newContent
    })
    .where('id',id)
    .returning('*');
}

const deletePost=(id)=>{
    return db('posts')
    .delete()
    .where('id',id)
}

module.exports={getAllPosts,getPostById,createNewPost,updatePost,deletePost}