import image from "@/src/models/image";
import ConnectDB from "@/src/utils/db";
import { UploadImage } from "@/src/utils/upload-image";

export const POST = async (request: Request) => {

  try {
      await ConnectDB();
    const formData = await request.formData();
    const file = formData.get("image") as File;
    console.log("Received file:", file);


    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
    }
    if(image){
      const uploadedImage = await UploadImage(file,"image-uploads") as { secret_url: string; public_id: string };
      console.log('Image Result:', uploadedImage);
      const saveinage = await image.create({
        url:uploadedImage.secret_url,
        public_id:uploadedImage.public_id,
      })
      console.log('Saved Image:', saveinage);
      console.log("uploadedImage:", uploadedImage);

    }
    
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: "File uploaded successfully" }), { status: 200 });
}