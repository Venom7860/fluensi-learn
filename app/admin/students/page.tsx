import Link from "next/link";
import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/admin/page-header";
import DataTable from "@/components/admin/data-table";
import EmptyState from "@/components/admin/empty-state";
import SearchBar from "@/components/admin/search-bar";

import { Button } from "@/components/ui/button";

export default async function StudentsPage() {
  const students = await prisma.user.findMany({
    where: {
      role: "STUDENT",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <PageHeader
        title="Students"
        description="Manage all registered students."
        buttonText="+ Add Student"
        buttonHref="/admin/students/new"
      />

      <SearchBar placeholder="Search students..." />

      {students.length === 0 ? (
        <EmptyState
          title="No Students"
          description="There are no students registered yet."
        />
      ) : (
        <DataTable>
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Joined</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  <Link
                    href={`/admin/students/${student.id}/edit`}
                    className="font-medium text-purple-700 hover:underline"
                  >
                    {student.name}
                  </Link>
                </td>

                <td className="p-4">
                  {student.email}
                </td>

                <td className="p-4">
                  {student.isActive ? "🟢 Active" : "🔴 Inactive"}
                </td>

                <td className="p-4">
                  {student.createdAt.toLocaleDateString()}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/admin/students/${student.id}/edit`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                      >
                        Edit
                      </Button>
                    </Link>

                    <Link
                      href={`/admin/students/${student.id}/courses`}
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                      >
                        Courses
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </DataTable>
      )}
    </div>
  );
}