"use client"
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserList from "@/src/components/admin/userlist";
import MyPieChart from "@/src/components/admin/chart";
import { usemanagerCount, usememberCount } from "@/src/hooks/getcount";

import { useprojectCount } from "@/src/hooks/getcount";
import ManagerList from "@/src/components/admin/managerlist";


const page = () => {

  const{data:countmember}=usememberCount();
  const{data:countmanager}=usemanagerCount();
  const{data:countproject}=useprojectCount();
console.log(countproject);
if(!countmember){
  return <p>error is ....</p>
}
if(!countmanager){
  return <p>error is ....</p>
}
if(!countproject){
  return <p>error is ....</p>
}

  return (
    <div className="">
      <header className="flex item-center justify-between">
        <section className="flex gap-3  ">
          <div className=" bg-[#5B2B69]  r w-10  rounded-md ">
            <i className="flex p-2 pl-3 fa-solid fa-home  text-blue-500 text-md "></i>
          </div>

          <h1 className=" text-lg font-bold mt-2">Dashboard</h1>
        </section>
        <section className="flex  gap-1  ">
          <h1 className="text-md font-semibold text-gray-500">Overview</h1>
          <i className="fa-etch fa-solid text-gray-600 text-sm rounded-full fa-circle-question mt-1.5"></i>
        </section>
      </header>
      <main className="mt-3 ">
        <section className="grid grid-col-1 justify-center sm:grid-cols-3  items-center  gap-5  ">
    
            <div
              className=" flex bg-gradient-to-r from-blue-400 to-purple-400 justify-between  shadow-md w-60 h-25  sm:w-85 sm:h-30 rounded-md p-2  "
          
            >
              <div className="felx   ">
                <p className="text-white font-semibold mt-2 ml-2 ">
                 Available member
                </p>
                <p className="text-center text-white  font-semibold ">
                  {countmember.availablememberCount}

                </p>
              </div>
              <i
                className={`fa-solid fa-user p-4 mr-5 text-white text-lg `}
              />
            </div>
            <div
              className=" flex bg-gradient-to-r from-blue-400 to-purple-400 justify-between  shadow-md w-60 h-25  sm:w-85 sm:h-30 rounded-md p-2  "
          
            >
              <div className="felx   ">
                <p className="text-white font-semibold mt-2 ml-2 ">
                 Available manager
                </p>
                <p className="text-center text-white  font-semibold ">
                {countmanager?.availablemanagerCount}

                </p>
              </div>
              <i
                className={`fa-solid fa-user p-4 mr-5 text-white text-lg `}
              />
            </div>
            
            <div
              className=" flex bg-gradient-to-r from-blue-400 to-purple-400 justify-between  shadow-md w-60 h-25  sm:w-85 sm:h-30 rounded-md p-2  "
          
            >
              <div className="felx   ">
                <p className="text-white font-semibold mt-2 ml-2 ">
                 Total Project
                </p>
                <p className="text-center text-white  font-semibold ">
                                {countproject?.availableProject}


                </p>
              </div>
              <i
                className={`fa-solid fa-file text-black p-4 mr-5  text-lg `}
              />
            </div>
             <div
              className=" flex bg-gradient-to-r from-blue-400 to-purple-400 justify-between  shadow-md w-60 h-25  sm:w-85 sm:h-30 rounded-md p-2  "
          
            >
              <div className="felx   ">
                <p className="text-white font-semibold mt-2 ml-2 ">
                 Pending Project
                </p>
                <p className="text-center text-white  font-semibold ">
                                {countproject?.pendingproject}


                </p>
              </div>
              <i
                className={`fa-solid fa-file text-black p-4 mr-5  text-lg `}
              />
            </div>  
              <div
              className=" flex bg-gradient-to-r from-blue-400 to-purple-400 justify-between  shadow-md w-60 h-25  sm:w-85 sm:h-30 rounded-md p-2  "
          
            >
              <div className="felx   ">
                <p className="text-white font-semibold mt-2 ml-2 ">
                 Working Project
                </p>
                <p className="text-center text-white  font-semibold ">
                                {countproject?.Workingproject}


                </p>
              </div>
              
              <i
                className={`fa-solid fa-file p-4 mr-5  text-yellow-300 text-lg `}
              />
            </div> 
               <div
              className=" flex bg-gradient-to-r from-blue-400 to-purple-400 justify-between  shadow-md w-60 h-25  sm:w-85 sm:h-30 rounded-md p-2  "
          
            >
              <div className="felx   ">
                <p className="text-white font-semibold mt-2 ml-2 ">
                 Completed Project
                </p>
                <p className="text-center text-white  font-semibold ">
                                {countproject?.completeproject}


                </p>
              </div>
              
              <i
                className={`fa-solid fa-file-circle-check p-4 mr-5 text-green-300 text-lg `}
              />
            </div> 
            
        </section>
        <section className="flex flex-col sm:grid grid-cols-2 items-center sm:items-start sm:gap-2 mt-4">
          <UserList />
          <ManagerList/>
          <div className=" flex justify-center w-64 mt-4 h-64 bg-gray-400 items-center  shadow-md rounded-md pl-5">
            <MyPieChart />
          </div>
        </section>
      </main>
    </div>
  );
};
export default page;
