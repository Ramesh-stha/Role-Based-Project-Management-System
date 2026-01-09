import Project from "@/src/models/project.model";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await ConnectDB();

    const formdata = await req.formData();

    const projectname = formdata.get("projectname") as string;
    const description = formdata.get("description") as string;
    const assigndate = formdata.get("assigndate") as string;
    const submittiondate = formdata.get("submittiondate") as string;
    const manager = formdata.get("manager") as string;

    const photoFile = formdata.get("photo") as File | null;
    const pdfFile = formdata.get("pdf") as File | null;

    const photo = photoFile ? photoFile.name : null;
    const pdf = pdfFile ? pdfFile.name : null;

    const createdata = await Project.create({
      projectname,
      description,
      assigndate,
      submittiondate,
      manager,
      photo,
      pdf,
    });

    return NextResponse.json(
      { message: "Project created", createdata },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("CREATE PROJECT ERROR:", error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
