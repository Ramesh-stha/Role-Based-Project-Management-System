
"use client"
import React, { ChangeEvent, useState } from "react"
import AddProject from "@/src/components/admin/addproject"
import { GenericHTMLFormElement } from "axios";
const page = () => {
  const [image,setImage] =useState<File>();

  const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files){
      setImage(e.target.files[0]);
    }
    console.log(image);
  }
const onSubmit=()=>{
  if(!image){
alert("Please select an image");
  }
}
const formData=new FormData();
formData.append("image",image);

  return (
    <div>
      <h1>Welcome to manager.</h1>
      <div>
        <input type="file" accept="image/*" onChange={handleChange}  />
      </div>
      <button onClick={onSubmit}>Submit</button>

<AddProject/> 
    </div>
  )
}

export default page
