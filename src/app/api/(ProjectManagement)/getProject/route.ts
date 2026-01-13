import Project from "@/src/models/project.model";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";
import User from "@/src/models/User";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
const JWT_SECRET=process.env.JWT_SECRET as string;
export async function GET(req:Request){

    try{
        

       await ConnectDB();

const token= (await cookies()).get("token")?.value;
if(!token){
    return NextResponse.json({message:"Unauthorized"},{status:401});
}
const {payload}:any= await jwtVerify(
    token,
    new TextEncoder().encode(JWT_SECRET)
);
const loginuser=await User.findById(payload.id);
    const project = await Project.find({ manager: loginuser.manager });

    if(loginuser.role==="admin" ){
        const project = await Project.find();
        return NextResponse.json({message:"project is get successfully",project},{status:200});
    }else if(loginuser.role==="manager"){
        const project = await Project.find( );
        return NextResponse.json({message:"project is get successfully",project},{status:200});
    }else{
       return NextResponse.json({message:"project is get successfully",project},{status:200});
       
    }
    }catch(error){
        return NextResponse.json({message:"internal error occured"},{status:500});
    }
    
}
