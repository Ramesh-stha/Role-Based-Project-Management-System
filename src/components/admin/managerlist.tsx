import React from "react";
import { useGetManager } from "@/src/hooks/useGetmember";
const ManagerList: React.FC = () => {
  const{data:manager}=useGetManager();
  console.log(manager);
  if(!manager){
    return <p>error to load ....</p>
  }
  return (
    <div className="flex flex-col  rounded-md items-center shadow-md mt-4 p-2 w-full md-full sm:w-[35vw] bg-gradient-to-r from-red-400 to-blue-400">
      <h2 className="font-bold text-2xl text-white">Manager List</h2>
      <div>
        <div className="overflow-x-auto w-full mt-2">
          <table className="min-w-full bg-transparent rounded-lg">
            <thead className=" text-white">
              <tr>
                <th className="py-2 px-4 text-center">S.N</th>
                <th className="py-2 px-4 text-center">Name</th>
                <th className="py-2 px-4 text-center">Email</th>
          
              </tr>
            </thead>
            <tbody>
              {manager?.manager.map((items:any,index:any) => (
                <tr
                  key={items._id}
                  className="p-2"
                >
                  <td className="py-2 text-center text-white px-4">{index+1}</td>
                  <td className="py-2 text-center text-white px-4">{items.username}</td>
                  <td className="py-2  text-center text-white px-4">{items.email}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ManagerList;
