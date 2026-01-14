"use client";
import Link from "next/link";
import { useState } from "react";
import { useLogin } from "@/src/hooks/useLogin";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
type loginstate={
  email:string;
  password:string;
}
const page = () => {
  const [form, setForm] = useState<loginstate>({
    email: "",
    password: "",
  });
  const {mutate,isPending}=useLogin()
const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleForm = async(e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    mutate(form,{
      onSuccess:(data)=>{
        router.push("/");
        toast.success("Login successful.")

      },
      onError:(err:any)=>{
        toast.error("Login failed.");
      }
    })
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 px-4">
      <form
        onSubmit={handleForm}
        className="flex flex-col w-full max-w-md bg-gray-800 text-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold text-center mb-6">Login</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="bg-transparent border-b-2 border-gray-400 focus:border-green-500 outline-none p-2 mb-4 placeholder-gray-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="bg-transparent border-b-2 border-gray-400 focus:border-green-500 outline-none p-2 mb-4 placeholder-gray-400"
        />

        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-gray-300 text-sm">
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 transition-colors rounded-md py-2 mb-4 cursor-pointer font-semibold"
        >
          Login
        </button>

        <p className="text-center text-gray-400 text-sm">
          Don't have account?{" "}
          <Link href="/signup" className="text-green-400 cursor-pointer hover:underline">
            register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default page;