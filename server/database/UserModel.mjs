import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,

  },
  profileImage: String,
  password: {
    type: String,
    required: true,
  },
  amount: Number,
  fee:Number,
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    required: true,
    indexedDB: false
  },
  image: {
    type: String,
  },
  addresses: [
    {
      addressType: String, // home, work, other
      city: String,
      houseNo: String,
    },
  ],
  table:{
    type: mongoose.Types.ObjectId,
    ref:"MarksTables"
  }
});

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;
