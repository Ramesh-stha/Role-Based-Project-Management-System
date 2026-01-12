import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Project from "@/src/models/project.model";
import { UploadImage } from "@/src/utils/upload-image";
import User from "@/src/models/User";
import { jwtVerify } from "jose";

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

    /* -------- FORM DATA -------- */
    const formData = await req.formData();

    const projectname = formData.get("projectname") as string;
    const description = formData.get("description") as string;
    const assigndateStr = formData.get("assigndate") as string;
    const submittiondateStr = formData.get("submittiondate") as string;

    if (!projectname || !description) {
      return NextResponse.json(
        { message: "Project name and description are required" },
        { status: 400 }
      );
    }

    const assigneddate = assigndateStr ? new Date(assigndateStr) : undefined;
    const submittiondate = submittiondateStr ? new Date(submittiondateStr) : undefined;

    /* -------- MANAGER LOGIC -------- */
    let manager: string;

    if (loggedInUser.role === "admin") {
      manager = formData.get("manager") as string;
      
      if (!manager) {
        return NextResponse.json(
          { message: "Manager is required for admin" },
          { status: 400 }
        );
      }
    } else if (loggedInUser.role === "manager") {
      manager = loggedInUser._id.toString();
      
    } else {
      return NextResponse.json({ message: "error" }, { status: 403 });
    }

    /* -------- FILE UPLOAD -------- */
    const photoFile = formData.get("photo") as File | null;
    const pdfFile = formData.get("pdf") as File | null;

    let PhotoUrl: string | null = null;
    let pdfUrl: string | null = null;

    if (photoFile) {
      const uploadedImage = await UploadImage(photoFile, "image-uploads") as {
        secure_url: string;
      };
      PhotoUrl = uploadedImage.secure_url;
    }

    if (pdfFile) {
      const uploadedPDF = await UploadImage(pdfFile, "pdf-uploads") as {
        secure_url: string;
      };
      pdfUrl = uploadedPDF.secure_url;
    }

    /* -------- CREATE PROJECT -------- */
    const createdProject = await Project.create({
      projectname,
      description,
      assigneddate,
      submittiondate,
      manager,
      status,
      photo: PhotoUrl,
      pdf: pdfUrl,
    });

    return NextResponse.json(
      { message: "Project created successfully", createdProject },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("CREATE PROJECT ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}