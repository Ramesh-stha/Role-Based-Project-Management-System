import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";
import Task from "@/src/models/task";
import { UploadImage } from "@/src/utils/upload-image";

export async function POST(req: Request) {
  try {
    await ConnectDB();

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


