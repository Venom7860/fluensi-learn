import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import {
  updateCourse,
  deleteCourse,
} from "@/features/courses/actions";

import PageHeader from "@/components/admin/page-header";

import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditCoursePage({
  params,
}: Props) {
  const { id } = await params;

  const course = await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      classes: true,
      enrollments: true,
    },
  });

  if (!course) {
    notFound();
  }

  const updateAction = updateCourse.bind(null, id);
  const deleteAction = deleteCourse.bind(null, id);

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="Edit Course"
        description="Manage your course."
      />

      <Card>
        <form
          action={updateAction}
          className="space-y-6"
        >
          <div>
            <Label htmlFor="title">
              Course Title
            </Label>

            <Input
              id="title"
              name="title"
              defaultValue={course.title}
            />
          </div>

          <div>
            <Label htmlFor="description">
              Description
            </Label>

            <textarea
              id="description"
              name="description"
              rows={5}
              defaultValue={course.description ?? ""}
              className="w-full rounded-md border p-3"
            />
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isPublished"
              defaultChecked={course.isPublished}
            />

            <span>Published</span>
          </label>

          <div className="rounded-lg border bg-gray-50 p-4">
            <div className="flex justify-between">
              <span>Total Classes</span>

              <strong>{course.classes.length}</strong>
            </div>

            <div className="mt-3 flex justify-between">
              <span>Students Enrolled</span>

              <strong>{course.enrollments.length}</strong>
            </div>

            <div className="mt-3 flex justify-between">
              <span>Created</span>

              <strong>
                {course.createdAt.toLocaleDateString()}
              </strong>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              type="submit"
            >
              Save Changes
            </Button>
          </div>
        </form>

        <form
          action={deleteAction}
          className="mt-6 border-t pt-6"
        >
          <Button
            type="submit"
            variant="destructive"
          >
            Delete Course
          </Button>
        </form>
      </Card>
    </div>
  );
}