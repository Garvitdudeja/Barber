import express from "express";
import Auth from "../middleware/Auth.mjs";

const router = express.Router();

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../database/UserModel.mjs";

// Route    - /signUp
// Des      - Add new USER
// Access   - Public
// Method   - POST
// Params   - None
// Body     - userName, password, phoneNumber, email

router.post("/signUp", async (req, res) => {
  try {
    const { userName, password, phoneNumber, email } = req.body;
    if (!userName || !password || !phoneNumber || !email) {
      return res.json({ error: "Add complete Details" }).status(400);
    }

    // const userAlreadyexist = await UserModel.findOne({ $or :[ { email: email }, { phoneNumber: phoneNumber} ]})
    // console.log(userAlreadyexist)
    // if (userAlreadyexist){
    //   return res.json({ error: "Email or PhoneNumber already exist" }).status(200)
    // }

    const Salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, Salt);
    const user = await UserModel.create({
      userName: userName,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      email: email,
    });
    const jwtToken = GenerateJWT(user._id)
    res.header('Authorization','Bearer '+jwtToken)
    if (user) {
      return res.json({
        _id: user._id,
        userName: user.name,
        email: user.email,
        token: jwtToken,
      });
    }
  } catch (err) {
    return res.json({error: err.message});
  }
});

router.post("/logIn", async (req, res) => {
  console.log(req.headers);
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Enter correct email address and password" });
    }
    const cmpPassword = await bcrypt.compare(password, user.password);
    const jwtToken = GenerateJWT(user._id)
    // res.header('Authorization','Bearer '+jwtToken)
    res.set('Authorization', `Bearer ${jwtToken}`)
    console.log(res.getHeader('Authorization'));
    // res.headers.authorization = 'Bearer '+jwtToken;
    if (cmpPassword) {
      return res.json({
        _id: user._id,
        email: user.email,
        token: jwtToken,
      });
    } else {
      return res.json({
        error: "Invalid credentials",
      });
    }
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
});

router.put("/update/:id", Auth, async(req, res) => {
  try {
    const User = await UserModel.findById({_id:req.user.id})
    return res.json({ user: "sucessfully logedin" });
  } catch (error) {
    return res.json(error)
  }
});

const GenerateJWT = (res,id) => {

  return jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: "30d",
  });
  
};

export default router;
