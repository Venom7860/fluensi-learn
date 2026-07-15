import { createCourse } from "@/features/courses/actions";

import PageHeader from "@/components/admin/page-header";

import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function NewCoursePage() {
  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        title="Add Course"
        description="Create a new course."
      />

      <Card>
        <form action={createCourse} className="space-y-6">
          <div>
            <Label htmlFor="title">
              Course Title
            </Label>

            <Input
              id="title"
              name="title"
              placeholder="German A1"
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
              placeholder="Course description..."
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">
              Create Course
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}