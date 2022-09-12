// const mongoose = require("mongoose");
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {},
  password: {},
});
export default mongoose.model("nitin", userSchema);
