import Organization from "@/src/models/organization.model";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";
import { organizationManagement } from "@/src/schemas/registerOrganization.schema";

export async function POST(req: Request) {
  try {
    await ConnectDB();
    const body = await req.json();

    const validateData = organizationManagement.parse(body);
    const { organizationname, organizationemail } = validateData;

    const existingorg = await Organization.findOne({ organizationemail });
    if (existingorg) {
      return NextResponse.json(
        { message: "Organization already exists" },
        { status: 409 }
      );
    }

    console.log("oganization name", organizationemail, organizationname)

    const organization = await Organization.create({
      organizationname,
      organizationemail,
    });

    return NextResponse.json(
      {
        message: "Organization saved successfully.",
        organization: {
          organizationid: organization._id,
          organizationname: organization.organizationname,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("Error:",error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
