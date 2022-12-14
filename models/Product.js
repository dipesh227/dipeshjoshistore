const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, uniqu: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    cat: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    size: { type: String },
    color: { type: String },
  },
  { timestamps: true }
);

mongoose.models = {};
// module.exports = mongoose.model("product", ProductSchema);
export default mongoose.model("product", ProductSchema);
