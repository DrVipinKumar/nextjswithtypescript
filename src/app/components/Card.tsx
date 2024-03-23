import React from "react";
type propsType = {
  children: React.ReactNode;
};
const Card = ({ children }:propsType) => {
  return <div className="h-[60vh] w-60 rounded-xl shadow-xl border-2 flex justify-center items-center">
    {children}
    </div>;
};

export default Card;
