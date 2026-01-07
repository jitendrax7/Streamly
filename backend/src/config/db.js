import mongoose from "mongoose";

const connectDB = async ()=>{
    
    try {
         mongoose.connection.on('connected',()=>{
            console.log('DB Connected');
            
        })
        
        await mongoose.connect(`${process.env.MONGO_URI}`)
        
    } catch (error) {
        console.error("MongoDB Error:", error.message);
    }
       
}

export default connectDB;
 