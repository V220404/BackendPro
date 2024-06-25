
import mongoose  , {Schema, Types} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt" 

const UserSchema  = new Schema ({
username:{
    type:String,
    requried:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
} ,
email:{
    type:String,
    requried:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
}  ,
Fullname:{
    type:String,
    required:true,
    trim:true,
    index:true
},
avatar:{
type:String, //Cloudinary  URL
required:true,
} ,
CoverImage:{
    type:String, // Cloundinary URl
    // required:true 
},
watchHistory :[
    {
        type: Schema.Types.ObjectId,
        ref:"videomodel"
    }
],
password:{
type:String ,
 required:[true , "Password Required"]
} , 

refreshToken:{
    type:String 
}
},
{timestamps:true}
)


UserSchema.pre("save" , async function (next){
    if(!this.isModified("password")) return next();

    
this.password = bcrypt.hash (this.password,10 )
next()
})

UserSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password , this.password)
}

UserSchema.methods.generateAccessToken = function(){

 return jwt.sign({
    _id:this._id,
    email:this.email,
    username:this.username ,
    fullname: this.Fullname 
   },
process.env.ACCESS_TOKEN_SECRET,{
    expiresIn  : process.env.ACCESS_TOKEN_EXPIRY 
}
)

}
UserSchema.methods.generateRefreshtoken = function(){


    return jwt.sign({
        _id:this._id                       // As the refresh Token keeps on fefreshing continuosly 
                                                //  so  we keep only only id in referesh 
       },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn  : process.env.REFRESH_TOKEN_EXPIRY 
    }
    )
} 



export const User = mongoose.model("User" , UserSchema )