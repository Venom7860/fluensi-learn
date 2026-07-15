import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import { updateStudentCourses } from "@/features/enrollments/actions";

import PageHeader from "@/components/admin/page-header";

import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AssignCoursesPage({
  params,
}: Props) {
  const { id } = await params;

  const student = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      enrollments: true,
    },
  });

  if (!student) {
    notFound();
  }

  const courses = await prisma.course.findMany({
    orderBy: {
      title: "asc",
    },
  });

  const enrolledIds = student.enrollments.map(
    (item) => item.courseId
  );

  const action = updateStudentCourses.bind(null, id);

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        title={`Assign Courses`}
        description={student.name}
      />

      <Card>
        <form
          action={action}
          className="space-y-4"
        >
          {courses.map((course) => (
            <label
              key={course.id}
              className="flex items-center gap-3 rounded border p-3"
            >
              <input
                type="checkbox"
                name="courseIds"
                value={course.id}
                defaultChecked={enrolledIds.includes(course.id)}
              />

              <span>{course.title}</span>
            </label>
          ))}

          <div className="flex justify-end">
            <Button type="submit">
              Save Courses
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}