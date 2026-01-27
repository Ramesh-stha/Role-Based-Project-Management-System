import { NextResponse } from "next/server";
import ConnectDB from "@/src/utils/db";
import User from "@/src/models/User";
import Project from "@/src/models/project.model";

export async function GET() {
  try {
    await ConnectDB();

   

    // 2️⃣ Count available members
    const availablememberCount = await User.countDocuments({
      role: "member",
 
    });


    return NextResponse.json(
      { message:"member count successfull",availablememberCount},
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
