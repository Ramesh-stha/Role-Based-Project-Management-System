import { api } from "@/src/services/index";
import { NextResponse } from "next/server";
import { GET } from "../app/api/(ProjectManagement)/getProject/route";
export const addProjectService = async (formData: FormData) => {
  const res = await fetch("/api/createproject", {
    method: "POST",
     credentials: "include",
    
    body: formData, // ✅ FormData
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to create project");
  }

  return data;
};
export const getProjectService=async()=>{
  try{
  const res=await api.get("/getProject",{
 
  });
  return res.data;
}
catch (error:any) {
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
}
export const updateProjectStatusService=async(id:string,status:string)=>{
  try{
    const res=await api.patch("/createproject",{
      id,
      status
    });
    return res.data;
  } catch (error:any) {
    console.error("UPDATE PROJECT STATUS ERROR:", error);
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}