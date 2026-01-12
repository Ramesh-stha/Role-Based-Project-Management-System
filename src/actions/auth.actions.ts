"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const login = async (data: { email: string; password: string }) => {
  console.log("login data is", data);
  try {
    const response: any = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("response from login is", response);

    const resData = await response.json();

    (await cookies()).set("token", resData.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 4,
    });

    return resData;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const logout = async () => {
  (await cookies()).set("token", "", { expires: new Date(0) });
  redirect("/login");
};
