import { ConnectDB } from "@/src/utils/db";
import { NextResponse } from "next/server";
import User from "@/src/models/User";
import sendMail from "@/src/utils/sendMail";
import bcrypt from 'bcrypt';
import { json } from "node:stream/consumers";
import jwt from "jsonwebtoken";
import { send } from "node:process";

export async function POST(req:Request){

    try{
        await ConnectDB();

        const {username,organizationname,email,manager,password, role}=await req.json();

        if(!username  || !email || !password){
            return NextResponse.json({message:"Please fill the input field"},{status:400});
    } 

    //for existing user

  const user= await User.findOne({email});
  if(user){
    return NextResponse.json({message:"User already exists"},{status:400});
  }

   const hashedPassword = await bcrypt.hash(password, 10);
   const allowedRoles = ["admin", "member", "manager"];
const userRole = allowedRoles.includes(role) ? role : "admin";


const newUser = await User.create({
    username,
    organizationname,
    role:userRole,
    email,
    manager,
   password: hashedPassword,
});
console.log(newUser);


await sendMail({
to: newUser.email,
subject:"Registered SUccessfully",
html:
`<h2> Welcome ${newUser.username}</h2>
<p> your Account is created Successfully </p>
<p> <strong>Role:</strong> ${newUser.role}</p>
<p>you can now login to the system</p>

`
})


return NextResponse.json({message:"User registered successfully",user:newUser},{status:201});

}catch(error){
      console.error(error);
        return NextResponse.json({message:"internal error"},{status:500});
    }
}