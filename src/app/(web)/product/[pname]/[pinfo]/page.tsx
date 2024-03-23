import React from "react";
type paramsType = {
  params: {
    pinfo: string;
    pname: string;
  };
};
const page = ({ params }: paramsType) => {
  const { pinfo, pname } = params;
  return (
    <div className="m-2">
      <h1 className="font-bold">
        Dynamic Route is {pname} and Nested Dynamic Route is {pinfo}
      </h1>
    </div>
  );
};

export default page;
