import Link from "next/link";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/admin/page-header";
import EmptyState from "@/components/admin/empty-state";
import DataTable from "@/components/admin/data-table";

import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const course = await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      classes: {
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
    <div>
      <PageHeader
        title={course.title}
        description={course.description ?? ""}
      />

      <div className="mb-6 flex justify-end">
        <Link href={`/admin/courses/${course.id}/classes/new`}>
          <Button>
            + Add Class
          </Button>
        </Link>
      </div>

      {course.classes.length === 0 ? (
        <EmptyState
          title="No Classes Yet"
          description="Start by creating your first class."
        />
      ) : (
        <DataTable>
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="p-4 text-left">
                Order
              </th>

              <th className="p-4 text-left">
                Title
              </th>

              <th className="p-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {course.classes.map((item) => (
              <tr
                key={item.id}
                className="border-b"
              >
                <td className="p-4">
                  {item.order}
                </td>

                <td className="p-4">
                  {item.title}
                </td>

                <td className="p-4 text-right">
                  <Link
                    href={`/admin/courses/${course.id}/classes/${item.id}/edit`}
                  >
                    <Button variant="outline">
                      Edit
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </DataTable>
      )}
    </div>
  );
}