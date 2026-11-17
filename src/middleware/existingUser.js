import User from "../models/user.js";


async function userExist (req,res,next){
    try {
          const existingUser= await User.findOne({email:req.body.email});
    if(existingUser){
        return res.status(400).json({
            status:false,
            message:"user already exists",
    })
    }
  const existingPhone = await User.findOne({phone:req.body.phone});
   
     if(existingPhone){
            return res.status(400).json({
                status:false,
                message:"Phone already exists",
    
     })
            
        }
        return next();
    } catch (error) {
        console.log(error)
         return res.status(500).json({
                status:false,
                message:`Fail because ${error}`,
                 })
         
    
    }
}

export default userExist

