import nextConnect from "next-connect";
import multer from "multer";    
import cloudinary from "@/src/utils/cloudinary";
import Image from "@/src/models/image";
import ConnectDB from "@/src/utils/db";

// Configure multer to store files in memory
const upload = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

apiRoute.use(upload.single("file")); // Accept single file

apiRoute.post(async (req, res) => {
  await ConnectDB();

  try {
    const fileBuffer = req.file?.buffer;
    if (!fileBuffer) return res.status(400).json({ error: "No file uploaded" });

    // Upload to Cloudinary
    cloudinary.uploader.upload_stream({ folder: "nextjs_uploads" }, async (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      // Save URL & public_id to MongoDB
      const image = new Image({
        url: result.secure_url,
        public_id: result.public_id,
      });
      await image.save();

      res.status(200).json({ message: "Uploaded successfully", image });
    }).end(fileBuffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const config = {
  api: {
    bodyParser: false, // Important for multer
  },
};

export default apiRoute;
