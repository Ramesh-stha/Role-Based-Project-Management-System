"use client"
import CreateProject from "@/src/components/project_components/CreateProject"

const handleCreate = ()=>{
  <CreateProject/>
}
const ManageProject = () => {
  return (
    <div>
      <div className = "flex p-4 justify-between">
        <h3 className = "ml-2 font-bold text-2xl text-gray-700 ">Project Management</h3>
        <button onClick={()=>handleCreate} className="rounded-md p-2 bg-green-200 cursor-pointer hover:bg-green-300 text-green-700">+ Create</button>
      </div>
    </div>
  );
};

export default ManageProject;
