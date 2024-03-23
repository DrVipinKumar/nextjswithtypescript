"use server";
import React from "react";
const getData = async () => {
  var userData = await fetch("https://api.github.com/users");
  var data = await userData.json();
  return data;
};
const Server = async () => {
  var data = [];
  data = await getData();
  return (
    <div>
      <h1 className="font-bold text-2xl">User Info:</h1>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
};

export default Server;
