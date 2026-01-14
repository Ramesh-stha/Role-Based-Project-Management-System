// src/app/api/(ProjectManagement)/createproject/route.ts
import Project from "@/src/models/project.model";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";
import { UploadImage } from "@/src/utils/upload-image";

export async function POST(req: Request) {
  try {
    await ConnectDB();

    //  Parse form data
    const formData = await req.formData();
    const projectname = formData.get("projectname") as string;
    const description = formData.get("description") as string;
    const assigndateStr = formData.get("assigndate") as string;
    const submittiondateStr = formData.get("submittiondate") as string;
    const manager = formData.get("manager") as string;

    // Convert to Date objects
    const assigneddate = assigndateStr ? new Date(assigndateStr) : undefined;
    const submittiondate = submittiondateStr
      ? new Date(submittiondateStr)
      : undefined;

    //  Get files
    const photoFile = formData.get("photo") as File | null;
    const pdfFile = formData.get("pdf") as File | null;

    //  Upload to Cloudinary
    let PhotoUrl: string | null = null;
    let pdfUrl: string | null = null;

    if (photoFile) {
      const uploadedImage = (await UploadImage(photoFile, "image-uploads")) as {
        secure_url: string;
        public_id: string;
      };
      console.log("Uploaded Image:", uploadedImage);
      PhotoUrl = uploadedImage.secure_url;
    }

    if (pdfFile) {
      const uploadedPDF = (await UploadImage(pdfFile, "pdf-uploads")) as {
        secure_url: string;
        public_id: string;
      };
      console.log("Uploaded PDF:", uploadedPDF);
      pdfUrl = uploadedPDF.secure_url;
    }

    //  Create project in DB
    const createdProject = await Project.create({
      projectname,
      description,
      assigneddate,
      submittiondate,
      manager,
      photo: PhotoUrl,
      pdf: pdfUrl,
    });

    return NextResponse.json(
      { message: "Project created successfully", createdProject },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("CREATE PROJECT ERROR:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function GET(req: Request) {
  try {
    await ConnectDB();

    const project = await Project.find();
    return NextResponse.json(
      { message: "project is get successfully", project },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal error occured" },
      { status: 500 }
    );
  }
}

export async function GETbyId(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await ConnectDB();
    const { id } = params;
    const project = await Project.findById(id);
    return NextResponse.json(
      { message: "project is get successfully", project },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal error occured" },
      { status: 500 }
    );
  }
}
