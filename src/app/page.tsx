import { redirect } from "next/navigation";

export default function Home() {
  // Directly route users to the Login page by default
  redirect("/login");
}
