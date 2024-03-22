import { NextResponse } from "next/server";

export const GET = async (request) => {
  return NextResponse.json({ success: true });
};

export const POST = async (request) => {
  const { email, password } = await request.json();
  const response = NextResponse.json(
    { message: "success", email, name: "Prayag" },
    { status: 200 }
  );
  response.cookies.set("user", email);
  return response;
};
