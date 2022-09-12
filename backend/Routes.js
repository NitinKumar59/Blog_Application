// const Schema =require("./modal/Schemas")
// import Schema from "./modal/Schemas";
import { getAlluser, signup ,login } from "./controller/Ucontroller";
// import { getAlluser } from "./controller/Ucontroller";
// const express = require("express");
import User from "./modal/Schemas";
import express from "express";
const router = express.Router();
router.get("/", getAlluser);
router.post("/signup", async (req, res, next) => {
  const { name, email, password } = req.body;

  let existinguser;
  try {
    existinguser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existinguser) {
    return res.status(400).json({ message: "user Already exist" });
  }
  const user = new User({
    name,
    email,
    password,
  });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ user });
  // export default getAlluser;
});

router.post("/login", login);

export default router;
