import ConnectDB from "@/src/utils/db";
import Comment from "@/src/models/comment.model";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{
        await ConnectDB();
        const comment=await Comment.find();
        return NextResponse.json({message:"successfully send",comment},{status:200})

    }catch(error){
        return NextResponse.json({message:"internal error found"},{status:500});
    }
}