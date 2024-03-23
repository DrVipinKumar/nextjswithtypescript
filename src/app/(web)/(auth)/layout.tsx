import React from "react";
type propsType = {
  children: React.ReactNode;
};
const layout = ({ children }: propsType) => {
  return <div className="m-2">
    <h1 className="font-bold">Authenticate Yourself:</h1>
    {children}
  </div>;
};

export default layout;
