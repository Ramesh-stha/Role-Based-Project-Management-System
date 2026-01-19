

import { NextResponse } from "next/server";
import Comment from "@/src/models/comment.model";
import ConnectDB from "@/src/utils/db";
import { json } from "zod";


export async function POST(req: Request) {
  
try{
  
  await ConnectDB();
  const {text} =await req.json();

  if(!text){
    return NextResponse.json({message:"missing text field"},{status:400});
  }

  const savetext= await Comment.create(
    {
      text
    }
  )
  console.log(savetext);
  return NextResponse.json({message:"successfully added",savetext},{status:201});

}catch(error){
  return NextResponse.json({message:"internal error"},{status:500});
}
}
