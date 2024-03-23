'use client'
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Links = () => {
    const path=usePathname();
  const mylink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Product",
      link: "/product",
    },
    {
      name: "Service",
      link: "/service",
    },
  ];
  return (
    <div>
      <ul className="flex m-2">
        {mylink.map((item) => {
            const isActive=item.link===path;
              return (
            <li key={item.name}>
              <Link href={item.link} className={isActive?"font-bold text-red-700 m-2":"m-2"}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      {/* <Link href="/product">Product</Link>
        <Link href="/about" replace>About</Link> */}
    </div>
  );
};

export default Links;
