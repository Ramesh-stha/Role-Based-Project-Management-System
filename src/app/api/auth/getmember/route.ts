import User from "@/src/models/User";
import {ConnectDB} from "@/src/utils/db";
import { NextResponse } from "next/server";

export async function GET(req:Request){

    try{
        await ConnectDB();
     
    const user= await User.find( {role:"member"}).select("-password");
    
    console.log(user);

        return NextResponse.json({message:"User is fetch successfully",user},{status:200});
    

    }catch(error){
    return  NextResponse.json({message:"internal error"},{status:500});
          console.log(error);
        
    }

}