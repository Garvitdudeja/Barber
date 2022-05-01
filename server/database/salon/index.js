import mongoose from 'mongoose'

const SalonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    mapLocation : {type: String, required: true},
    speciality: [String],
    salonTimings: String,
    contactNumber: Number,
    averageCost: Number,
    amenties: [String],
    menu:{
        type: mongoose.Types.ObjectId,
        ref: "Menus"
    },
    reviews:{
        type: mongoose.Types.ObjectId,
        ref: "Reviews"
    },
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },

    
},{
    timestamps: true
})
const SalonModel = mongoose.model("Salons", SalonSchema)

export default SalonModel;