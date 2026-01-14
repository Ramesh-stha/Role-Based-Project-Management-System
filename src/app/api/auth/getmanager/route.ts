import User from "@/src/models/User";
import {ConnectDB} from "@/src/utils/db";
import { NextResponse } from "next/server";

export async function GET(req:Request){

    try{
        await ConnectDB();
     
      const manager= await User.find( {role:"manager"}).select("-password");
   
 console.log(manager);
        return NextResponse.json({message:"User is fetch successfully",manager},{status:200});
    

    }catch(error){
    return  NextResponse.json({message:"internal error"},{status:500});
          console.log(error);
        
    }

}