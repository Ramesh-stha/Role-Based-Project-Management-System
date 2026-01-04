import User from "@/src/models/User";
import bcrypt from 'bcrypt';
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";

export async function POST(req:Request){

    await ConnectDB();

    const {email,password} =await req.json();

    if(!email ||!password){
        return NextResponse.json({message:"invalid username and password"},{status:402});
    }


    const user = await User.findOne({email});

    if(!user){
        return NextResponse.json({success:false,
            message:"user not found"
        })
    }
    const isMatch= await bcrypt.compare(password,user.password);
if(!isMatch){
    return NextResponse.json({success:false , message:"password doesnot match"},{status:500});
}

const token=jwt.sign(
   {id:user._id, email:user.email, role:user.role},
   process.env.JWT_SECRET as string,
   {expiresIn:"4d"}
)

  return NextResponse.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        role: user.role,
      },
    }, { status: 200 });
}