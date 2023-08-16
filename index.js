const express = require('express');
const errorHanlder = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
connectDb();
const app = express();
const port=process.env.PORT || 5000
app.use(express.json())
app.use('/api/contacts',require('./routes/contactRoutes'))
app.use(errorHanlder)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})