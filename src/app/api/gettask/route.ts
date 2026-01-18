import Task from "@/src/models/task";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";
 export async function GET(req:Request){
    await ConnectDB();

    const task=await Task.find();
    if(!task){
        return NextResponse.json({message:"no task found"},{status:401});
    }
    return NextResponse.json({message:"data is fetch successfully",task},{status:200});

 }