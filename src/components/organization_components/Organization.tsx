"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod";
import {
  organizationManagement,
  organizationSchema,
} from "@/src/schemas/registerOrganization.schema";
import { useAddOrganization } from "@/src/hooks/mutation/organization.mutation";

const Organization = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<organizationSchema>({
    resolver: zodResolver(organizationManagement),
    reValidateMode: "onSubmit",
  });

  const { mutate, isPending } = useAddOrganization();
  const onSubmit = (data: organizationSchema) => {
    console.log("datas",data)
    mutate(data, {
      onSuccess: (response: any) => {
        toast.success("Organization created successfully.");
        return response.message, reset();
      },

      onError: (error: any) => {
        toast.error("Faild to create organization.")
        console.log(error.message || "Error occured while saving.");
      },
    });
    // console.log("data is....", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md text-gray-800 p-4 flex flex-col items-center shadow-md"
    >
      <h3 className="font-bold text-xl mb-3">Create Organization</h3>

      {/* Organization Name */}
      <input
        {...register("organizationname")}
        placeholder="Organization Name"
        className="border-b-2 focus:border-green-400 focus:outline-none p-2 m-1"
      />
      {errors.organizationname?.message && (
        <p className="text-red-500 text-sm">
          {errors.organizationname?.message}
        </p>
      )}

      {/* Email */}
      <input
        {...register("organizationemail")}
        placeholder="Email"
        className="border-b-2 focus:border-green-400 focus:outline-none p-2 m-1"
      />
      {errors.organizationemail && (
        <p className="text-red-500 text-sm">
          {errors.organizationemail?.message}
        </p>
      )}

      {/* Phone */}
      {/* <input
        {...register("organizationphone")}
        placeholder="Phone"
        className="border-b-2 focus:border-green-400 focus:outline-none p-2 m-1 w-full"
      />
      {errors.organizationphone && (
        <p className="text-red-500 text-sm">
          {errors.organizationphone.message}
        </p>
      )}

      password
      <input
        type="password"
        {...register("organizationpassword")}
        placeholder="Password"
        className="border-b-2 focus:border-green-400 focus:outline-none p-2 m-1 w-full"
      />
      {errors.organizationpassword && (
        <p className="text-red-500 text-sm">
          {errors.organizationpassword.message}
        </p>
      )} */}

      <button
        type="submit"
        disabled={isPending || isSubmitting}
        className="bg-green-200 text-green-700 hover:bg-green-300 cursor-pointer rounded-md font-semibold p-2 mt-4 disabled:opacity-50"
      >
        {isPending ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default Organization;
