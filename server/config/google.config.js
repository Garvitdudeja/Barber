import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/user";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
      },
      //after authentication

      async (accessToken, refreshToken, profile, done) => {
        //creating newUser
        const newUser = {
          fullName: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
        };

        try {
          //check if user already exists
          const User = await UserModel.findOne({ email: newUser.email });
          if (User) {
            const token = User.generateJwtToken();
            done(null, { User, token });
          } else {
            //create a new user
            const User = await UserModel.create(newUser);
            //generate token for the new User
            const token = User.generateJwtToken();

            done(null, { User, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );
  passport.serializeUser((UserData, done) => done(null, { ...UserData }));
  passport.deserializeUser((id, done) => done(null, id));
};
