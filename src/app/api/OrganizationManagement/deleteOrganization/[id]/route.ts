import Organization from "@/src/models/organization.model";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const {id} = await params;
    await ConnectDB();

  

    if(!id){
      return NextResponse.json(
        { message: "Id is required for Organization deletion" },
        { status: 400 }
      );
    }
    //deleting organization
    const orgDelete = await Organization.findByIdAndDelete(id);

    //checking if organization exist or being deleted
    if (!orgDelete) {
      return NextResponse.json(
        { message: "Organization doesn't exist." },
        { status: 404 }
      );
    }

    //if organization deleted
    return NextResponse.json(
      { message: "Organization deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occured while deleting", error);
    return NextResponse.json(
      { message: "Failed to delete organization." },
      { status: 500 }
    );
  }
}
