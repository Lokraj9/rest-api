//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContact=async(req,res)=>{
    res.status(200).json({message:"get all contacts"})
}
//@desc create new contacts
//@route POST /api/contacts
//@access Public
const createContact=async(req,res)=>{
    const {name,email,phone} = req.body;
    if(!name ||!email ||!phone){
        res.status(400);
        throw new Error("Please fill all the fields")
    }
    res.status(201).json({message:"create  contacts"})
}
//@desc Put contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact=async(req,res)=>{
    res.status(201).json({message:"create  contacts"})
}
//@desc delete  contacts
//@route delete /api/contacts/:id
//@access Public
const deleteContact=async(req,res)=>{
    res.status(201).json({message:"create  contacts"})
}
module.exports={getContact,createContact,updateContact,deleteContact}