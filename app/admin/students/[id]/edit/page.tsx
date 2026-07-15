import Link from "next/link";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { updateStudent } from "@/features/students/actions";

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

export default async function EditStudentPage({
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

  const updateStudentWithId = updateStudent.bind(null, student.id);

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        title="Edit Student"
        description="Update student information."
      />

      <Card>
        <form action={updateStudentWithId} className="space-y-6">
          <div>
            <Label htmlFor="name">
              Full Name
            </Label>

            <Input
              id="name"
              name="name"
              type="text"
              defaultValue={student.name}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">
              Email Address
            </Label>

            <Input
              id="email"
              name="email"
              type="email"
              defaultValue={student.email}
              required
            />
          </div>

          <div className="flex justify-between pt-4">
            <Link href="/admin/students">
              <Button
                type="button"
                variant="outline"
              >
                Cancel
              </Button>
            </Link>

            <Button type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}