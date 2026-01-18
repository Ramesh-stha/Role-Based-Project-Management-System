"use client";
import useGetProject from "@/src/hooks/useAddproject";
import AddProject from "@/src/components/admin/addproject";
import { useUpdateProjectStatus } from "@/src/hooks/useAddproject";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
type ActiveForm = "AddProject" | null;

type TableData = {
  _id: string;
  projectname: string;
  manager: string;
  status: "Completed" | "In Progress" | "Pending" | "On Hold";
  assigneddate: string;
  submittiondate: string;
  pdf: any;
  photo: any;
};


const BoardTask = () => {
  const { mutate, isPending } = useUpdateProjectStatus();

  const { data, isLoading } = useGetProject();
  // const [option, setOption] = useState("");
  // console.log(data);

  const [activeform, setActiveForm] = useState<ActiveForm>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleChange = (id: string, status: string) => {
    mutate({ id, status });
  };

  if (isLoading) return <p>Loding ......</p>;
  return (
    <div className="flex flex-col items-center m-1 p-2 overflow-x-auto">
      {/* Add Button */}
      <div
        onClick={() => {
          setModalVisible(true);
          setActiveForm("AddProject");
        }}
        className="
            bg-white w-[20rem] rounded-xl shadow-md
            m-2
            p-6 sm:p-8
            flex flex-col items-center justify-center
            cursor-pointer
            transition-transform duration-300
            hover:scale-[1.03] hover:shadow-xl
          "
      >
        <span className="text-xl sm:text-2xl font-bold text-gray-700 mb-2">
          + Add Project
        </span>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Blur */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-white/30"
            onClick={() => setModalVisible(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg p-6 z-10">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-700 cursor-pointer font-bold text-xl"
              onClick={() => setModalVisible(false)}
            >
              <HiOutlineX />
            </button>

            {activeform === "AddProject" && (
              <AddProject onClose={() => setModalVisible(false)} />
            )}
          </div>
        </div>
      )}
      {/* Desktop View */}
      <table className=" hidden w-full md:table bg-white text-gray-800 rounded-md shadow-md">
        <thead className="bg-gray-100 text-sm uppercase">
          <tr>
            <th className="p-4 text-center">S.N</th>
            <th className="p-4 text-center">Project</th>
            <th className="p-4 text-center">Manager</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Start Date</th>
            <th className="p-4 text-center">End Date</th>
            <th className="p-4 text-left">Project Photo</th>
            <th className="p-4 text-center">project PDF</th>
          </tr>
        </thead>

        <tbody>
          {data.project.map((item: any, index: any) => (
            <tr
              key={item._id}
              className={`border-t text-sm hover:bg-gray-50 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="p-4 text-center">{index + 1}</td>
              <td className="p-4 text-center">{item.projectname}</td>
              <td className="p-4 text-center">{item.manager}</td>
              <td className="p-4 text-center">
                <select
                  value={item.status}
                  onChange={(e) => handleChange(item._id, e.target.value)}
                  className="cursor-pointer rounded-md px-2 py-1"
                >
                  <option value="PENDING">Pending</option>
                  <option value="ACCEPTED">Accepted</option>
                  <option value="COMPLETED">Completed</option>
                </select>
              </td>
              <td className="p-4 text-center">
                {item.assigneddate.split("T")[0]}
              </td>
              <td className="p-4 text-center">
                {item.submittiondate.split("T")[0]}
              </td>
              <td className="text-center">
                <button
                  className="p-2 bg-blue-400 cursor-pointer hover:bg-blue-700 text-white rounded-md font-semibold"
                  onClick={() => window.open(item.photo, "_blank")}
                >
                  view Image
                </button>
              </td>
              <td className="text-center">
                <button
                  className="p-2 bg-green-400 cursor-pointer hover:bg-green-700 text-white rounded-md font-semibold"
                  onClick={() => window.open(item.pdf, "_blank")}
                >
                  view pdf
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Mobile view */}
      <div className="md:hidden flex flex-col gap-4 items-center">
        {data.project?.map((item: any, index: string) => (
          <div
            key={item._id}
            className="flex flex-col items-center shadow-md p-4 rounded-md sm:text-sm"
          >
            <div className="p-1 bg-gray-700 text-white font-semibold rounded-md p-2">
              {item.projectname}
            </div>
            <div className="p-1 text-gray-500">Manager : {item.manager}</div>
            <div className="p-1 text-gray-500">
              Assigned Date : {item.assigneddate.split("T")[0]}
            </div>
            <div className="text-gray-500">
              Submission Date : {item.submittiondate.split("T")[0]}
            </div>
            <div className="m-2 p-2 rounded-md shadow-md">
              <button
                className="p-2 m-1 bg-blue-400 cursor-pointer hover:bg-blue-700 text-white rounded-md font-semibold"
                onClick={() => window.open(item.photo, "_blank")}
              >
                Project Image
              </button>
              <button
                className="p-2 m-1 bg-green-400 cursor-pointer hover:bg-green-700 text-white rounded-md font-semibold"
                onClick={() => window.open(item.pdf, "_blank")}
              >
                view pdf
              </button>
            </div>
            <select
              value={item.status}
              onChange={(e) => handleChange(item._id, e.target.value)}
              className="cursor-pointer rounded-md px-2 py-1"
            >
              <option value="PENDING">Pending</option>
              <option value="ACCEPTED">Accepted</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardTask;
