import { hashPassword, comparePassword } from "../utils/passwordutils.js";
import { StatusCodes } from "http-status-codes";
import User from "../models/user.js";
import jwt from "jsonwebtoken"
class Controller{

static signup = async(req,res)=>{
      const {fullName,phone,email,password} = req.body
try {
    const encryptedPassword= await hashPassword(password)
    const user = await User.create({fullName,email,phone,password:encryptedPassword});

    if(!user){
        return res.status(400).json({status:"error",message:"Fail to create account"})
    }else{
      return res.status(201).json({status:"OK",message:"user successfuly created",user})
    }
} catch (error) {
    return res.status(500).json({status:"error",message:`Error is ${error}`})
}
}

static login = async (req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(StatusCodes.UNAUTHORIZED).json({
                success:false,
                message:"Invalid email or password"
            })
        }else{
            const verfiedPassword = comparePassword(req.body.password,user.password);
            if(!verfiedPassword){
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    success:false,
                    message:"Invalid email or password"
                });
            }else{
                const userInfo = {
                    id:user._id,
                    role:user.role

                };

        const token = jwt.sign(userInfo,process.env.SCRET_KEY,{expiresIn:"1d"});
         return res.status(StatusCodes.OK).json({
            success:true,
            message:"Login successfuly",
            token:token
         })

            }



        }
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Failed to create user",
            error:error.message
        })
    }
}



//get all users
static getAllUsers = async(req,res)=>{
try{
    const users = await User.find().select("-password");
    return res.status(200).json({
        success:true,
        message:"users retrieved successfully",
        data:users
    });
} catch (error) {
    console.log(error);

    return res.status(500).json({
        success:false,
        message:"failed to get users",
        error:error.message
    });


} 
}

//get one user
static getOneUser = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id).select("-password");
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
            });
        }
        return res.status(200).json({
            success:true,
            message:"user retrieved successfully",
            data:user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed to get user",
            error:error.message
        });
    }
}
static patchUser = async(req,res)=>{
try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user){
            return res.status(404).json({success:false,message:"user not found"})
        }
        return res.status(200).json({success:true,message:"user updated sucessfuly",data:user})
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:"Failed to update user",error:error.message})
    }
}

static deleteUser = async(req,res)=>{
    try{
    const user=await User.findByIdAndDelete(req.params.id);
    if(!user){
        return res.status(404).json({success:false,message:"user not found"})
    }
          return res.status(200).json({success:true,message:"user deleted sucessfuly",data:user});
    
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:"Failed to delete user",error:error.message});
    }

}



}




export default Controller

