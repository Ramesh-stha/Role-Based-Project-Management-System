"use client";
import React from "react";
import Image from "next/image";
import "@/src/components/member/style/taskview.css";
import Photo from "@/src/assets/photo.jpg";
import { useRouter } from "next/navigation";
const Project = [
  {
    id: 1,
    photo: Photo,
    Projecttitle: "Hello Sarkar",

    Assigndate: "2082-07-23",
    submitdate: "2092-07-30",
  },
  {
    id: 2,
    photo: Photo,
    Projecttitle: "Hello Sarkar",
    Assigndate: "2082-07-23",
    submitdate: "2092-07-30",
  },
  {
    id: 3,
    photo: Photo,
    Projecttitle: "Hello Sarkar",
    Assigndate: "2082-07-23",
    submitdate: "2092-07-30",
  },
  {
    id: 4,
    photo: Photo,
    Projecttitle: "Hello Sarkar",
    Assigndate: "2082-07-23",
    submitdate: "2092-07-30",
  },
];

const Taskview = () => {
  const router = useRouter();

  const handlecard = (id) => {
    console.log("clicked Project");
    return router.push(`/Taskdetails/${id}`);
  };

  return (
    <div className="p-6">
      <p>Assign Task Lists</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {Project.map((item) => (
          <div
            key={item.id}
            className=" flex  gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            onClick={() => handlecard(item.id)}
          >
            <Image
              className=" "
              src={item.photo}
              alt="Invalid Image"
              width={100}
              height={25}
            />
            <div>
              <p>Project Title: {item.Projecttitle}</p>
              <p> Assign Date: {item.Assigndate}</p>
              <p>Submission Date: {item.submitdate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Taskview;
