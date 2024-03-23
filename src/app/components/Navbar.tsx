'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const path = usePathname();
  const menuItem = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Image",
      link: "/image",
    },
    {
      name: "Client",
      link: "/Client",
    },
    {
      name: "Server",
      link: "/server",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div className="flex justify-between p-3 bg-gray-200">
      <div>
        <h1 className="text-2xl font-extrabold text-purple-700">
          Dr. Vipin Classes
        </h1>
      </div>
      <div>
        <ul className="flex">
          {menuItem.map((menu) => {
            const isActive = menu.link === path;
            return (
              <li key={menu.link}>
                <Link
                  href={menu.link}
                  className={isActive ? "m-2 text-purple-600 font-bold" : "m-2"}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
