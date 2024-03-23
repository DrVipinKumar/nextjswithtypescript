"use client";
import React, { useEffect, useState } from "react";

const Client = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetch("https://api.github.com/users");
      const data = await userData.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-2xl">User Information is :</h1>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Client;
