import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "STUDENT") {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}