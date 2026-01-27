import { NextResponse } from "next/server";
import ConnectDB from "@/src/utils/db";
import User from "@/src/models/User";
import Project from "@/src/models/project.model";

export async function GET() {
  try {
    await ConnectDB();

   

    // 2️⃣ Count available members
    const availablemanagerCount = await User.countDocuments({
      role: "manager",
 
    });


    return NextResponse.json(
      { message:"manager count successfull",availablemanagerCount},
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
