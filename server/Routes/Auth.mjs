import express from "express";
import Auth from "../middleware/Auth.mjs";
import multer from "multer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../database/UserModel.mjs";
import MarksTableModel from "../database/TableModel.mjs";


const router = express.Router();

const upload = multer({ dest: "uploads" });


// Route    - /signUp
// Des      - Add new USER
// Access   - Public
// Method   - POST
// Params   - None
// Body     - userName, password, phoneNumber, email

router.post("/signUp",upload.single('image'), async (req, res) => {
  try {
    let image=req.file
    if (!image){
      image = {path : '/'}
    }
    const { userName, password, phoneNumber, email } = req.body;
    
    if (!userName || !password || !phoneNumber || !email) {
      return res.json({ error: "Add complete Details" }).status(400);
    }


    const Salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, Salt);
    const user = await UserModel.create({
      userName: userName,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      email: email,
      image: image.path,
    });
    if (user) {
      const jwtToken =  jwt.sign({ UserId: user._id }, process.env.SECRET_TOKEN, {
        expiresIn: "30d",
      })
      res.cookie('jwt', jwtToken)
      return res.json({
        _id: user._id,
        userName: user.name,
        email: user.email,
        image:user.image,
        token:jwtToken
      });
    }
  } catch (err) {
    return res.json({ error: err.message });
  }
});



router.post("/logIn", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res
        .json({ error: "Enter correct email address and password" })
        .status(400);
    }
    const cmpPassword = await bcrypt.compare(password, user.password);
    if (cmpPassword) {
      const jwtToken = jwt.sign({ UserId: user._id }, process.env.SECRET_TOKEN, {
        expiresIn: "30d",
      })
      res.cookie("jwt",jwtToken);

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
    return res.json({ error: error.message });
  }
});

router.get("/getUser",Auth, async (req, res) => {
  try {
    const UserId = req.user.UserId;
    const userData = await UserModel.findById({_id: UserId});
    return res.json(userData);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

// Testing 
router.get('/updateUser',async (req,res)=>{
  try{
    const user =  await UserModel.aggregate([
      {$group:{'_id':'$userName',totalAmount : {$sum : { $sum : ['$amount', '$fee']}},}}
    ])
    return res.json({sucess: user})
  }
  catch(error){
    return res.json({error: error.message});
  }
})

export default router;
