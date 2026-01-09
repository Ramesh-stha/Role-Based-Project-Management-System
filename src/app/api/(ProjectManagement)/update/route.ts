import Project from "@/src/models/project.model";
import ConnectDB from "@/src/utils/db";

export async function PATCH(req:Request,{params}:{params:{id:string}}){

    await ConnectDB();
    const data=await req.json();
    const updated =await Project.findByIdAndUpdate{
        params.id,
        data,
        {new}
    }
}