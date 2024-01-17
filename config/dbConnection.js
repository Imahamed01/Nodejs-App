import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();
const connectDB= async() => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database connection was Successful",connect.connection.host,connect.connection.name)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;