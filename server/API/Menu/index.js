import express from "express";

import { MenuModel } from "../../database/menu/index.js";
import { ImageModel } from "../../database/images/index";

const Router = express();

/*
route    /menu/list/:_id
desc     get menu based on id
params   _id
Access   Public
Method   GET
 */

Router.get("/list/:_id", async(req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findById(_id);
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route    /menu/image/:_id
desc     get all menu images based on id
params   _id
Access   Public
Method   GET
 */

Router.get("/image/:_id", async(req, res) => {
  try {
    const { _id } = req.params;
    const menus = await ImageModel.findOne(_id);
    
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;