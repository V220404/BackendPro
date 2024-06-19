
// import connectDB from "./db/index.js";
// // require('dotenv').config({path:'./env'})
// import dotenv from "dotenv"


// dotenv.config({
//     path:'./env'
// })

// connectDB();


import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();
 
console.log('MongoDB URI:', process.env.MONGO_URI); 
connectDB();

// The rest of your server code





/*
import express from "express"
const app = express()
;(async ()=>{
try{
   await mongoose.connect(`${process.env.
        MONGODB_URI}/${dbName}`)
        app.on("error" , ()=>{
            console.log("ERRR", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App nlistening pn port ${process.env.PORT}`)
        })
} catch(error){
    console.error("ERROR" , error)
    throw err
}
})() 
*/

