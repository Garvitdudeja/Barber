import mongoose from "mongoose";

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
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  addresses: [
    {
      addressType: String, // home, work, other
      city: String,
      houseNo: String,
    },
  ],
});

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;
