// import mongoose from "mongoose";
 import { db_name } from "../constant.js";


//  const connectDB = async ()=>{
//     try {
//      const connectionDataBase=   await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)

//      console.log(` MONGODB CONNECTED!!DB HOSTED :${connectionDataBase.connection.host}`)
//     } catch (error) {
//        console.log("MONGODB CONNECTION ERROR" ,error ) 
//        process.exit(1)
//     }
//  }

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect( process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;






// export default connectDB;



