"use client";
import Image from "next/image";
import Photo from "@/public/assets/photo.jpg";
import { useRouter } from "next/navigation";
import useGetProject from "@/src/hooks/useAddproject";

const Taskview = () => {
  const router = useRouter();
  const { data, isLoading, error } = useGetProject();
  console.log("data received is", data);
  const handlecard = (_id: string) => {
    console.log("clicked Project", _id);
    router.push(`/member/${_id}`);
  };
  if (isLoading) return <p>Loading data.....</p>;
  if (error) return <p>error to load data ......</p>;

  return (
    <div className="p-6 flex flex-col items-center rounded-md shadow-md">
      <p className="text-lg sm:text-2xl font-bold m-2 bg-gray-700 rounded-md p-1 sm:p-2 text-white">
        Assigned Task Lists
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.project?.map((item: any) => (
          <div
            key={item._id}
            onClick={() => handlecard(item._id)}
            className="flex gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer"
          >
            <Image
              src={item.photo}
              alt="Project"
              width={80}
              height={80}
              className="rounded-md overflow-clip"
            />
            <div>
              <p className="font-semibold">Project Title: {item.projectname}</p>
              <p className="text-sm text-gray-600">
                Assign Date: {item.assigneddate.split("T")[0]}
              </p>
              <p className="text-sm text-gray-600">
                Submission Date: {item.submittiondate.split("T")[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taskview;
