"use client";

import React, { ChangeEvent, useState } from "react";
import AddProject from "@/src/components/admin/addproject";

const Page = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const onSubmit = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:3000/api/image", {
        method: "POST",
        body: formData, // ❌ no headers
      });
      console.log(formData);

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      console.log("Upload success:", data);
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    }
  };

  return (
    <div>
      <h1>Welcome to manager.</h1>

      <input type="file" accept="image/*" onChange={handleChange} />

      <button onClick={onSubmit}>Submit</button>
      

      <AddProject />
    </div>
  );
};

export default Page;
