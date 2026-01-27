import Task from "@/src/models/task";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";
import User from "@/src/models/User";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET as string;

 export async function GET(req:Request){
    await ConnectDB();

     const token = (await cookies()).get("token")?.value;
        if (!token) {
          return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const { payload }: any = await jwtVerify(
          token,
          new TextEncoder().encode(JWT_SECRET),
        );
        const loginuser = await User.findById(payload.id);
         //for admin to get data
            if (loginuser.role === "admin") {
              const task = await Task.find();
              return NextResponse.json(
                { message: "project is get successfully", task },
                { status: 200 },
              );
            
            } else if (loginuser.role === "manager") { //for manager to get data
              const task = await Task.find({ manager: loginuser.username });
              return NextResponse.json(
                { message: "project is get successfully",task },
                { status: 200 },
              );
            } else {
              return NextResponse.json(
                { message: "project is get successfully"},
                { status: 200 },
              );
            }
    
    const task=await Task.find();
    if(!task){
        return NextResponse.json({message:"no task found"},{status:401});
    }
    return NextResponse.json({message:"data is fetch successfully",task},{status:200});

 }