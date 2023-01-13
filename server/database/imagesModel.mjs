import { Schema, model } from "mongoose";

const ImagesSchema = new Schema({
  name: String,
  password: String,
  image: {
    type: String,
    required: true,
  },
});

const imagesModel = new model("images", ImagesSchema);
export default imagesModel;
