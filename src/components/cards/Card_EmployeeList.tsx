"use client";
import { z } from "zod";

const employeeDetails = z.object({
  _id: z.number(),
  emp_name: z.string(),
  role: z.string(),
});

type employeeDetai = z.infer<typeof employeeDetails>;

const EmployeeList: employeeDetai[] = [
  { _id: 1, emp_name: "Puzan", role: "Member" },
  { _id: 2, emp_name: "Aarav", role: "Manager" },
  { _id: 3, emp_name: "Sita", role: "Manager" },
  { _id: 4, emp_name: "Rohit", role: "Member" },
  { _id: 5, emp_name: "Mina", role: "Manager" },
];

const handleRemove = (_id: number) => {
  console.log(`${_id} is removed from organization.`);
};

const Card_EmployeeList = () => {
  return (
    <div className="flex flex-col w-full mt-4 max-w-5xl mx-auto p-4 rounded-lg shadow-md bg-white">
      <h3 className="font-bold text-2xl mb-6 text-gray-800 text-center">
        Employee List
      </h3>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full  rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 border-b text-left">S.n</th>
              <th className="py-3 px-6 border-b text-left">Name</th>
              <th className="py-3 px-6 border-b text-left">Role</th>
              <th className="py-3 px-6 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {EmployeeList.map((emp) => (
              <tr
                key={emp._id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-3 px-6 border-b">{emp._id}</td>
                <td className="py-3 px-6 border-b">{emp.emp_name}</td>
                <td className="py-3 px-6 border-b">{emp.role}</td>
                <td className="py-3 px-6 border-b">
                  <button
                    onClick={() => handleRemove(emp._id)}
                    className="bg-red-100 text-red-700 px-3 py-1 rounded-md cursor-pointer hover:bg-red-200 transition-colors duration-200"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {EmployeeList.map((emp) => (
          <div
            key={emp._id}
            className="flex flex-col p-4 bg-gray-50 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700">{emp.emp_name}</span>
              <span className="text-sm text-gray-500">{emp.role}</span>
            </div>
            <div className="flex justify-center items-center">
              {/* <span className="text-gray-500 text-sm">ID: {emp._id}</span> */}
              <button
                onClick={() => handleRemove(emp._id)}
                className="bg-red-100  text-red-700 px-3 py-1 rounded-md cursor-pointer hover:bg-red-200 transition-colors duration-200 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card_EmployeeList;
