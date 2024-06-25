

// const express = require('express');
import express from "express"
const app = express();
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config();
 
console.log('MongoDB URI:', process.env.MONGODB_URI);

app.on("error" , (error)=>{
    console.log("Err", error);
    throw error
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED" , err)
})

  