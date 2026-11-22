const bcrypt = require('bcrypt');
const userModel= require('../models/userModel');

const register=async(req,res)=>{
    try{
        const email=req.body.email;
        const username=req.body.username;
        const firstName=req.body.first_name;
        const lastName=req.body.last_name;
        const password=req.body.password;

        if (!email || !username || !password){
            return res.status(400).json({message:"Email, username and password are required"});
        }
        const hashedPwd=await bcrypt.hash(password, 10);
        const newUser = await userModel.createUserWithTransaction({
            email:email,
            username:username,
            first_name:firstName,
            last_name:lastName,
            hashedPassword:hashedPwd,
        });
        res.status(201).json({message:"User created successfully" ,user:newUser})

    }catch(error){
        res.status(500).json({message:error.message})
    }
};    

const login = async(req,res)=>{
    try {
        const username=req.body.username;
        const password=req.body.password;
        if (!username || !password){
            return res.status(400).json({message:"Username and password are required"});
        }
        const user=await userModel.findHashByUsername(username);
        if(!user){
            return res.status(401).json({message:"Invalid username"});
        }
        const pwdMatch=await bcrypt.compare(password, user.password);
        if(!pwdMatch){
            return res.status(401).json({message:"Invalid password"});
        }
        res.status(200).json({message:"Login successfull !"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const getAllUsers= async(req,res)=>{
    const user =await userModel.getAllUsers();
    res.status(200).json(user);
};
const getUserById= async(req,res)=>{
    try {
        const id=req.params.id;
    const user= await userModel.getUserById(id);
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
};
const updateUser=async(req,res)=>{
    try {
    const id=req.params.id;
    const { email, username, first_name, last_name } = req.body;

    const updatedUser=await userModel.updateUserById(id,{
        email,
        username,
        first_name,
        last_name,
    });
    if(!updatedUser){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json(updatedUser);
    }catch (error) {
         res.status(500).json({message:error.message})
    }
    
};
module.exports={register,login,getAllUsers,getUserById,updateUser}