"use client";
import React, { useState } from "react";
import Server from "../server/page";

const Client = () => {
  const [name, setName] = useState<String>("Dr. Vipin Classes");
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to {name}</h1>
      <button
        className="rounded bg-orange-600 p-2 text-white font-bold"
        onClick={() => setName("Dr. Vipin Teotia")}
      >
        Change Name
      </button>
    </div>
  );
};

export default Client;
