import { ConnectDB } from "@/src/utils/db";
import { NextResponse } from "next/server";
import User from "@/src/models/User"
import bcrypt from 'bcrypt';
import { json } from "node:stream/consumers";
import jwt from "jsonwebtoken";

export async function POST(req:Request){

    try{
        await ConnectDB();

        const {username,organizationname,email,password, role}=await req.json();

        if(!username || !organizationname || !email || !password){
            return NextResponse.json({message:"Please fill the input field"},{status:400});
    } 

    //for existing user

  const user= await User.findOne({email});
  if(user){
    return NextResponse.json({message:"User already exists"},{status:400});
  }

   const hashedPassword = await bcrypt.hash(password, 10);

const newUser = await User.create({
    username,
    organizationname,
    role:role ||"admin",
    email,
   password: hashedPassword,
});

return NextResponse.json({message:"User registered successfully",user:newUser},{status:201});


}catch(error){
      console.error(error);
        return NextResponse.json({message:"internal error"},{status:500});
    }
}