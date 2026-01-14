import Organization from "@/src/models/organization.model";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await ConnectDB();
    const orgData = await Organization.find();
    return NextResponse.json(
      { message: "Organization successfully fetched.", orgData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error occured while fetching model." },
      { status: 500 }
    );
  }
}
