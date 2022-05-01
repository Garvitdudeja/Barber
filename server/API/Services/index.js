import express from "express";
import { ServiceModel } from "../../database/services";
import {
  validateCategory,
  validateRestaurantId,
} from "../../validation/service";

const Router = express();

/*
Route      /service/s/:_id
Desc       Getting a all the food based on particular restaurant
Params     _id
Acess      Public
Method     GET
*/

Router.get("/s/:_id", async(req, res) => {
  try {
    const { _id } = req.params;
    await validateRestaurantId(_id);
    const Service = await ServiceModel.find({ salon: _id });
    if (!Service) {
      return res.status(404).json({ error: "No service listed by Salon" });
    }
    return res.json({ Service });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route      /service/s/:category
Desc       Getting a all the food based on particular restaurant
Params     _id
Acess      Public
Method     GET
*/

Router.get("/s/:category", async (req, res) => {
  try {
    const { category } = req.params;
    await validateCategory(category);
    const services = await ServiceModel.find({
      category: { $regex: category, $options: "i" },
    });
    if (!services) {
      return res.status(404).json({ error: "No service based on category" });
    }
    return res.json({ services });
  } catch (error) {
    return res.json({ error: error.message });
  }
});

export default Router;
