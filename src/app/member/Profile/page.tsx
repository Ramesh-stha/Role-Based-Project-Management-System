"use client"

import React from "react";
import "@/src/components/member/style/profile.css";
import { useUser } from "@/src/hooks/getUser";
import { logout } from "@/src/actions/auth.actions";

const Profile = () => {
  const { data: user, isLoading, isError, error } = useUser();

  const handleLogout = () => {
    logout();
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;
  if (!user) return <p>No user data found.</p>;

  console.log(user);

  return (
    <div className="profilecontainer"> 
      <p className="P">Profile Details</p> 
      
      <div className="data">
        <p>UserName:</p>
        <p>{user.username}</p>

        <p>Email :</p>
        <p>{user.email}</p>

       <p>Manager</p>
       <p>{user.manager}</p>
      </div>

      <div className="update">
        <button className="b1">Update</button>
        <button className="b1">Reset Password</button>
        <button className="b1" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
