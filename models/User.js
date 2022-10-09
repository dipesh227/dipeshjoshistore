const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, uniqu: true },
    password: { type: String, required: true },
    // isadmin: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("user, UserSchema");
