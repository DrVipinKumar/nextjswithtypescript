import { NextRequest, NextResponse } from "next/server";
const GET = async (request: NextRequest) => {
  var userData = await fetch("https://api.github.com/users");
  var data = await userData.json();
  return NextResponse.json(data, { status: 200 });
};

export { GET };
