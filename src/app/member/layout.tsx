"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import profile from "@/public/assets/profile.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useUser } from "@/src/hooks/getUser";
import { logout } from "@/src/actions/auth.actions";

interface MenuItem {
  id: number;
  name: string;
  href: string;
}

const items: MenuItem[] = [
 
  { id: 1, name: "Task Board", href: "/member" },
  { id: 2, name: "Profile", href: "/member/profile" },
];

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //Extracting email and photo of member
  const { data: user, isLoading, isError, error } = useUser();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;
  if (!user) return <p>No user data found.</p>;

  const handlelogout = () => {
    return logout();
  };
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`rounded-b-md sm:rounded-b-none
          bg-gray-800 text-white p-4 flex flex-col
          fixed top-0 left-0 w-64 z-50
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:flex-shrink-0
        `}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white cursor-pointer md:hidden"
          >
            <HiOutlineX size={24} />
          </button>
        </div>
        {/* Profile */}
        <div className="mb-6 flex flex-col items-center">
          <Image
            src={profile}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full p-2"
          />
          <p className="p-1 m-1 text-sm font-semibold text-center">
            {user.email}
          </p>
        </div>
        {/* Menu */}
        <nav className="flex flex-col gap-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="p-3 rounded-md font-semibold hover:bg-white hover:text-gray-800 transition-colors text-center md:text-left"
              onClick={() => setSidebarOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handlelogout}
            className=" bg-red-400 p-2 rounded-md cursor-pointer font-bold hover:bg-red-700"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden flex justify-between items-center bg-gray-800 text-white p-4">
          <h2 className="font-bold">Member Panel</h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white cursor-pointer"
          >
            {sidebarOpen ? "" : <HiOutlineMenu size={24} />}
          </button>
        </header>

        {/* Secondary Space */}
        <main className="flex-1 bg-gray-100 p-6">{children}</main>
      </div>
    </div>
  );
}
