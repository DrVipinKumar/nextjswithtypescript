"use client";
import Modals from "@/app/components/Modals";
import ImagePage from "@/app/image/page";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <button className="rounded bg-cyan-600 p-2 m-2 text-white" onClick={() => setIsOpen(true)}>Show Image</button>
      <Modals isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <ImagePage />
      </Modals>
    </div>
  );
};

export default Page;
