import express from "express";
import Controller from "../controllers/authController.js";
import userExist from "../middleware/existingUser.js";
import { userValidations,validateUser } from "../middleware/userValidator.js";
import verifyAccessToken from "../middleware/verfyToken.js";


const router = express.Router();



router.patch("/users/:id",Controller.patchUser)
router.delete("users/:id",Controller.deleteUser)
router.post("/signup",userExist,userValidations,validateUser,Controller.signup)
router.get("/users",Controller.getAllUsers)
router.get("/users/:id",Controller.getOneUser)
router.post("/login",Controller.login)
router.delete("/users/:id",verifyAccessToken("admin"),Controller.deleteUser)
router.delete("/users/delete/:id",Controller.deleteUser)




export default router;
