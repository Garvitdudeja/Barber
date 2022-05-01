require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import passport from "passport";
import googleAuthConfig from "./config/google.config";
import session from "express-session";

//doing my stuff
import mongoose from "mongoose";
import Auth from "./API/Auth/index";
import Salons from "./API/Salons/index";
import Services from "./API/Services/index";
import Menu from "./API/Menu/index";
import Order from "./API/Order/index";
import User from "./API/User/index";
import Reviews from "./API/Reviews/index";

const barber = express();

//passport config
googleAuthConfig(passport);

// barber.use(express.json)

barber.use(express.urlencoded({ extended: false }));
barber.use(cors());

barber.set("trust proxy", 1); // trust first proxy
barber.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

//allows cross origin resource sharing
barber.use(helmet());
barber.use(bodyParser.json());
barber.use(passport.initialize());
barber.use(passport.session());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connection extablished!"))
  .catch((err) => {
    console.log(err);
  });

barber.use("/auth", Auth);
barber.use("/salons", Salons);
barber.use("/service", Services);
barber.use("/review", Reviews);
barber.use("/menu", Menu);
barber.use("/user", User);
barber.use("/order", Order);

barber.get("/", (req, res) => {
  res.json({ message: "working sucessfully" });
});

barber.listen(5000, () => console.log("working"));
