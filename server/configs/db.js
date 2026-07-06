import "./env.js";
import mongoose from "mongoose";


const connectDB = async() =>{
    const mongoUri = process.env.MONGODB_URI;

    if(!mongoUri){
        throw new Error("MONGODB_URI is missing in the server .env file");
    }

    mongoose.connection.on('connected',()=>console.log("Database Connected"))
    await mongoose.connect(mongoUri)
}

export default connectDB;
