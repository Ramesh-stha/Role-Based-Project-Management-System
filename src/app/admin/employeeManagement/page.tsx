"use client";
import { useState } from "react";
import AddManager from "@/src/components/admin/AddManager";
import AddMember from "@/src/components/admin/AddMember";
import { HiOutlineX } from "react-icons/hi";
// Define the type for active form
type ActiveForm = "member" | "manager" | null;

const Page: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<ActiveForm>(null);

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center justify-start px-4 py-8 bg-gray-100">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-sm sm:max-w-xl md:max-w-3xl">
        {/* Add Manager Card */}
        <div
          onClick={() => {
            setModalVisible(true);
            setActiveForm("manager");
          }}
          className="
            bg-white rounded-xl shadow-md
            p-6 sm:p-8
            flex flex-col items-center justify-center
            cursor-pointer
            transition-transform duration-300
            hover:scale-[1.03] hover:shadow-xl
          "
        >
          <span className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            + Add Manager
          </span>
          <p className="text-sm sm:text-base text-gray-600 text-center">
            Click here to add a new manager
          </p>
        </div>

        {/* Add Member Card */}
        <div
          onClick={() => {
            setModalVisible(true);
            setActiveForm("member");
          }}
          className="
            bg-white rounded-xl shadow-md
            p-6 sm:p-8
            flex flex-col items-center justify-center
            cursor-pointer
            transition-transform duration-300
            hover:scale-[1.03] hover:shadow-xl
          "
        >
          <span className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            + Add Member
          </span>
          <p className="text-sm sm:text-base text-gray-600 text-center">
            Click here to add a new team member
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Blur */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-white/30"
            onClick={() => setModalVisible(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg p-6 z-10">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
              onClick={() => setModalVisible(false)}
            >
               {<HiOutlineX/>}
            </button>

            {activeForm === "manager" && (
              <AddManager closeModal={() => setModalVisible(false)} />
            )}
            {activeForm === "member" && (
              <AddMember closeModal={() => setModalVisible(false)} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;