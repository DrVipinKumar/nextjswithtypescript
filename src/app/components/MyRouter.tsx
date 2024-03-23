"use client";
import React from "react";
import { useRouter } from "next/navigation";
const MyRouter = () => {
  const route = useRouter();
  const openLink = () => {
    route.push("/product");
  };
  return (
    <div>
      <button className="bg-blue-300 rounded p-2 m-2" onClick={openLink}>
        Product
      </button>
      <button
        className="bg-blue-300 rounded p-2 m-2"
        onClick={() => route.push("/service")}
      >
        Service
      </button>
      <button
        className="bg-blue-300 rounded p-2 m-2"
        onClick={() => route.replace("/about")}
      >
        About
      </button>
      <button
        className="bg-blue-300 rounded p-2 m-2"
        onClick={() => route.back()}
      >
        Back
      </button>
      <button
        className="bg-blue-300 rounded p-2 m-2"
        onClick={() => route.forward()}
      >
        Forword
      </button>
    </div>
  );
};

export default MyRouter;
