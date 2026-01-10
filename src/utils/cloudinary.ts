import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';  
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dqgiwygiy', 
        api_key: '114313727219273', 
        api_secret: 'x2cJg76D_ZN-PEwO-MHPEu18drI' // Click 'View API Keys' above to copy your API secret
    });

})();
export default cloudinary;