

import Category from "../models/categorymodels.js";
import { StatusCodes } from "http-status-codes";

class CategoryController {

    
    static createCategory = async (req, res) => {
        try {
            const category = await Category.create(req.body);

            return res.status(StatusCodes.CREATED).json({
                success: true,
                message: "Category successfully created",
                data: category
            });

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: `Error is ${error.message}`
            });
        }
    };

    
    static getAllCategory = async (req, res) => {
        try {
            const category = await Category.find();

            if (category) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    message: "No category found"
                });
            }

            return res.status(StatusCodes.OK).json({
                success: true,
                message: "Categories found successfully",
                data: category
            });

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: `Error is ${error.message}`
            });
        }
    };

    
    static getOneCategory = async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);

            if (!category) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    message: "Category not found"
                });
            }

            return res.status(StatusCodes.OK).json({
                success: true,
                message: "Category found successfully",
                data: category
            });

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: `Error is ${error.message}`
            });
        }
    };


static patchCategory = async(req,res)=>{
try{
        const category=await Category.find();
        if(!category){
            return res.status(404).json({success:false,message:"category not found"})
        }
        return res.status(200).json({success:true,message:"category found sucessfuly",data:category})
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:"Failed to update category",error:error.message})
    }
}

static deleteCategory = async(req,res)=>{
    try{
    const category=await Category.find();
    if(!category){
        return res.status(404).json({success:false,message:"category not found"})
    }
          return res.status(200).json({success:true,message:"category found sucessfuly",data:category});
    
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:"Failed to update category",error:error.message});
    }

}


}

export default CategoryController;
