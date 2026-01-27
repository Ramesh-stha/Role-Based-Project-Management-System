"use client"
import React from "react";
import { useGetTask } from "@/src/hooks/mutation/useGettask";
import toast from "react-hot-toast";

const page=()=>{
    const {data:task,isLoading}=useGetTask();
    console.log(task);
    if(isLoading){
   return <p>loading ....</p>
    }
    return(
        <>
        <div className="grid grid-cols-3  p-2 m-2">
            {task.task.map((item:any)=>(
                <div key={item._id} className="felx text-left items-center bg-white  border border-blue-200 p-2 m-2 rounded-lg shadow-lg">
                   
                    <p>Submitted By:{item.username}</p>
                     <p>Email:{item.email}</p>
                      <p>Assigned by:{item.manager}</p>
                      
                      <button onClick={()=>window.open(item.pdf)} className="bg-green-500 p-2 m-2 justify-center rounded-md hover:bg-blue-400">Vew task</button>

                   
                </div>
            ))}
        </div>
        </>
    )
}
export default page;