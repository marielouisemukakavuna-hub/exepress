import express from "express"
import categoryRouter from "./categoryRouter.js"
import authRouter from "./authRouter.js"

const router = express.Router()

router.use("/auth",authRouter)
router.use("/category",categoryRouter)



export default router