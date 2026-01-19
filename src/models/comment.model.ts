// models/Comment.js
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
text:{
  type:String,
  require:true,
}
  },
  { timestamps: true }
);

export default mongoose.models.Comment ||
  mongoose.model("Comment", commentSchema);
