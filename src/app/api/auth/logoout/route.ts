import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      {
        success: true,
        message: "Logout Successful",
      },
      { status: 200 }
    );

    // Clear the cookie properly
    response.cookies.set("token", "", {
      httpOnly: true,   // very important
      expires: new Date(0),
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Logout failed" },
      { status: 500 }
    );
  }
}
