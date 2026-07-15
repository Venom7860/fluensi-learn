import { notFound } from "next/navigation";
import Link from "next/link";

import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/admin/page-header";
import Card from "@/components/ui/card";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const student = await prisma.user.findFirst({
    where: {
      id,
      role: "STUDENT",
    },
  });

  if (!student) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Student Details"
        description="View student information."
      />

      <Card>
        <div className="space-y-5">
          <div>
            <h3 className="text-sm text-gray-500">
              Full Name
            </h3>

            <p className="mt-1 text-lg font-semibold">
              {student.name}
            </p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">
              Email
            </h3>

            <p className="mt-1">
              {student.email}
            </p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">
              Status
            </h3>

            <p className="mt-1">
              {student.isActive ? "🟢 Active" : "🔴 Inactive"}
            </p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">
              Role
            </h3>

            <p className="mt-1">
              {student.role}
            </p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">
              Joined On
            </h3>

            <p className="mt-1">
              {student.createdAt.toLocaleDateString()}
            </p>
          </div>

          <div className="pt-4">
            <Link
              href={`/admin/students/${student.id}/edit`}
              className="rounded-lg bg-purple-700 px-4 py-2 text-white hover:bg-purple-800"
            >
              Edit Student
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}