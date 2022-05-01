import express from "express";

import { OrderModel } from "../../database/order";

const Router = express();

/*
route    /order/:_id
desc     get all the orders based on User
params   _id
Access   Public
Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const Order = await OrderModel.findOne({ user: _id });
    if (!Order) {
      return res.status(404).json({ error: "No order found for the User" });
    }
    return res.status(200).json({ Order: Order });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route    /order/new/:_id
desc     Add new Order 
params   _id
Access   Public
Method   POST
 */

Router.post("/new/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { orderDetails } = req.body;
    console.log(_id);
    console.log(orderDetails);
    const newOrder = await OrderModel.findOneAndUpdate(
      {
        user: _id,
      },
      {
        $push:  {orderDetails} ,
      },
      {
        new: true,
      }
    );
    return res.json({ Order: newOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
