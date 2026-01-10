import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';  
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dqgiwygiy', 
        api_key: '114313727219273', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
const uploadOnCloudinary= async (localFilePath)=>{
    try{
        if(!localFilePath) return null;

        const result= await cloudinary.uploader.upload(localFilePath,{
             resource_type:"auto",
        });
        console.log("File uploaded to Cloudinary successfully:",result);
        return result;
    }
    catch(error){
        console.error("Error uploading file to Cloudinary:",error);
        throw error;
    }
}

})();
export default cloudinary;