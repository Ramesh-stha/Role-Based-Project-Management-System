import User from "@/src/models/User";
import bcrypt from "bcrypt";
import ConnectDB from "@/src/utils/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {

  await ConnectDB();

  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { success: false, message: "Email and password required" },
      { status: 400 }
    );
  }

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 }
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }
  
  const payload = {
    id: user._id.toString(),
    email: user.email,
    role: user.role || "admin",
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    { expiresIn: "4d" }
  );

  const response = NextResponse.json(
    {
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        role: user.role,
      },
    },
    { status: 200 }
  );

  response.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 4 * 24 * 60 * 60,
  });

  console.log("User logged in:", response);

  return response;

  
}
