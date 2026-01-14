import { api } from "@/src/services/index";
import { NextResponse } from "next/server";
export const addProjectService = async (formData: FormData) => {
  const res = await fetch("/api/createproject", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to create project");
  }

  return data;
};
export const getProjectService = async () => {
  try {
    const res = await api.get("/createproject");
    return res.data;
  } catch (error: any) {
    console.error("CREATE PROJECT ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
};

export const GetProjectbyId = async (id: string) => {
  try {
    const res = await api.get(`/createproject/${id}`);
    return res.data;
  } catch (error: any) {
    console.error("CREATE PROJECT ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
};
