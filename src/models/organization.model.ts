import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema(
  {
    organizationname: {
      type: String,
      required: true,
    },
    organizationemail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Organization ||
  mongoose.model("Organization", OrganizationSchema);
