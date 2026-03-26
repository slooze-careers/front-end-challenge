import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "slooze-super-secret-key-12345");

const USERS = [
  { id: "1", email: "manager@slooze.com", password: "password", role: "Manager", name: "Alice Manager" },
  { id: "2", email: "storekeeper@slooze.com", password: "password", role: "Store Keeper", name: "Bob Keeper" },
];

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = USERS.find((u) => u.email === email && u.password === password);
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("2h")
      .sign(SECRET);

    const res = NextResponse.json({
      message: "Login successful",
      user: { id: user.id, email: user.email, role: user.role, name: user.name },
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 2, // 2 hours
      path: "/",
    });

    return res;
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
