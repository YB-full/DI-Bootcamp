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

const createNewPost=async(newTitle,newContent)=>{
    const[post]=await db('posts')
    .insert({
        title:newTitle,
        content:newContent
    })
    .returning('*');
    return post;
}

const updatePost=async(id,newTitle,newContent)=>{
    const [post]=await db('posts')
    .update({
        title:newTitle,
        content:newContent
    })
    .where('id',id)
    .returning('*');
    return post;
}

const deletePost=(id)=>{
    return db('posts')
    .delete()
    .where('id',id)
    .returning("*");
}

module.exports={getAllPosts,getPostById,createNewPost,updatePost,deletePost}