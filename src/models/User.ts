import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    organizationname: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Organization",
    },
    role: {
      type: String,
      enum: ["admin", "manager", "member"],
      default: "admin",
      require: true,
    },
    manager: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      tolowercase: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minLength: 8,
    },
    projects:{
      type:[mongoose.Schema.Types.ObjectId],
      ref:"Project",
    }
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.User || mongoose.model("User", userSchema);
