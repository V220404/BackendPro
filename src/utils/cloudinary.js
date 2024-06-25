import {v2 as cloudinary} from "cloudinary";
import { response } from "express";


import fs from "fs"



cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadonCloudinary = async (localpathfile) =>{
    try {
        if (!localpathfile) 
            return null;
        //upload the file on cloudinary 
        cloudinary.uploader.upload(localpathfile , {
            resource_type:"auto"
        })
        // file has been uploaded successfully 
        console.log("file has uploaded successfully on cloudinary " , response.url);
        return response;    
    } catch (error) {
        fs.unlink(localpathfile)
        return null;      //it removesthe locally saved filess or corrupted file on the server 
    }            
}



export {uploadonCloudinary}