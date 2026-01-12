import React, { useRef, useState } from "react";
import { useAddProject } from "@/src/hooks/useAddproject";
import { useForm } from "react-hook-form";
import { useUser } from "@/src/hooks/getUser";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createProjectSchema,
  createProjectValues,
} from "@/src/schemas/addproject.schema";
import Formerror from "../common/Formerror";
import Image from "next/image";

const Addproject = () => {
  const { mutate, isPending } = useAddProject();
  const imageRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<HTMLInputElement>(null);
const{data:user,isLoading}=useUser();
  const [imagePreview, setImagePreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createProjectValues>({
    resolver: zodResolver(createProjectSchema),
  });

  const onSubmit = (values: createProjectValues) => {
    const formData = new FormData();

    formData.append("projectname", values.projectName);
    formData.append("description", values.description);
    formData.append("assigndate", values.assignedDate);
    formData.append("submittiondate", values.endDate);
   if (user.role === "admin" && values.manager) {
      formData.append("manager", values.manager);
    }
const status="PENDING";
    if (values.image?.[0]) {
      formData.append("photo", values.image[0]);
    }

    if (values.pdf?.[0]) {
      formData.append("pdf", values.pdf[0]);
    }
    console.log(formData);

    mutate(formData, {
      onSuccess: () => alert("Project added successfully"),
      
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">
      <h1 className="text-xl font-bold mb-4">Add Project</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("projectName")} placeholder="Project Name" className="border p-2 rounded" />
        {errors.projectName && <Formerror>{errors.projectName.message}</Formerror>}

        <textarea {...register("description")} placeholder="Description" className="border p-2 rounded" />
        {errors.description && <Formerror>{errors.description.message}</Formerror>}

        <input type="file" accept="image/*" {...register("image")} onChange={(e) => {
          if (e.target.files?.[0]) {
            setImagePreview(URL.createObjectURL(e.target.files[0]));
          }
        }} />

        {imagePreview && <Image src={imagePreview} alt="preview" width={120} height={80} />}

        <div className="flex gap-2">
          <input type="date" {...register("assignedDate")} className="border p-2 rounded w-full" />
          <input type="date" {...register("endDate")} className="border p-2 rounded w-full" />
        </div>

        <input type="file" accept="application/pdf" {...register("pdf")} />

        <input {...register("manager")} placeholder="Manager" className="border p-2 rounded" />
    
        <button disabled={isPending} className="bg-blue-600 text-white py-2 rounded">
          {isPending ? "Saving..." : "Add Project"}
        </button>
      </form>
    </div>
  );
};

export default Addproject;
