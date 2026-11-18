import Category from "../models/categorymodels.js";


async function CategoryExist(req, res, next) {
    try {
        const { name, title } = req.body;

        const existingCategory = await Category.findOne({
            $or: [
                { name },
                { title }
            ]
        });

        if (existingCategory) {
            return res.status(409).json({
                success: false,
                message: "Category already exists"
            });
        }


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
    return next();
}

export default CategoryExist;