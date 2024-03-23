import React from "react";
const wait =async (ms:number)=>{
    return new Promise(resolve=> setTimeout(resolve,ms));
 }
const StudentInfo = async () => {
   // await wait(8000);
  return <div className="font-bold">StudentInfo</div>;
};

export default StudentInfo;
