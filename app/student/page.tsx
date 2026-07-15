import Link from "next/link";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import LogoutButton from "@/components/auth/logout-button";

export default async function StudentDashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return null;

  const enrollments = await prisma.enrollment.findMany({
    where: {
      studentId: session.user.id,
    },
    include: {
      course: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between border-b bg-white px-8 py-4">
        <div>
          <h1 className="text-2xl font-bold">
            Fluensia Learn
          </h1>

          <p className="text-sm text-gray-500">
            Welcome, {session.user.name}
          </p>
        </div>

        <LogoutButton />
      </header>

      <main className="mx-auto max-w-7xl px-8 py-10">
        <h2 className="mb-2 text-3xl font-bold">
          My Courses
        </h2>

        <p className="mb-8 text-gray-600">
          Continue your German learning journey.
        </p>

        {enrollments.length === 0 ? (
          <div className="rounded-xl border bg-white p-12 text-center">
            <h3 className="text-2xl font-semibold">
              No Courses Assigned
            </h3>

            <p className="mt-3 text-gray-500">
              Your courses will appear here once your administrator assigns them.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {enrollments.map((enrollment) => (
              <Link
                key={enrollment.id}
                href={`/student/courses/${enrollment.course.id}`}
                className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">
                  {enrollment.course.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {enrollment.course.description ||
                    "No description available."}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Progress
                  </span>

                  <span className="font-semibold">
                    0%
                  </span>
                </div>

                <div className="mt-3 h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-0 rounded-full bg-purple-600"></div>
                </div>

                <div className="mt-6 font-medium text-purple-600">
                  Continue Learning →
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}