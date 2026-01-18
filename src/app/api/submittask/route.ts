import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";
import Task from "@/src/models/task";
import { UploadImage } from "@/src/utils/upload-image";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import User from "@/src/models/User";

const JWT_SECRET = process.env.JWT_SECRET as string;
export async function POST(req: Request) {
  try {
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
    
        if (!loggedInUser) {
          return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const username=loggedInUser.username.toString();
        
        const manager=loggedInUser.manager.toString();
        
        const email=loggedInUser.email.toString();
    const formData = await req.formData();
    const pdfFile = formData.get("pdf") as File | null;

    if (!pdfFile) {
      return NextResponse.json(
        { message: "PDF file is required" },
        { status: 400 }
      );
    }

    const uploadedPDF = await UploadImage(pdfFile, "pdf-uploads") as {
      secure_url: string;
    };

    const task = await Task.create({
      pdf: uploadedPDF.secure_url,
      manager,
      email,
      username,
    });

    return NextResponse.json(
      {
        message: "Task saved successfully",
        data: task,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("SUBMIT TASK ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


