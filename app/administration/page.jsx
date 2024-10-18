import { redirect } from "next/navigation";

export default function AboutPage() {
  // Redirect to /about/xyz
  redirect("/administration/secretarysDesk");
}
