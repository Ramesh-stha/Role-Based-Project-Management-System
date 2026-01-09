
"use client";
import { useParams, useRouter } from "next/navigation";
import Photo from "@/public/assets/photo.jpg";
import Image from "next/image";


const tasks = [
  { id: "1", photo: Photo, Projecttitle: "Project management", Assigndate: "2082-07-23", submitdate: "2092-07-30",Description:"Special Route Handlers like sitemap.ts, opengraph-image.tsx, and icon.tsx, and other metadata files remain static by default unless they use Dynamic APIs or dynamic config options" },
  { id: "2", photo: Photo, Projecttitle: "Account Management", Assigndate: "2082-07-23", submitdate: "2092-07-30", Description:"Special Route Handlers like sitemap.ts, opengraph-image.tsx, and icon.tsx, and other metadata files remain static by default unless they use Dynamic APIs or dynamic config options" },
  { id: "3", photo: Photo, Projecttitle: "MAnaging role", Assigndate: "2082-07-23", submitdate: "2092-07-30",Description:"Special Route Handlers like sitemap.ts, opengraph-image.tsx, and icon.tsx, and other metadata files remain static by default unless they use Dynamic APIs or dynamic config options" },
  { id: "4", photo: Photo, Projecttitle: "Technical accessment", Assigndate: "2082-07-23", submitdate: "2092-07-30", Description:"Special Route Handlers like sitemap.ts, opengraph-image.tsx, and icon.tsx, and other metadata files remain static by default unless they use Dynamic APIs or dynamic config options"},
];


export default function TaskDetails() {
const {id}=useParams();
const router =useRouter();
const task=tasks.find(t=>t.id===id);




  const handlesubmit=()=>{
  console.log("Button Clicked");
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => router.push("/member")}
      >
        ← Back to Task List
      </button>
      <Image src={task.photo} alt="image not found" width={70} height={50}/>
      <h1 className="text-2xl font-bold mb-2">{task.Projecttitle}</h1>
      
      <p className="mb-2"><strong>Description:</strong> {task.Description}</p>
      <p className="mb-2"><strong>Assigned Data:</strong> {task.Assigndate}</p>
      <p className="mb-2"><strong>Submission Date:</strong> {task.submitdate}</p>
      <button className="bg-blue-400 rounded-full p-2 font-semibold text-white shadow-sm shadow-black-500 hover:bg-green-500 cursor-pointer" onClick={handlesubmit}> Submit Task</button>
    </div>
  );
}
