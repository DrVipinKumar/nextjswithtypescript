import React from "react";
type propsType = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  leftpane: React.ReactNode;
};
const layout = ({ children, header, footer, leftpane }: propsType) => {
  return (
    <div className="h-screen">
      <div className="border-2">{header}</div>
      <div className="min-h-80 flex">
        <div className="border-2 p-2 w-1/5">{leftpane}</div>
        <div className="border-2 p-2 w-4/5">{children}</div>
      </div>
      <div className="border-2">{footer}</div>
    </div>
  );
};

export default layout;
