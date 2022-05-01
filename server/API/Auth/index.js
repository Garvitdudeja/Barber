import express from "express";

import { validateSignin, validateSignup } from "../../validation/auth";

//importing models
import { UserModel } from "../../database/user/index";
import passport from "passport";

const Router = express();

/*
route    /auth/signup
desc     register new user
params   none
Access   Public
Method   POST
*/

Router.post("/signup", async (req, res) => {
  try {
    await validateSignup(req.body.credentials);
    await UserModel.findByEmailAndPhone(req.body.credentials);
    const newUSer = await UserModel.create({ ...req.body.credentials });
    //generate JWT auth token
    const token = newUSer.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route    /auth/signin
desc     login user
params   none
Access   Public
Method   POST
*/

Router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body.credentials;
    await validateSignin(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const Token = user.generateJwtToken();
    return res.status(200).json({ Token, message: "successfully Loged in!!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route    /auth/google
desc     login/signup with googleuser
params   none
Access   Public
Method   GET
*/

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
route    /auth/google/callback
desc     route for google authentication
params   none
Access   Public
Method   GET
*/

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);

export default Router;
