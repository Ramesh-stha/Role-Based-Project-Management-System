import Project from "@/src/models/project.model";
import ConnectDB from "@/src/utils/db";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await ConnectDB();

    const body = await req.json();
    const { id } = params;

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return new Response(
        JSON.stringify({ message: "Project not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Project updated successfully",
        data: updatedProject,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("PATCH Project Error:", error);

    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
