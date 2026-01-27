import User from "@/src/models/User";
import {ConnectDB} from "@/src/utils/db";
import { NextResponse } from "next/server";
import Project from "@/src/models/project.model";
export async function GET(req:Request){

    try{
        await ConnectDB();
        const project= await Project.find();
        console.log(project);

     
    const user= await User.find( {role:"member"}).select("-password").populate({
        path:"projects",
        match:{status:"completed"}
       
    });
    
        return NextResponse.json({message:"User is fetch successfully",user},{status:200});
    

    }catch(error){
    return  NextResponse.json({message:"internal error"},{status:500});
          console.log(error);
        
    }

}