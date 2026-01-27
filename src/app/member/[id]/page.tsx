"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useGetProjectbyId } from "@/src/hooks/useAddproject";
import { useSavetask } from "@/src/hooks/useSavetask";
import Comment from "@/src/components/member/comment";
import { handleApiError } from "@/src/services";
import NotFound from "../../not-found";
import toast from "react-hot-toast";
export default function TaskDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const [pdf, setPdf] = React.useState<File | null>(null);

  const { data: task, error, isLoading } = useGetProjectbyId(id);
  const { mutate, isPending } = useSavetask();
  const router = useRouter();

  const handleSubmit = () => {
    if (!pdf) {
      alert("Please upload a PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", pdf);
    formData.append("taskId", id as string);
    mutate(formData, {
      onSuccess: () => {
        toast.success("Task submitted successfully.")
       
      },
    });
  };

  if (isLoading) {
    return <p> Loading.....</p>;
  }
  if (!task) {
    return <p>No task found</p>;
  }
  if(!Image){
    return <p>image is null</p>
  }

  if(error){
  NotFound();
  }
  return (
   <>
   {task.task? <div className="p-4 max-w-xl mx-auto">
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => router.push("/member")}
      >
        Back
      </button>
      <Image
        src={task.task.photo}
        alt="image not found"
        width={100}
        height={100}
      />
      <h1 className="text-2xl font-bold mb-2">{task.task.projectname}</h1>
      <p className="mb-2">Description: {task.task.description}</p>
      <p className="mb-2">
        Assigned Date: {task.task.assigneddate?.split("T")[0]}
      </p>
      <p className="mb-2">
        Submission Date:
        {task.task.submittiondate?.split("T")[0]}
      </p>
      <div>
      {task.task.pdf && (
        <button
          onClick={() => window.open(task.task.pdf, "_blank")}
          className="bg-blue-500 text-blue-400 rounded-full p-2 m-2 mb-6 font-semibold hover:bg-blue-800 cursor-pointer"
        >
          View PDF File
        </button>
      )}
      </div>
      <br />
      <label className="text-green-500 font-bold text-xl  p-2 ">
        After Completing Submit your task done
      </label>
      <input
        type="file"
        accept=".pdf"
        className="bg-yellow-600 p-2 mb-3 rounded-xl"
        onChange={(e) => setPdf(e.target.files?.[0] || null)}
      />
      <br />
      <button
        className="bg-blue-400 rounded-full p-2 font-semibold text-white shadow-sm shadow-black-500 hover:bg-green-800 cursor-pointer"
        onClick={handleSubmit}
      >
        Submit Task
      </button>
      <Comment/>
    </div>:<p>No task</p>}</>
  );
}
