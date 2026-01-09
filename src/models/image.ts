import mongoose from "mongoose";

const imageSchema =new mongoose.schema(
    {
         image_url:String,
            public_id:String,
    }
)
export const ImageModel=mongoose.model("Image",imageSchema); 