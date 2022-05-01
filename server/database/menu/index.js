import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    menus : [
        {
            name: {type: String, required:true},
            items: [{
                type: mongoose.Types.ObjectId,
                ref: "Services",
                unique: true
            }]
        }
    ],
    recommended: [{
        type: mongoose.Types.ObjectId,
        ref : "Services",
        unique: true
    }]
},{
    timestamps:true
})

export const MenuModel = mongoose.model("Menus", menuSchema)