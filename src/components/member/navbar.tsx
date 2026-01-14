import Link from "next/link";
import "@/src/components/member/style/navbar.css";

import React from "react";

interface NavLink {
  id: number;
  name: string;
  href: string;
}

const links: NavLink[] = [
  {
    id: 1,
    name: "Home",
    href: "/member",
  },
  {
    id: 3,
    name: "Profile",
    href: "/member/Profile",
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
    <ul className="ul">
      {links.map((item) => (
        <li key={item.id}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
   </div> 
  );
};

export default Navbar;
