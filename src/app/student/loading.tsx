import React from "react";
import Spinner from "../components/Spinner";

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default loading;
