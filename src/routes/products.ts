import { Router } from "express";
import { Category } from "../entities/category";
import { Product } from "../entities/product";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, description, price, categoryId, popular } = req.body;

    const category = await Category.findOne({ where: { id: categoryId } });
    if (!category)
      return res
        .status(404)
        .json({ message: "Category not found, please enter a valid category" });

    const product = Product.create({
      name,
      description,
      price,
      category,
      popular,
    });
    await product.save();
    res.json({ data: product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/",async (req, res) => {
    try {
        let products = await Product.find({
            relations:{
                category: true
            }
        })
        res.json({data: products})
    }catch(error) {
        res.status(500).json({ message: error });
    }
})

export default router;
