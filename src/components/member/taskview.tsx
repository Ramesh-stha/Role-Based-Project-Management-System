"use client";
import React from "react";
import Image from "next/image";
import Photo from "@/public/assets/photo.jpg";
import { useRouter } from "next/navigation";
import useGetProject  from "@/src/hooks/useAddproject";


const Project = [
  { id: 1, photo: Photo, Projecttitle: "Project management", Assigndate: "2082-07-23", submitdate: "2092-07-30" },
  { id: 2, photo: Photo, Projecttitle: "Account Management", Assigndate: "2082-07-23", submitdate: "2092-07-30" },
  { id: 3, photo: Photo, Projecttitle: "MAnaging role", Assigndate: "2082-07-23", submitdate: "2092-07-30" },
  { id: 4, photo: Photo, Projecttitle: "Technical accessment", Assigndate: "2082-07-23", submitdate: "2092-07-30" },
];

const Taskview = () => {
  const router = useRouter();
 const {data,isLoading,error} = useGetProject();
 console.log("data received is",data);
  const handlecard = (_id: string) => {
    console.log("clicked Project", _id);
    router.push(`/member/${_id}`);
  };
if(isLoading) return <p>Loading data.....</p>
if(error) return <p>error to load data ......</p>
  

  return (
    <div className="p-6">
      <p className="text-lg font-semibold mb-4">Assign Task Lists</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.project?.map((item:any) => (
          <div
            key={item._id}
            onClick={() => handlecard(item._id)}
            className="flex gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer"
          >
            <Image
              src={item.photo}
              alt="Project"
              width={100}
              height={80}
              className="rounded"
            />
            <div>
              <p className="font-semibold">Project Title: {item.Projecttitle}</p>
              <p className="text-sm text-gray-600">Assign Date: {item.Assigndate}</p>
              <p className="text-sm text-gray-600">Submission Date: {item.submittiondate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taskview;