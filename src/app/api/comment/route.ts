

import { NextResponse } from "next/server";
import Comment from "@/src/models/comment.model";
import ConnectDB from "@/src/utils/db";
import { json } from "zod";
import User from "@/src/models/User";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
  
try{
  
  await ConnectDB();
  /* -------- AUTH -------- */
      const token = (await cookies()).get("token")?.value;
  
      if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
  
      const { payload }: any = await jwtVerify(
        token,
        new TextEncoder().encode(JWT_SECRET)
      );
  
      const loggedInUser = await User.findById(payload.id);
      console.log(loggedInUser);
    

  const {username,text} =await req.json();
 


  if(!text){
    return NextResponse.json({message:"missing text field"},{status:400});
  }

  const savetext= await Comment.create(
    {
      username:loggedInUser.username.toString(),
      text
    }
  )
  console.log(savetext);
  return NextResponse.json({message:"successfully added",savetext},{status:201});

}catch(error){
  return NextResponse.json({message:"internal error"},{status:500});
}
}
