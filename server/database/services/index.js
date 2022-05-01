import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description:{type:String, required:true},
    time: {type:Number, required:true},
    forMale: {type:Boolean, required:true},
    category: {type:Boolean, required:true},
    photos : {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },
    price: {type: Number, default: 150, required: true},
    addOn : [
        {
            type: mongoose.Types.ObjectId,
            ref: "Services"
        }
    ],
    salon: {
        type: mongoose.Types.ObjectId,
        ref: "Salons",
        required: true
    }
},{
    timestamps:true
})

export const ServiceModel = mongoose.model("Services", ServiceSchema);