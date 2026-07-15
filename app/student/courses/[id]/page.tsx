import Link from "next/link";
import { notFound } from "next/navigation";
import { headers } from "next/headers";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentCoursePage({
  params,
}: Props) {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    notFound();
  }

  const enrollment = await prisma.enrollment.findFirst({
    where: {
      studentId: session.user.id,
      courseId: id,
    },
  });

  if (!enrollment) {
    notFound();
  }

  const course = await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      classes: {
        where: {
          isPublished: true,
        },
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!course) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl p-10">
      <h1 className="text-4xl font-bold">
        {course.title}
      </h1>

      <p className="mt-2 text-gray-600">
        {course.description}
      </p>

      <div className="mt-10 space-y-4">
        {course.classes.length === 0 ? (
          <div className="rounded-xl border bg-white p-8 text-center">
            No lessons available yet.
          </div>
        ) : (
          course.classes.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/student/lessons/${lesson.id}`}
              className="flex items-center justify-between rounded-xl border bg-white p-5 transition hover:shadow"
            >
              <div>
                <div className="text-lg font-semibold">
                  {lesson.order}. {lesson.title}
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  {lesson.description}
                </div>
              </div>

              <div className="font-medium text-purple-600">
                Start →
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}