type TableData = {
  _id: number;
  Project_name: string;
  Manager_name: string;
  Status: "Completed" | "In Progress" | "Pending" | "On Hold";
  Start_date: string;
  End_date: string;
};

const list: TableData[] = [
  {
    _id: 1,
    Project_name: "Retail Transaction System",
    Manager_name: "Amit Sharma",
    Status: "In Progress",
    Start_date: "2025-01-10",
    End_date: "2025-06-30",
  },
  {
    _id: 2,
    Project_name: "Inventory Management App",
    Manager_name: "Pooja Singh",
    Status: "Completed",
    Start_date: "2024-08-01",
    End_date: "2024-12-15",
  },
  {
    _id: 3,
    Project_name: "Employee Payroll System",
    Manager_name: "Ramesh Adhikari",
    Status: "Pending",
    Start_date: "2025-03-01",
    End_date: "2025-09-01",
  },
  {
    _id: 4,
    Project_name: "E-commerce Website",
    Manager_name: "Suman Karki",
    Status: "In Progress",
    Start_date: "2025-02-20",
    End_date: "2025-07-20",
  },
  {
    _id: 5,
    Project_name: "Project Tracking Dashboard",
    Manager_name: "Nisha Thapa",
    Status: "Pending",
    Start_date: "2025-04-05",
    End_date: "2025-10-05",
  },
];

const BoardTask = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg shadow-sm">
        <thead className="bg-gray-100 text-sm uppercase">
          <tr>
            <th className="p-4 text-center">S.N</th>
            <th className="p-4 text-left">Project</th>
            <th className="p-4 text-left">Manager</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-left">Start Date</th>
            <th className="p-4 text-left">End Date</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item, index) => (
            <tr
              key={item._id}
              className={`border-t text-sm hover:bg-gray-50 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="p-4 text-center">{item._id}</td>
              <td className="p-4">{item.Project_name}</td>
              <td className="p-4">{item.Manager_name}</td>
              <td className="p-4 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.Status==="Completed"
                    ?"bg-green-100 text-green-700"
                    :item.Status==="In Progress"
                    ?"bg-blue-100 text-blue-700"
                    :item.Status==="Pending"
                    ?"bg-red-100 text-red-700"
                    :"bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.Status}
                </span>
              </td>
              <td className="p-4">{item.Start_date}</td>
              <td className="p-4">{item.End_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardTask;