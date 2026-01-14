"use client";
import { useUser } from "@/src/hooks/getUser";
import { logout } from "@/src/actions/auth.actions";
import profile from "@/public/assets/profile.png";
import Image from "next/image";

const Profile = () => {
  const { data: member, isLoading, isError, error } = useUser();

  const handleLogout = () => logout();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;
  if (!member) return <p>No user data found.</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
     
      <div className="flex flex-col items-center shadow-lg rounded-md bg-white p-4 w-full max-w-md">
        
        <h2 className="font-bold text-xl sm:text-2xl bg-gray-700 text-white rounded-md px-4 py-2 mb-4">
          Profile Details
        </h2>

        <Image
          src={profile}
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full mb-3 sm:w-[100px] sm:h-[100px]"
        />

        <div className="flex flex-col items-center text-center">
          <p className="font-semibold text-lg sm:text-xl">{member.username}</p>
          <p className="font-semibold text-lg sm:text-xl break-all">
            {member.email}
          </p>

          <div className="mt-3 px-4 py-2 rounded-md shadow-md bg-green-500 text-white">
            <span className="block font-semibold">Manager</span>
            <span className="font-semibold">{member.manager}</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-5">
          <button className="bg-green-500 cursor-pointer px-4 py-2 rounded-md text-white font-semibold hover:bg-green-700">
            Update
          </button>
          <button className="bg-blue-500 cursor-pointer px-4 py-2 rounded-md text-white font-semibold hover:bg-blue-700">
            Reset Password
          </button>
          <button
            className="bg-red-500 px-4 cursor-pointer py-2 rounded-md text-white font-semibold hover:bg-red-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
