import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import { updateClass } from "@/features/classes/actions";

import PageHeader from "@/components/admin/page-header";

import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{
    id: string;
    classId: string;
  }>;
};

export default async function EditClassPage({
  params,
}: Props) {
  const { id, classId } = await params;

  const lesson = await prisma.class.findUnique({
    where: {
      id: classId,
    },
  });

  if (!lesson) {
    notFound();
  }

  const action = updateClass.bind(
    null,
    id,
    classId
  );

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        title="Edit Class"
        description="Update lesson details."
      />

      <Card>
        <form
          action={action}
          className="space-y-6"
        >
          <div>
            <Label htmlFor="title">
              Class Title
            </Label>

            <Input
              id="title"
              name="title"
              defaultValue={lesson.title}
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
              defaultValue={lesson.description ?? ""}
              className="w-full rounded-md border p-3"
            />
          </div>

          <div>
            <Label htmlFor="videoUrl">
              Video URL
            </Label>

            <Input
              id="videoUrl"
              name="videoUrl"
              defaultValue={lesson.videoUrl ?? ""}
            />
          </div>

          <div>
            <Label htmlFor="pdfUrl">
              PDF URL
            </Label>

            <Input
              id="pdfUrl"
              name="pdfUrl"
              defaultValue={lesson.pdfUrl ?? ""}
            />
          </div>

          <div>
            <Label htmlFor="order">
              Display Order
            </Label>

            <Input
              id="order"
              name="order"
              type="number"
              defaultValue={lesson.order}
            />
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isPublished"
              defaultChecked={lesson.isPublished}
            />

            <span>
              Published
            </span>
          </label>

          <div className="flex justify-end">
            <Button type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}