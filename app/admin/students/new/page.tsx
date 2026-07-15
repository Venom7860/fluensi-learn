import { createStudent } from "@/features/students/actions";

import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";

export default function NewStudentPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-8 text-3xl font-bold">
        Add Student
      </h1>

      <Card>
        <form action={createStudent} className="space-y-6">
          <div>
            <Label htmlFor="name">
              Full Name
            </Label>

            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter student's full name"
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
              placeholder="Enter email address"
              required
            />
          </div>

          <div>
            <Label htmlFor="password">
              Password
            </Label>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">
              Create Student
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}