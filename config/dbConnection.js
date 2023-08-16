const mongoose = require('mongoose');

const connectDb=async()=>{
    try {
        const connectDatabase=await mongoose.connect(process.env.MONGO_URI)
        console.log('database connection successful')
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDb;