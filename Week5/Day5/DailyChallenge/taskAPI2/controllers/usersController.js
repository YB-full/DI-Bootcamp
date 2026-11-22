const usersModel=require('../models/usersModel'); 
const bcrypt = require('bcrypt');

const register=async(req,res)=>{
    try{
        const firstName=req.body.firstName;
        const lastName=req.body.lastName;
        const userName=req.body.userName.trim();
        const email=req.body.email;
        const password=req.body.password;
        
        if (!firstName || !lastName || !email ||!userName|| !password ){
            return res.status(400).json({message:"Registration failed"});
        }

        const users=await usersModel.getAllUsers();
        const userNameExist=users.find(u=>u.userName===userName);
        
        if(userNameExist){
            return res.status(400).json({message:"Username already exists"});
        }
        for (const user of users){
            const passWordExist=await bcrypt.compare(password,user.password);
            if (passWordExist){
                return res.status(400).json({message:"Password already exists"});
            }
        }
        const hashedPassword= await bcrypt.hash(password, 10);
        const newUser = {
            id: users.length>0 ? users[users.length-1].id +1 :1 , 
            firstName: firstName,
            lastName:lastName,
            email: email,
            userName:userName,
            password:hashedPassword
        };
        users.push(newUser);
        await usersModel.saveUsers(users);
        res.status(201).json({message:"Hello Your account is now created!"})
    }catch(error){
        
        res.status(500).json({ error: error.message });
    }
};

const login=async(req,res)=>{
    try{
        const userName=req.body.username.trim();
        const password=req.body.password;
        if (!userName || !password ){
            return res.status(400).json({message:"Login failed"});
        }
        const users=await usersModel.getAllUsers();
        const user=users.find(u=>u.userName===userName);
        if(!user){
            return res.status(400).json({message:"Username is not registered"});
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }
        res.status(200).json({message:`Hi ${userName} welcome back again!`})

    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

const getUsers=async (req, res) => {
    try {
        const users = await usersModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

const getUserById=async (req, res) => {
    try {
        const id =Number(req.params.id);
        const users = await usersModel.getAllUsers();
        const user=users.find(u=>u.id===id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser=async (req,res)=>{
    try{
        const id = Number(req.params.id);
        const users = await usersModel.getAllUsers();
        const user=users.find(u=>u.id===id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const firstName=req.body.firstName;
        const lastName=req.body.lastName;
        const userName=req.body.userName;
        const email=req.body.email;
        const password=req.body.password;
        
        if (firstName !== undefined) user.firstName = firstName;
        if (lastName !== undefined) user.lastName = lastName;
        if (email !== undefined) user.email = email;
        if (userName !== undefined){
            const userNameExists=users.find(u => u.userName === userName && u.id !== id);
            if (userNameExists) {
                return res.status(400).json({ message: "Username already exists" });
            }
            user.userName = userName;
        } 

        if (password !== undefined) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }
    
        
        await usersModel.saveUsers(users);
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports={register,login,getUsers,getUserById,updateUser};