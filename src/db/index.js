import mongoose from "mongoose";
 import { db_name } from "../constant.js";


 const connectDB = async ()=>{
    try {
     const connectionDataBase=   await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)

     console.log(` MONGODB CONNECTED!!DB HOSTED :${connectionDataBase.connection.host}`)
    } catch (error) {
       console.log("MONGODB CONNECTION ERROR" ,error ) 
       procces.exit(1)
    }
 }





export default connectDB;



