const asyncHandler = require("express-async-handler");

//@desc Register user
//@route POST   /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    
    res.status(200).json({message:"Registered Successfully"});
  });
  //@desc login user
//@route POST   /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    
    res.status(200).json({message:"login Successfully"});
  });
  //@desc current user
//@route get   /api/users/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
    
    res.status(200).json({message:"current user "});
  });
  module.exports = {registerUser,loginUser,currentUser};