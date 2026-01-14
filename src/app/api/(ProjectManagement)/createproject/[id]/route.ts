import { NextRequest, NextResponse } from "next/server";
import Project from "@/src/models/project.model";
import ConnectDB from "@/src/utils/db";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;
    await ConnectDB();
    if (!id) {
      return NextResponse.json(
        { message: "Id is not given", success: false },
        { status: 400 }
      );
    }
    const task = await Project.findById(id);
    if (!task) {
      return NextResponse.json(
        { message: "Task not found", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Task detail fetch successful", success: true, task },
      { status: 200 }
    );
  } catch (error) {
    console.log("error encountered in project get by id", error);
    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
};
