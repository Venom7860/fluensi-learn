import Link from "next/link";

import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/admin/page-header";
import DataTable from "@/components/admin/data-table";
import EmptyState from "@/components/admin/empty-state";
import SearchBar from "@/components/admin/search-bar";

import { Button } from "@/components/ui/button";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <PageHeader
        title="Courses"
        description="Manage all courses."
        buttonText="+ Add Course"
        buttonHref="/admin/courses/new"
      />

      <SearchBar placeholder="Search courses..." />

      {courses.length === 0 ? (
        <EmptyState
          title="No Courses"
          description="Create your first course."
        />
      ) : (
        <DataTable>
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="p-4 text-left">Course</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b">
                <td className="p-4 font-medium">
                  <Link
                    href={`/admin/courses/${course.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {course.title}
                  </Link>
                </td>

                <td className="p-4">
                  {course.description || "-"}
                </td>

                <td className="p-4">
                  {course.isPublished ? "🟢 Published" : "🟡 Draft"}
                </td>

                <td className="p-4 text-right">
                  <Link href={`/admin/courses/${course.id}/edit`}>
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