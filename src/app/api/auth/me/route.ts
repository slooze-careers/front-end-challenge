import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "slooze-super-secret-key-12345");

export async function GET(req: Request) {
  const token = req.headers.get("cookie")?.split("token=")[1]?.split(";")[0];

  if (!token) {
    return NextResponse.json(null, { status: 401 });
  }

  try {
    const { payload } = await jwtVerify(token, SECRET);
    return NextResponse.json({ user: payload });
  } catch (err) {
    return NextResponse.json(null, { status: 401 });
  }
}
