import { Router } from "express";
import { Order } from "../entities/order";
import { OrderLine } from "../entities/orderLine";
import { Product } from "../entities/product";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, mobileNo, city, address, orderLines } =
      req.body;

    const order = Order.create({
      firstName,
      lastName,
      mobileNo,
      city,
      address,
    });
    await order.save();

    for (let i = 0; i < orderLines.length; i++) {
      const product = await Product.findOne({
        where: { id: orderLines[i].productId },
      });
      if (!product)
        return res
          .status(404)
          .json({ message: "Product not found, please enter a valid product" });

      const orderLine = OrderLine.create({
        product,
        order,
        quantity: orderLines[i].quantity,
      });
      await orderLine.save();
      console.log(orderLine);
    }
    res.json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const order = await Order.findOne({
      where: { id },
      relations: {
        orderLines: true,
      },
    });
    res.json({ data: order });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
export default router;

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find({ relations: { orderLines: true } });
    res.json({ data: orders });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
