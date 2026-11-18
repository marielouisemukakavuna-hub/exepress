import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config


function verifyAccessToken (passRole) {

return async(req,res,next)=>{
  
    const token = req.headers.authorization
    if(!token){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success:false,
            message:"Missing token"
        })
    }
const decoded = jwt.verify(token,process.env.SCRET_key);
console.log(decoded)
}

}
export default verifyAccessToken