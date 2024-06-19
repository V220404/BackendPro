


import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();
 
console.log('MongoDB URI:', process.env.MONGO_URI); 
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED" , err)
})
