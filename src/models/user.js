import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
fullName:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true,
},
phone:{
    type:String,
    required:true,
    unique:true,

},
role:{
    type:String,
    enum:["admin","user"],
    default:"user"

},
createdAt:{
    type:Date,
    default: new Date(Date.now())
},
password:{
    type:String,
    unique:true,
}
})
const User = mongoose.model("User",userSchema)


export default User


