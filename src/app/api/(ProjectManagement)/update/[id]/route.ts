import { NextRequest, NextResponse } from "next/server";
import Project from "@/src/models/project.model";
import ConnectDB from "@/src/utils/db";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(
  req: NextRequest,
  context: Context
) {
  try {
    await ConnectDB();

    // ✅ Next.js v16: params MUST be awaited
    const { id } = await context.params;

    const body = await req.json();

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Project updated successfully",
        data: updatedProject,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("PATCH Project Error:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
