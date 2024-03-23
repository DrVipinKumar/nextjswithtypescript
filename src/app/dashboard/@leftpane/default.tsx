import Link from "next/link";
import React from "react";

const Default = () => {
  return (
    <div>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link href="/dashboard/info">Dashboard Info</Link>
      </li>
    </div>
  );
};

export default Default;
