"use client";
import { useRef, useState } from "react";
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
import { useGetManager, useGetMember } from "@/src/hooks/useGetmember";

const Addproject = () => {
  const { mutate, isPending } = useAddProject();
  const imageRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<HTMLInputElement>(null);

  const { data: user } = useUser();
  const { data: users, isLoading: isMemberLoading } = useGetMember();
  const { data: manager, isLoading: isManagerLoading } = useGetManager();

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

    if (values.member) formData.append("member", values.member);
    if (user?.role === "admin" && values.manager) {
      formData.append("manager", values.manager);
    }

    if (values.image?.[0]) formData.append("photo", values.image[0]);
    if (values.pdf?.[0]) formData.append("pdf", values.pdf[0]);

    mutate(formData, {
      onSuccess: () => alert("Project added successfully"),
    });
  };

  if (isMemberLoading || isManagerLoading) {
    return <p className="text-center mt-10">Loading data...</p>;
  }

  return (
   
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-3">
     
      <div className="w-full max-w-2xl bg-white p-4 sm:p-6 shadow rounded-md">
        <h1 className="text-lg sm:text-xl font-bold mb-4 text-center">
          Add Project
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* Project Name */}
          <div>
            <input
              {...register("projectName")}
              placeholder="Project Name"
              className="border p-2 rounded w-full"
            />
            {errors.projectName && (
              <Formerror>{errors.projectName.message}</Formerror>
            )}
          </div>

          {/* Description */}
          <div>
            <textarea
              {...register("description")}
              placeholder="Description"
              className="border p-2 rounded w-full resize-none"
              rows={3}
            />
            {errors.description && (
              <Formerror>{errors.description.message}</Formerror>
            )}
          </div>

          {/* Image upload */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setImagePreview(
                    URL.createObjectURL(e.target.files[0])
                  );
                }
              }}
            />

            {imagePreview && (
              <Image
                src={imagePreview}
                alt="preview"
                width={100}
                height={80}
                className="rounded border"
              />
            )}
          </div>

          {/* Dates */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="date"
              {...register("assignedDate")}
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              {...register("endDate")}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* PDF */}
          <input type="file" accept="application/pdf" {...register("pdf")} />

          {/* Manager */}
          {user?.role === "admin" && (
            <div>
              <label className="font-semibold text-sm">
                Choose Manager
              </label>
              <select
                {...register("manager")}
                className="border p-2 rounded w-full"
              >
                <option value="">Select manager</option>
                {manager?.manager.map((item: any) => (
                  <option key={item._id} value={item.username}>
                    {item.username}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Member */}
          <div>
            <label className="font-semibold text-sm">
              Choose Member
            </label>
            <select
              {...register("member")}
              className="border p-2 rounded w-full"
            >
              <option value="">Select member</option>
              {users?.user.map((item: any) => (
                <option key={item._id} value={item.username}>
                  {item.username}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            disabled={isPending}
            className="bg-blue-600 text-white py-2 rounded cursor-pointer hover:bg-blue-700 transition"
          >
            {isPending ? "Saving..." : "Add Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproject;
