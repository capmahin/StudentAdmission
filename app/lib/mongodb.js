import mongoose from "mongoose";

const connectDB = async ()=>{
  try {
    if(mongoose.connection.readyState === 0){
        
    }
  } catch (error) {
    console.log(error)
  }
};

export default connectDB;