import { createClass } from "@/features/classes/actions";

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

export default async function NewClassPage({
  params,
}: Props) {
  const { id } = await params;

  const create = createClass.bind(null, id);

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        title="Add Class"
        description="Create a new class."
      />

      <Card>
        <form
          action={create}
          className="space-y-6"
        >
          <div>
            <Label htmlFor="title">
              Class Title
            </Label>

            <Input
              id="title"
              name="title"
              placeholder="Day 1 - Introduction"
              required
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
              placeholder="https://..."
            />
          </div>

          <div>
            <Label htmlFor="pdfUrl">
              PDF URL
            </Label>

            <Input
              id="pdfUrl"
              name="pdfUrl"
              placeholder="https://..."
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
              defaultValue={1}
            />
          </div>
            <label className="flex items-center gap-3">
                <input
                    type="checkbox"
                    name="isPublished"
                />

                <span>
                    Published
                </span>
            </label>

          <div className="flex justify-end">
            <Button type="submit">
              Create Class
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}