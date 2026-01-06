"use client";
import Link from "next/link";
import { useState } from "react";
// import Login from "@/src/app/components/login/page"

type formState = {
  username: string;
  email: string;
  password: string;
};
const page = () => {
  const [form, setForm] = useState<formState>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const handleForm = (e: any) => {
    e.preventDefault();
    // handle signup logic here
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 px-4">
      <form
        onSubmit={handleForm}
        className="flex flex-col w-full max-w-md bg-gray-800 text-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold text-center mb-6">Register</h3>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="bg-transparent border-b-2 border-gray-400 focus:border-green-500 outline-none p-2 mb-4 placeholder-gray-400"
        />

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
          className="bg-green-500 hover:bg-green-600 transition-colors rounded-md py-2 mb-4 font-semibold"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link href="/components/login" className="text-green-400 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default page;
