import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import imagesModel from "./database/imagesModel.mjs";


import Auth from './Routes/Auth.mjs'


const upload = multer({ dest: "uploads" });
const uri =process.env.MONGO_URI

try {
  await mongoose.connect(uri).then(() => console.log("Connected!"));
} catch (error) {
  console.log(error);
}

const myapp = express();

// myapp.use(bodyParser.urlencoded({   extended: false }))
// myapp.use(bodyParser.json())
myapp.use(express.json());
myapp.use(cors());
myapp.use("/uploads", express.static("uploads/"));
myapp.use('/auth', Auth)

myapp.get("/", (req, res) => {
  return res.json({ status: "server is working" });
});

// myapp.post("/login", upload.single("file"), async (req, res) => {
//   try {
//     await imagesModel.create({
//       name: req.body.name,
//       password: req.body.password,
//       image: req.file.path,
//     });
//     console.log({ sucsess: "Data posted successfully" });
//   } catch (error) {
//     console.log(error);
//   }
// });

// myapp.get("/getData", async (req, res) => {
//   try {
//     const data = await imagesModel.find({});
//     return res.json({ result: data });
//   } catch (error) {
//     console.log(error);
//     return 0;
//   }
// });

myapp.listen(4000, () => {
  console.log("server listening on port 4000");
});




