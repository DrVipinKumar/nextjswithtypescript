import React from "react";
const wait =async (ms:number)=>{
    return new Promise(resolve=> setTimeout(resolve,ms));
 }
const StudentMarks = async () => {
  //  await wait(3000);
  return <div className="font-bold">StudentMarks</div>;
};

export default StudentMarks;
