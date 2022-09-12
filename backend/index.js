// const mongoose = require("mongoose");
import mongoose from "mongoose";
// const express = require("express");
import express from "express";
// import router from "./Routes";
import router from "./Routes";
import cors from "cors"
const app = express();
app.use(cors());
// app.use("/api", (req, res, next) => {
//   res.send("Nitin Kumar Dewangan");
// });
// app.listen(5000);
app.use(express.json());
app.use("/", router);
mongoose
  .connect("mongodb://localhost:27017/nitin")
  .then(() => app.listen(5000))
  .then(() => console.log("connection 5000  Nitin Sucessfully"))
  .catch((err) => console.log(err));
