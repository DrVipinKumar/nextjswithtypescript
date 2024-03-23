import React, { Suspense } from "react";
import StudentInfo from "./StudentInfo";
import StudentMarks from "./StudentMarks";
import Spinner from "../components/Spinner";
const wait = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const page = async () => {
  await wait(1000);
  return (
    <div>
      <h1 className="font-extrabold text-3xl">Student Home Page</h1>
      <Suspense fallback={<Spinner />}>
        <StudentInfo />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <StudentMarks />
      </Suspense>
    </div>
  );
};

export default page;
