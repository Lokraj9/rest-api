const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const User = require("../models/userModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access Private
const getContact = asyncHandler(async (req, res) => {
  console.log({user_id:req.user.id})
  const contacts = await Contact.find({user_id:req.user.id});
  res.status(200).json(contacts);
});
//@desc create new contacts
//@route POST /api/contacts
//@access Private
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const contact = await Contact.create({ name, email, phone ,user_id:req.user.id});
  res.status(201).json(contact);
});
const getContactByID = asyncHandler(async (req, res) => {
    const contactID = req.params.id;
    const contact = await Contact.findByIdAndUpdate(contactID);
    if (!contact) {
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  });
//@desc Put contacts
//@route PUT /api/contacts/:id
//@access Private
const updateContact = asyncHandler(async (req, res) => {
  const contactID = req.params.id;
  const contact = await Contact.findByIdAndUpdate(contactID);
  if (!contact) {
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(contactID,req.body,{new:true});
  res.status(201).json(updatedContact);
});
//@desc delete  contacts
//@route delete /api/contacts/:id
//@access Private
const deleteContact = asyncHandler(async (req, res) => {
    const contactID = req.params.id;
    const contact = await Contact.findByIdAndDelete(contactID);
  res.status(201).json({message:`deleted contact ${contactID}`});
});
module.exports = { getContact, getContactByID,createContact, updateContact, deleteContact };
