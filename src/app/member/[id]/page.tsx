"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Photo from "@/public/assets/photo.jpg";
import Image from "next/image";
import { useGetProjectbyId } from "@/src/hooks/useAddproject";


export default function TaskDetails({params}:{params:Promise<{ id: string }>}) {
  const {id} = React.use(params);
  const {data: task, isLoading } = useGetProjectbyId(id);
  const router = useRouter();

  const handlesubmit = () => {
    console.log("Button Clicked");
  };

  if(isLoading){
    return <div>
      Loading........
    </div>
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => router.push("/member")}
      >
        ← Back to Task List
      </button>
      <Image src={task.task.photo} alt="image not found" width={70} height={50} />
      <h1 className="text-2xl font-bold mb-2">{task.task.projectname}</h1>

      <p className="mb-2">
        <strong>Description:</strong> {task.task.description}
      </p>
      <p className="mb-2">
        <strong>Assigned Date:</strong> {task.task.assigneddate.split("T")[0]}
      </p>
      <p className="mb-2">
        <strong>Submission Date:</strong> {task.task.submittiondate.split("T")[0]}
      </p>
       <p className="mb-2">
        <strong>Submission Date:</strong> {task.task.pdf}
      </p>
      <button
        className="bg-blue-400 rounded-full p-2 font-semibold text-white shadow-sm shadow-black-500 hover:bg-green-500 cursor-pointer"
        onClick={handlesubmit}
      >
        {" "}
        Submit Task
      </button>
    </div>
  );
}