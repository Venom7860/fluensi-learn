import PageHeader from "@/components/admin/page-header";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function NewCategoryPage() {
  return (
    <div className="mx-auto max-w-xl">
      <PageHeader
        title="Add Category"
        description="Create a new course category."
      />

      <Card>
        <form className="space-y-6">
          <div>
            <Label htmlFor="name">
              Category Name
            </Label>

            <Input
              id="name"
              placeholder="Example: German A1"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">
              Create Category
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}