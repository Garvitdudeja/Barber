import express from "express";

import SalonModel from "../../database/salon/index";

const Router = express();

/*
route    /salons
desc     get all the Salon details based on city
params   none
Access   Public
Method   Get
 */

Router.get("/", async (req, res) => {
  try {
    const { city } = req.query;
    const allsalons = await SalonModel.find({ city: city });
    return res.json({ allsalons });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route    /salons/:_id
desc     get invidual salon detais based on id
params   id
Access   Public
Method   Get
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const salon = await SalonModel.findById(_id);
    if (!salon) {
      return res.status(404).json({ error: "There is no Salon with such id" });
    } else return res.json({ salon });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route    /salons/search
desc     get salon details based on search string
params   none
Access   Public
Method   POST
 */

Router.get("/search", async (req, res) => {
  try {
    const { searchString } = req.body;
    const salons = await SalonModel.find({
      name: { $regex: searchString, $options: "i"}
    });
    if (!salons) {
        return res.status(404).json({error : `There is no Salon with name ${searchString}`})
    } else {
        return res.json({salons})
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router
