const postModel = require('../models/postModel');

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPostById=async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postModel.getPostById(id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createNewPost=async (req,res)=>{
    try{
        const newTitle=req.body.title;
        const newContent=req.body.content;
        
        if (!newTitle || !newContent) {
        return res.status(400).json({ error: "Title and content mandatory" });
        }
        const post= await postModel.createNewPost(newTitle,newContent);
        res.status(201).json(post);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const updatePost=async (req,res)=>{
    try{
        const id=req.params.id;
        const newTitle=req.body.title;
        const newContent=req.body.content;
        if (!newTitle || !newContent) {
        return res.status(400).json({ error: "Title and content mandatory" });
        }
        const post= await postModel.updatePost(id,newTitle,newContent);
        if (!post){
            return res.status(404).json({error: "Post not found" })
        }

        res.status(200).json(post);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const deletePost=async(req,res)=>{
    try{
        const id=req.params.id;
        const post= await postModel.deletePost(id);
        if (!post) { return res.status(404).json({ error: "Post not found" }); }
        res.status(200).json({message:"Post deleted"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }

}
module.exports={getAllPosts,getPostById,createNewPost,updatePost,deletePost}