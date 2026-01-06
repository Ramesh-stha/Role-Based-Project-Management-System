
"use client";

import { useForm } from "react-hook-form";

type FormDetails = {
  organization_name: string;
  email: string;
};

const Organization = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDetails>();

  const onSubmit = (data: FormDetails) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className = "bg-gray-800 text-white rounded-md p-4 flex flex-col items-center">
      <input
      className = "border-b focus:border-green-400 focus:outline-none p-2 m-1 "
        {...register("organization_name", {
          required: "Organization name is required",
        })}
        placeholder="Organization Name"
      />
      {/* {errors.organization_name && (
        <span>{errors.organization_name.message}</span>
      )} */}

      <input
      className = "border-b focus:border-green-400 focus:outline-none p-2 m-1"
        {...register("email", {
          required: "Email is required",
        })}
        placeholder="Email"
      />
      {/* {errors.email && <span>{errors.email.message}</span>} */}

      <button type="submit" className = "bg-blue-600 rounded-md outline-none font-semibold p-2 mt-2 cursor-pointer">Submit</button>
    </form>
  );
};

export default Organization;
