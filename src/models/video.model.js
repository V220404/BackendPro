import mongoose , {Schema, Types} from "mongoose";


import mongooseAggregatePaginate from "mongoose-paginate-v2"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const VideoSchema = new Schema ({
videoFile:{
    type:String, // Cloudinary URL
    required:true
},
thumbnail:{
    type:String ,  //Cloudinary URL
    required:true,
},
owner:{
    type: Schema.Types.ObjectId,
    ref:"User"
},
title:{
    type:String , 
    required:true,
},
description:{
    type:String , 
    required:true,
},
duration:{
    type:Number ,  
    required:true,
}, 
view:{
    type:Number ,  
   
    defaut: 0 
},
isPublished:{
    type:Boolean ,  
    default:true,
},

}, 
    
     {timestamps:true});


     VideoSchema.plugin(mongooseAggregatePaginate)

export const videomodel = mongoose.model("videomodel" , VideoSchema)