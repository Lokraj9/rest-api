const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler');
const {getContact,createContact,getContactByID,updateContact,deleteContact} = require('../controllers/contactController');
router.use(validateToken)
router.get('/', getContact);
router.post('/',createContact)
router.get('/:id',getContactByID)
router.put('/:id',updateContact)
router.delete('/:id',deleteContact)
module.exports =router;