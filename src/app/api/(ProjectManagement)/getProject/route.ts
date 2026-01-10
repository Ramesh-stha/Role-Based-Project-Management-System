import Project from "@/src/models/project.model";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{
       await ConnectDB();

       const project=await Project.find();
       return NextResponse.json({message:"project is get successfully",project},{status:200});
       

    }catch(error){
        return NextResponse.json({message:"internal error occured"},{status:500});
    }
    
}
