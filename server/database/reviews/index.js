import mongoose from "mongoose";

const   ReviewSchema = new mongoose.Schema({
    service : {
        type: mongoose.Types.ObjectId,
        ref: "Services"
    },
    salon : {
        type: mongoose.Types.ObjectId,
        ref: "Salons"
    },
    user : {
        type: mongoose.Types.ObjectId,
        ref: "Users"
    },
    rating: {type:Number,required:true},
    reviewText: {type:String},
    isSalonReview: {type:Boolean},
    isServiceReview: {type: Boolean},
    photos: [{
        type: mongoose.Types.ObjectId,
        ref: "Images"
    }]

},{
    timestamps: true
})

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);