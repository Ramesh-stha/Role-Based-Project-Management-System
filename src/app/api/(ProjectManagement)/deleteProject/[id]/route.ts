import Project from "@/src/models/project.model";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params:Promise< { id: string } >}
) {
  try {
    await ConnectDB();

    const { id } =await params;

    if (!id) {
      return NextResponse.json(
        { message: "id missing" },
        { status: 400 }
      );
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        { message: "project not found" },
        { status: 404 }
      );
    }

    // ✅ SUCCESS RESPONSE MUST BE OUTSIDE
    return NextResponse.json(
      {
        message: "successfully deleted",
        data: deletedProject,
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "internal error" },
      { status: 500 }
    );
  }
}
