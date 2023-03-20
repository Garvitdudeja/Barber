import mongoose, { Schema } from "mongoose";
const MarksTableSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
}, 
  mathMarks: Number,
  ScienceMarks: Number,
  SocialMarks: Number,
});

const MarksTableModel = mongoose.model("MarksTables", MarksTableSchema);
export default MarksTableModel;
