import mongoose from "mongoose";
const TestSchema = mongoose.Schema({
    name: String,
    userId:{
        type: mongoose.Types.ObjectId,
        ref: "Users"
    }
})