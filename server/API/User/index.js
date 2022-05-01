import express from "express";

import { UserModel } from "../../database/user/index";

const Router = express();

/*
route    user/:_id
desc     get the user based on id
params   _id
Access   Public
Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await UserModel.findById(_id);
    if (!user) {
      return res.status(404).json({ error: `user not found with id ${_id}` });
    }
    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/*
route    user/update/:userid
desc     update user based on id
params   userid
Access   Public
Method   put
 */

Router.put("/update/:userid", async (req, res) => {
    try {
      const {userid} = req.params;
      const {userData} = req.body;
      const updateUserData = await UserModel.findByIdAndUpdate({_id:userid},
        {
            $put: userData
        },{
            new: true
        });
      return res.json({ user: updateUserData});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  export default Router;