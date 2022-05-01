import express from "express";

import { ReviewModel } from "../../database/reviews/index";

const Router = express();

/*
route    /review/:salonid
desc     get all the reviews based on salon
params   _id
Access   Public
Method   GET
 */

Router.get("/:salonid", async (req, res) => {
  try {
    const { salonid } = req.params;
    const Reviews = await ReviewModel.find({ salon: salonid });
    return res.json({ Reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route    /review/new
desc     adding a new review 
params   None
Body     review object
Access   Public
Method   POST
 */

Router.post("/new", async (req, res) => {
  try {
    const { reviewData } = req.body;
    const Reviews = await ReviewModel.create({ ...reviewData });
    return res.json({ Reviews: "sucessfully created a review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route    /review/delete/_id
desc     deleting a review 
params   _id
Access   Public
Method   DELETE
 */

Router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const Reviews = await ReviewModel.findByIdAndDelete(_id);
    return res.json({ Reviews: "sucessfully removed the review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
