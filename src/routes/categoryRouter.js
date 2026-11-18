import express from "express";
import CategoryController from "../controllers/categorycontroller.js";
import CategoryExist from "../middleware/categoryexisting.js";

const categoryRouter = express.Router();
categoryRouter.post("/create",CategoryExist,CategoryController.createCategory)
categoryRouter.get("/create",CategoryExist,CategoryController.createCategory)
categoryRouter.get("create/:id ", CategoryExist,CategoryController.createCategory)
categoryRouter.patch("/create/:id",CategoryExist,CategoryController.createCategory)
categoryRouter.delete("/create/:id",CategoryExist,CategoryController.createCategory)





export default categoryRouter;