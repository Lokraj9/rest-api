const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc Register user
//@route POST   /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const {username,email,password} = req.body;
    if(!username ||!email ||!password) {
        return res.status(400).json({message:"all fields are required"});
    }
    const availableEmail = await User.findOne({email});
    if(availableEmail) {
            return res.status(400).json({message:"email already exists"});
            
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({username,email,password:hashedPassword});
    console.log(`user created ${user}`)
    if(user){
        res.status(201).json({_id:user._id,username:user.username,email:user.email})
    }
    else{
        res.status(400);
        throw new Error("user not valid");
    }
    res.status(200).json({message:"user created successfully"});
  });
  //@desc login user
//@route POST   /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email,password} = req.body;
    if(!email ||!password) {
        return res.status(400).json({message:"all fields are required"});
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))) {
         const accessToken = jwt.sign({_id:user._id,username:user.username,email:user.email},process.env.JWT_SECRET,{expiresIn:"1h"});
         console.log({accessToken});
         res.status(200).json({accessToken});
    }
    else{
            res.status(401);
            throw new Error("user isnot valid");
        }

    res.status(200).json({message:"login Successfully"});
  });
  //@desc current user
//@route get   /api/users/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
    console.log(req.user);
        res.json(req.user);
  });
  module.exports = {registerUser,loginUser,currentUser};