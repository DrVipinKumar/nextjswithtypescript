import React from "react";
type infoType = {
  name: string;
  lang: string;
  lang1: string;
};
type propsType = {
  info: infoType;
  onPress:(msg:string)=>void;
};
const Display = (props: propsType) => {
  const { info, onPress } = props;
  return (
    <div>
      <h2>
        <span className="font-bold">{info.name}</span> for {info.lang} with
        {info.lang1}
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={()=>{onPress("Executing inside Display!")}}
      >
        Click Me
      </button>
    </div>
  );
};

export default Display;
