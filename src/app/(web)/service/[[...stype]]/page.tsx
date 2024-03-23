import React from "react";
import { Metadata } from "next";
type paramsType = {
  params: {
    stype: string[];
  };
};
export const generateMetadata =({ params }: paramsType):Metadata=>{
    return {
      title: params.stype?`Service:${params.stype}`:"Service Page",
    }
}
const page = ({ params }: paramsType) => {
  const { stype } = params;
  return (
    <div className="m-2">
      <h6 className="font-bold">Service Dynamic Routing</h6>
      {stype?.map((route, index) => (
        <h1 key={index}>
          Dynamic Route {index}:{route}
        </h1>
      ))}
    </div>
  );
};

export default page;
