import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let addProduct = new Product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        img: req.body[i].img,
        cat: req.body[i].cat,
        price: req.body[i].price,
        quantity: req.body[i].quantity,
        size: req.body[i].size,
        color: req.body[i].color,
      });
      await addProduct.save();
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "this Method is not allowed" });
  }
};

export default connectDb(handler);
