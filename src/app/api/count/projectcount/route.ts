import { NextResponse } from "next/server";
import ConnectDB from "@/src/utils/db";
import User from "@/src/models/User";
import Project from "@/src/models/project.model";

export async function GET() {
  try {
    await ConnectDB();

   

    // 2️⃣ Count available members
    const availableProject = await Project.countDocuments(

    );
    const completeproject = await Project.countDocuments(
  {      status:"COMPLETED",}
    );
      const pendingproject = await Project.countDocuments(
  {      status:"PENDING",}
    );
    

     const Workingproject = await Project.countDocuments(
      {  status: { $in: ["ACCEPTED"] }}
    );


    return NextResponse.json(
      { message:"project count successfull",availableProject,completeproject,Workingproject,pendingproject},
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
