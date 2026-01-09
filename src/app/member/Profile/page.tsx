"use client"
import User from "@/src/models/User";
import React from "react";
import "@/src/components/member/style/profile.css"
import { NextResponse } from "next/server";


const Userdata=[
    {
        _id:1,
        username:"Ram thapa",
        email:"tram111@gmail.com",
        manager:"Govinda KC",


    }
]

const Profile=()=>{
  const handleLogout = () => {
  console.log("handle change");
  };
    return(
    <div className="profilecontainer"> 
    <p className="P">Profile Details</p> 
     {Userdata.map((data)=>(
        <div key={data._id} className="data" >
            <p>UserName :</p>
            <p>{data.username}</p>
            <p>Email :</p>
            <p>{data.email}</p>
            <p>Manager :</p>
            <p>{data.manager}</p>
        </div>
       ))}
       <div className="update">
        <button className="b1">Update</button>
        <button className="b1">Reset Password</button>
        <button className="b1" onClick={handleLogout}> Logout</button>


       </div>
    </div>
    )
}
export default Profile;